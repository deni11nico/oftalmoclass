# OftalmoClass chatbot Worker

A small Cloudflare Worker that sits between the website and the Claude API.
The website is static (GitHub Pages) and cannot keep a secret, so the API key
lives here. The browser sends only the conversation; the Worker adds the system
prompt, the clinic knowledge, the medical safety rules, and the API key.

```
browser  ──POST {messages}──▶  Worker  ──▶  Claude API
         ◀── {text, toolUse} ──          ◀──
```

`src/knowledge.json` is generated from the website's own data
(`npm run build:knowledge` in the repo root), so the assistant always describes
the same clinic the site does. Regenerate and redeploy the Worker whenever the
site content changes.

## One-time setup

You need a free Cloudflare account and an Anthropic API key.

```bash
cd worker
npm install
npx wrangler login                          # opens the browser once
npx wrangler secret put ANTHROPIC_API_KEY   # paste the key when prompted
npx wrangler deploy
```

`wrangler deploy` prints the Worker URL, something like
`https://oftalmoclass-chat.<your-subdomain>.workers.dev`. That URL goes into the
website as `VITE_CHAT_API_URL` (see the root README).

## Configuration

| Where | Name | Purpose |
|---|---|---|
| `wrangler secret` | `ANTHROPIC_API_KEY` | The Claude API key. Never in code, never in the browser. |
| `wrangler.toml` `[vars]` | `ALLOWED_ORIGINS` | Comma-separated origins allowed to call the Worker. Default includes the GitHub Pages origin and localhost. |
| `wrangler.toml` `[vars]` | `CLAUDE_MODEL` | Defaults to `claude-opus-5`. `claude-sonnet-5` is a cheaper option. |

## Local development

```bash
cp .dev.vars.example .dev.vars    # then put your key in .dev.vars
npm run dev                        # http://localhost:8787
```

Point the site at it with `VITE_CHAT_API_URL=http://localhost:8787` in `.env.local`.

## Safety and limits built in

- CORS locked to `ALLOWED_ORIGINS`.
- Only `user` / `assistant` messages with text, one known tool call, and tool
  results are accepted; everything else is rejected with 400.
- History capped at 30 messages, 4000 characters per message, 1200 output tokens.
- The system prompt forbids diagnosis, medication advice and reassurance about
  symptoms, and instructs urgent referral for red-flag symptoms.
- The stable part of the system prompt is cached (`cache_control`), so repeat
  requests are mostly cache reads.
- Refusal fallback is enabled: if a safety classifier declines, the API retries
  on a fallback model in the same call.

## Cost

Claude Opus 5 with `effort: low`, a cached ~7k-token system prompt and short
replies works out to well under one cent per message. Cloudflare's free tier
covers 100,000 requests per day.
