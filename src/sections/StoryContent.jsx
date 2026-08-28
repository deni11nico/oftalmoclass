import { story } from '../data/site'
import { images } from '../data/images'

export default function StoryContent() {
  return (
    <>
      <section className="py-14 lg:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <div>
              <h2 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-ink italic sm:text-4xl">
                {story.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed font-bold text-ink sm:text-lg">
                {story.lead}
              </p>

              {story.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={images.storyExam}
                alt="Pacientă la investigația OCT RevoNX"
                className="h-full max-h-[26rem] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 lg:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="grid content-start gap-4">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={images.storyConsult}
                  alt="Dr. Flaviu Bodea explicând rezultatul unei scanări OCT"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={images.storyUltrasound}
                  alt="Ecografie oculară efectuată cu ecograful VuPad"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-ink italic sm:text-4xl">
                {story.aboutTitle}
              </h2>

              <p className="mt-6 text-base leading-relaxed font-bold text-ink sm:text-lg">
                {story.aboutLead}
              </p>

              {story.aboutBody.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
