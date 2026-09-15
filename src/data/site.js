import { withBase } from './asset.js'

export const clinic = {
  name: 'OftalmoClass',
  tagline: 'Ochii tăi sunt grija noastră',
  address: 'Bulevardul Decebal nr. 9, Parter, Oradea 410197',
  phones: ['0359 195 929', '0772 200 596'],
  hours: 'Luni până vineri, 09:00 - 18:30',
  facebook: 'https://facebook.com/OftalmoClass',
  instagram: 'https://instagram.com/officeoftalmoclass.ro',
  rating: '4,8',
}

export const routes = {
  home: '/',
  story: '/povestea-oftalmoclass',
  team: '/echipa',
  services: '/servicii-medicale',
  equipment: '/echipamente-medicale',
  products: '/produse',
  gallery: '/galerie-media',
  articles: '/articole-medicale',
  faq: '/intrebari-frecvente',
  contact: '/contact',
}

export const nav = [
  { label: 'Acasă', to: routes.home },
  { label: 'Povestea Oftalmoclass', to: routes.story },
  { label: 'Echipa', to: routes.team },
  {
    label: 'Servicii',
    children: [
      { label: 'Servicii medicale', to: routes.services },
      { label: 'Echipamente medicale', to: routes.equipment },
      { label: 'Produse', to: routes.products },
    ],
  },
  { label: 'Galerie Media', to: routes.gallery },
  {
    label: 'Noutăți',
    children: [
      { label: 'Articole medicale', to: routes.articles },
      { label: 'Întrebări frecvente', to: routes.faq },
    ],
  },
]

export const pageMeta = {
  story: {
    badge: 'Povestea OftalmoClass',
    title: 'Expertiză medicală de excepție și grijă în care poți avea încredere',
    text: 'Pacienții noștri sunt prioritatea. Ne uităm la toate particularitățile ochiului tău, nu doar la dioptrii, iar deciziile de tratament le luăm împreună, după ce înțelegi exact ce se întâmplă.',
  },
  team: {
    badge: 'Echipa',
    title: 'Medicii și specialiștii care te așteaptă la clinică',
    text: 'Personalul rămâne disponibil pentru întrebările tale și după consultație. Poți avea încredere în medici, asistenți, optometriști și opticieni.',
  },
  services: {
    badge: 'Servicii medicale',
    title: 'De la primul consult până la tratamentul potrivit',
    text: 'Oferim îngrijire de la A la Z: investigații detaliate, tratamente personalizate și optică medicală, toate în același loc.',
  },
  equipment: {
    badge: 'Echipamente medicale',
    title: 'Tehnologie care susține fiecare pas al consultației',
    text: 'Investim continuu în aparatură de la producători acreditați, ca diagnosticul să fie precis și urmărit corect în timp.',
  },
  products: {
    badge: 'Produse',
    title: 'Rame și lentile alese pentru ochii tăi',
    text: 'Măsurăm parametrii ochiului și ai ramei, iar lentilele se produc optimizat pentru tine, cu garanție de acomodare din partea producătorului.',
  },
  gallery: {
    badge: 'Galerie media',
    title: 'Cum arată clinica înainte să treci pragul',
    text: 'Spații luminoase, aparatură pregătită și oameni care îți explică fiecare pas. Așa arată o vizită obișnuită la OftalmoClass.',
  },
  articles: {
    badge: 'Articole medicale',
    title: 'Explicații scrise de medicii clinicii',
    text: 'Subiectele despre care ne întreabă pacienții cel mai des. Le discutăm pe larg la consultație, iar aici găsești lista temelor pe care le acoperim.',
  },
  faq: {
    badge: 'Întrebări frecvente',
    title: 'Răspunsuri la ce ne întreabă pacienții cel mai des',
    text: 'Dacă nu găsești aici ce te interesează, sună-ne și îți răspundem la telefon.',
  },
}

export const heroCards = [
  {
    items: [
      {
        title: 'Consultații și diagnostic',
        text: 'Evaluăm vederea în detaliu și punem un diagnostic clar, explicat pe înțelesul tău.',
      },
      {
        title: 'Investigații imagistice',
        text: 'Documentăm fiecare structură a ochiului, ca să putem urmări evoluția în timp.',
      },
    ],
  },
  {
    items: [
      {
        title: 'Tratamente și mici intervenții',
        text: 'Rezolvăm în clinică afecțiunile care nu au nevoie de sală de operație.',
      },
      {
        title: 'Optică medicală',
        text: 'Ramele și lentilele se aleg după măsurători reale, nu după aproximări.',
      },
    ],
  },
]

export const pillars = [
  {
    icon: 'UsersThree',
    title: 'Personal dedicat',
    text: 'Medici, asistenți, optometriști și opticieni care rămân disponibili pentru întrebările tale și după ce ai ieșit din cabinet.',
  },
  {
    icon: 'Target',
    title: 'Rezultatul dorit',
    text: 'Echipa participă constant la congrese și workshopuri internaționale, așa că tratamentul pe care îl primești ține pasul cu cele mai noi terapii.',
  },
  {
    icon: 'Sparkle',
    title: 'Gamă largă de servicii',
    text: 'Îngrijire de la A la Z: investigații detaliate, tratamente personalizate și ochelari de calitate la prețuri rezonabile.',
  },
  {
    icon: 'Cpu',
    title: 'Aparatură de top',
    text: 'Investim continuu în cea mai recentă aparatură oftalmologică, de la producători acreditați internațional.',
  },
]

export const stats = [
  { value: '4,8', label: 'Rating din 5 stele' },
  { value: '9', label: 'Specialiști în echipă' },
  { value: '12', label: 'Aparate de diagnostic' },
  { value: '10+', label: 'Branduri de ochelari' },
]

export const serviceGroups = [
  {
    icon: 'Eye',
    title: 'Consultații și diagnostic',
    text: 'Evaluăm vederea în detaliu și punem un diagnostic clar, explicat pe înțelesul tău.',
    items: [
      'Consultație oftalmologică completă',
      'Refracție oculară și determinare dioptrii',
      'Keratometrie și biomicroscopie',
      'Oftalmoscopie directă și indirectă',
      'Tonometrie oculară și gonioscopie',
      'Pahimetrie și cicloplegie',
      'Teste lacrimale Schirmer și fluoresceină',
      'Testare ortoptică și cromatică',
    ],
  },
  {
    icon: 'Scan',
    title: 'Investigații imagistice',
    text: 'Documentăm fiecare structură a ochiului, ca să putem urmări evoluția în timp.',
    items: [
      'Tomografie în coerență optică (OCT)',
      'Angiografie OCT',
      'Examen de câmp vizual computerizat',
      'Fotografie de pol anterior și posterior',
      'Ecografie oculară și biometrie',
      'Verificarea permeabilității căilor lacrimale',
      'Recoltare secreție conjunctivală',
    ],
  },
  {
    icon: 'Syringe',
    title: 'Tratamente și mici intervenții',
    text: 'Rezolvăm în clinică afecțiunile care nu au nevoie de sală de operație.',
    items: [
      'Injecții intravitreene anti-VEGF și triamcinolon',
      'Laser YAG: capsulotomie, iridotomie, vitrioliză',
      'Tratament Blephasteam pentru ochi uscat',
      'Blefaroplastie și excizii chirurgicale',
      'Tratament șalazion și orjelet',
      'Corecție trichiazis, ectropion și entropion',
      'Extracție corpi străini corneeni',
      'Dezobstrucția căilor lacrimale',
    ],
  },
  {
    icon: 'Eyeglasses',
    title: 'Optică medicală',
    text: 'Ramele și lentilele se aleg după măsurători reale, nu după aproximări.',
    items: [
      'Rame de vedere premium și ochelari de soare polarizați',
      'Lentile monofocale, bifocale și progresive',
      'Tratamente speciale pentru lentile',
      'Adaptare lentile de contact',
      'Alcon, Bausch & Lomb, Johnson & Johnson',
      'Reparații rame: pernițe, șuruburi, reglaje',
    ],
  },
]

export const brands = withBase([
  { name: 'Hugo Boss', logo: '/img/brands/hugo-boss.png' },
  { name: 'Jimmy Choo', logo: '/img/brands/jimmy-choo.png' },
  { name: 'Max Mara', logo: '/img/brands/max-mara.png' },
  { name: 'Charmant', logo: '/img/brands/charmant.png' },
  { name: 'Montblanc', logo: '/img/brands/montblanc.jpg' },
  { name: 'Marimekko', logo: '/img/brands/marimekko.jpg' },
  { name: 'Fossil', logo: '/img/brands/fossil.png' },
  { name: 'Pepe Jeans', logo: '/img/brands/pepe-jeans.png' },
  { name: 'Ted Baker', logo: '/img/brands/ted-baker.png' },
  { name: 'Christian Lacroix', logo: '/img/brands/christian-lacroix.jpg' },
])

export const equipmentFeatured = withBase([
  {
    title: 'OCT și Angio-OCT Optopol RevoNX',
    text: 'Scanare de mare rezoluție a retinei și a nervului optic, cu hartă vasculară obținută fără substanță de contrast.',
    image: '/img/device/oct-revonx.png',
  },
  {
    title: 'Câmp vizual Optopol PTS 2000',
    text: 'Perimetrie computerizată folosită în monitorizarea glaucomului și a afecțiunilor neurologice.',
    image: '/img/device/camp-vizual-pts2000.jpg',
  },
  {
    title: 'Laser YAG ELLEX',
    text: 'Intervenții laser rapide, fără incizie, pentru capsulotomie, iridotomie și vitrioliză.',
    image: '/img/device/laser-yag-ellex.png',
  },
])

export const equipmentList = withBase([
  {
    name: 'Autokeratorefractometru Topcon KR-800A',
    image: '/img/device/autokeratorefractometru.png',
  },
  { name: 'Biomicroscop digital Topcon SL-D4', image: '/img/device/biomicroscop-sld4.jpg' },
  { name: 'Aplanotonometru Goldmann', image: '/img/device/aplanotonometru-goldmann.jpg' },
  { name: 'Cameră foto-video digitală Topcon DV3', image: '/img/device/camera-topcon-dv3.jpg' },
  { name: 'Blephasteam Théa Laboratoires', image: '/img/device/blephasteam.jpg' },
  { name: 'Ecograf și biometru VuPad', image: '/img/device/ecograf-biometru.png' },
  {
    name: 'Autorefractometru pediatric',
    image: '/img/device/autorefractometru-pediatric.png',
  },
  { name: 'Oftalmoscop indirect Heine Omega 600', image: '/img/device/oftalmoscop-heine.webp' },
  {
    name: 'Platformă integrată biomicroscop cu cameră',
    image: '/img/device/platforma-biomicroscop.png',
  },
])

export const doctors = withBase([
  {
    name: 'Dr. Bodea Flaviu',
    role: 'Medic specialist oftalmolog, fondator',
    photo: '/img/team/bodea-flaviu.jpg',
    focus: '50% 18%',
    bio: 'Rezidențiat în oftalmologie între 2014 și 2017, cursuri avansate de chirurgia cataractei, OCT și laser, formare în chirurgie vitreo-retiniană. Asistent universitar la Disciplina de Oftalmologie a Facultății de Medicină și Farmacie din Oradea și lector la congrese ESCRS, EURETINA și ASCRS.',
    tags: ['Cataractă', 'Retină', 'Laser'],
  },
  {
    name: 'Dr. Haidu Sorin',
    role: 'Medic specialist oftalmolog',
    photo: '/img/team/haidu-sorin.png',
    focus: '50% 22%',
    bio: 'Absolvent de medicină în 2018 și rezidențiat în oftalmologie finalizat în 2022, doctorand din 2019. Stagii de pregătire la Paris în retină medicală, la București în chirurgie oculoplastică și la Ankara în chirurgia avansată de segment anterior. Autor de lucrări despre suturile corneene, tumorile palpebrale și glaucom.',
    tags: ['Glaucom', 'Oculoplastie', 'Segment anterior'],
  },
  {
    name: 'Dr. Boros Krisztina',
    role: 'Medic specialist oftalmolog',
    photo: '/img/team/boros-krisztina.jpeg',
    focus: '50% 20%',
    bio: 'Consultații generale de oftalmologie pentru adulți și copii, cu accent pe depistarea precoce a viciilor de refracție și pe monitorizarea afecțiunilor cronice.',
    tags: ['Consultații', 'Pediatrie', 'Refracție'],
  },
])

export const staff = withBase([
  {
    name: 'Asist. Orbai Andreea',
    role: 'Asistent medical',
    photo: '/img/team/orbai-andreea.png',
  },
  {
    name: 'Opt. Bodea Ionel',
    role: 'Tehnician optometrist',
    photo: '/img/team/bodea-ionel.png',
  },
  {
    name: 'Opt. Pălcuț Aneta',
    role: 'Tehnician optometrist',
    photo: '/img/team/palcut-aneta.jpg',
  },
  {
    name: 'Asist. Cârgea Teodora',
    role: 'Front office, tehnician',
    photo: '/img/team/cargea-teodora.jpg',
  },
  { name: 'Cârgea Anca', role: 'Registrator medical', photo: '/img/team/cargea-anca.jpeg' },
  { name: 'Plisco Carmen', role: 'Registrator medical', photo: '/img/team/plisco-carmen.jpeg' },
])

export const testimonials = [
  {
    name: 'Daniel Bondaș',
    text: 'Servire promptă, medic deschis la minte și orientat către pacient. Servicii de calitate și un personal foarte prietenos.',
  },
  {
    name: 'Monica Turenschi',
    text: 'Ambianță plăcută, personal cordial, explicații clare și aparatură profesională. Exact ce cauți la o clinică.',
  },
  {
    name: 'Alexandra Guiaș',
    text: 'Recomand echipa pentru profesionalism, atenție la detalii și pentru calitatea tratamentului primit.',
  },
  {
    name: 'Daniel Satmari',
    text: 'Profesionalism, aparatură de ultimă generație și un medic răbdător, care explică fiecare pas al consultației.',
  },
  {
    name: 'Ioana Cociuba',
    text: 'Servicii de calitate, ochelari perfecți și un medic respectuos și foarte profesionist.',
  },
]

export const faq = [
  {
    q: 'La ce vârstă ar trebui să vin cu copilul la primul consult?',
    a: 'Dacă nu se observă nimic neobișnuit la ochii copilului, primul consult ar trebui făcut în jurul vârstei de 2,5 până la 3 ani. Vino mai devreme dacă observi ochii care fug în poziții anormale, micșorări, poziționări anormale ale capului, lăcrimări, secreții purulente sau ticuri. O verificare înainte de începerea școlii este întotdeauna recomandată.',
  },
  {
    q: 'Dacă lucrez mult la calculator, îmi stric vederea?',
    a: 'Privitul la ecrane LED nu deteriorează permanent vederea, dar poate cauza oboseală oculară, evoluția miopiei și sindrom de ochi uscat. Expunerea continuă la excesul de lumină albastră emisă de ecrane are un rol demonstrat în degradarea prematură a fotoreceptorilor retinieni. Recomandăm pauze regulate și ochelari cu filtru de protecție.',
  },
  {
    q: 'Câte ore pe zi ar trebui petrecute maxim în fața ecranelor?',
    a: 'Limitele recomandate sunt de 30 de minute pe zi pentru preșcolari, o oră pentru copiii de 7 până la 10 ani, două ore între 10 și 14 ani, trei ore între 14 și 18 ani și patru ore pentru adulți. Peste 8 ore de expunere zilnică devin obligatorii pauzele și ochelarii de protecție.',
  },
  {
    q: 'Ce sunt exercițiile oculare și la ce ajută?',
    a: 'Cel mai frecvent este vorba despre urmărirea unui obiect în toate cele 9 direcții fundamentale ale câmpului vizual și despre alternarea focalizării la distanță, intermediar și aproape. Ele mențin tonusul musculaturii oculare și oferă relaxare.',
  },
  {
    q: 'Ce este presbiopia și cum o recunoaștem?',
    a: 'Presbiopia este o stare fiziologică a ochiului care debutează în jurul vârstei de 38 până la 40 de ani și se traduce prin nevoia de ochelari de aproape. Cristalinul pierde din elasticitate și nu mai reușește să focalizeze obiectele apropiate.',
  },
  {
    q: 'Mă voi putea acomoda cu ochelarii progresivi?',
    a: 'Tehnologia actuală permite acomodări mult mai bune decât în trecut. Măsurăm parametrii specifici ai ochilor și ai ramei, iar lentilele se produc optimizat pentru tine. Producătorii oferă garanție de acomodare și livrează două seturi gratuite în cazul în care nu te obișnuiești.',
  },
  {
    q: 'Mi s-a înroșit ochiul de ceva timp, ce poate fi?',
    a: 'Cauzele pot fi hemoragia subconjunctivală, iritația, conjunctivitele infecțioase sau alergice, uveitele, glaucomul acut sau keratitele. Fiind afecțiuni care se tratează diferit, se impune adresarea cât mai urgentă la medicul oftalmolog.',
  },
  {
    q: 'Este contraindicată nașterea naturală la persoanele miope?',
    a: 'Studiile recente arată că nu este contraindicată. Un ochi miop este de cele mai multe ori și un ochi alungit, așa că există un anumit grad de tracțiune a retinei, motiv pentru care este necesară o consultație oftalmologică prealabilă.',
  },
  {
    q: 'Este dureroasă operația de cataractă?',
    a: 'În mod normal operația de cataractă nu este dureroasă, anestezia utilizată fiind cea locală, prin injecție lângă ochi, sau topică, cu picături. Instrumentele și inciziile folosite în prezent sunt mult mai mici decât acum câțiva ani.',
  },
  {
    q: 'Când este durerea de cap de cauză oculară?',
    a: 'Durerea poate proveni din dioptrii necorectate, ochelari inadecvați, glaucom sau inflamații intraoculare. Localizarea frontală, temporală sau în spatele ochilor indică de obicei o origine oculară, spre deosebire de durerea de cauză cervicală.',
  },
  {
    q: 'Cum tratăm retinopatia diabetică?',
    a: 'Controlul glicemiei este esențial. Tratamentele includ medicație vasculară, fotocoagulare laser, laser micropulsat pentru edemul macular sau injecții anti-VEGF. Controalele oftalmologice regulate sunt obligatorii.',
  },
  {
    q: 'Ce facem când avem un corp străin corneean?',
    a: 'Nu încerca să îndepărtezi singur un șpan, pentru că fiind fierbinte în momentul în care se fixează de cornee are o aderență foarte crescută. Extracția trebuie făcută de medicul oftalmolog, în condiții sterile.',
  },
  {
    q: 'Cum gestionăm lăcrimarea excesivă sau senzația de ochi uscat?',
    a: 'Sindromul de ochi uscat cuprinde nu doar uscăciunea oculară, ci și lăcrimările excesive fără motiv obiectiv. Testul Schirmer și analiza glandelor Meibomius stabilesc tratamentul personalizat, iar terapia Blephasteam aduce ameliorare prin căldură umedă.',
  },
  {
    q: 'Ce investigații pot face la OftalmoClass?',
    a: 'Măsurarea dioptriilor, tensiunea intraoculară, documentarea foto-video, examenul de câmp vizual, OCT, angio-OCT, ecografia oculară, biometria și ultrabiomicroscopia.',
  },
]

export const products = withBase([
  {
    title: 'Rame ochelari',
    text: 'Satisfacem nevoile oferind o gamă largă de modele. Alege rame cu contur întreg, fir, capse sau clip-on.',
    image: '/img/product/rame-ochelari.jpg',
  },
  {
    title: 'Lentile',
    text: 'Oferim lentile indiferent de necesitate, dispunând de lentile monofocale, bifocale și lentile progresive.',
    image: '/img/product/lentile.jpg',
  },
  {
    title: 'Ochelari de soare polarizați',
    text: 'Modele Polaroid, Reserve și Laura Ashley, cu lentile polarizate pentru confort la volan și în aer liber.',
    image: '/img/product/ochelari-de-soare.jpeg',
  },
  {
    title: 'Lentile de contact',
    text: 'Acuvue Johnson & Johnson, Cooper Vision, Bausch & Lomb și Air Optix Alcon, adaptate după măsurători.',
    image: '/img/product/lentile-de-contact.jpg',
  },
])

export const gallery = withBase([
  { src: '/img/clinic/01.jpg', alt: 'Cabinet de diagnostic cu OCT și câmp vizual' },
  { src: '/img/clinic/07.jpg', alt: 'Pacientă la investigația OCT RevoNX' },
  { src: '/img/clinic/09.jpg', alt: 'Explicarea rezultatului OCT unei paciente' },
  { src: '/img/clinic/04.jpg', alt: 'Ecografie oculară în cabinet' },
  { src: '/img/clinic/consult-pediatric.jpg', alt: 'Consultație pediatrică la biomicroscop' },
  { src: '/img/clinic/02.jpg', alt: 'Sala de tratament a clinicii' },
  { src: '/img/clinic/11.jpg', alt: 'Discuție cu pacienta pe baza scanării retiniene' },
  { src: '/img/clinic/03.jpg', alt: 'Spațiile clinicii OftalmoClass' },
  { src: '/img/clinic/05.jpg', alt: 'Cabinet de consultații' },
  { src: '/img/clinic/06.jpg', alt: 'Aparatură de diagnostic în cabinet' },
  { src: '/img/clinic/10.jpg', alt: 'Zona de investigații a clinicii' },
  { src: '/img/clinic/12.jpg', alt: 'Interiorul clinicii OftalmoClass' },
])


export const articles = withBase([
  { title: 'Imagistica oculară. Ce este OCT-ul', image: '/img/articole/oct.png' },
  {
    title: 'Operația de cataractă, de la diagnostic la controlul postoperator',
    image: '/img/articole/cataracta.png',
  },
  {
    title: 'Am glaucom, ce opțiuni am pe lângă picături',
    image: '/img/articole/glaucom.png',
  },
  {
    title: 'Degenerescența maculară și terapiile de top',
    image: '/img/articole/dmlv.png',
  },
  {
    title: 'Opțiuni de corectare a miopiei, chirurgie sau nu',
    image: '/img/articole/miopie.png',
  },
  { title: 'Laserele în oftalmologie', image: '/img/articole/lasere.png' },
  {
    title: 'Cum scăpăm de lăcrimarea în exces sau înțepăturile oculare',
    image: '/img/articole/ochi-uscat.png',
  },
  {
    title: 'Ochelari progresivi sau mai bine separat',
    image: '/img/articole/progresivi.png',
  },
  {
    title: 'Blefaroplastia și frumusețea pleoapelor',
    image: '/img/articole/blefaroplastie.png',
  },
])

export const story = {
  title: 'Bine ai venit la clinica noastră',
  lead: 'Pacienții noștri sunt prioritatea noastră, oferim servicii medicale de calitate',
  intro: [
    'Pornită din dorința de a oferi un act medical de excepție, clinica OftalmoClass se ocupă în detaliu de toate particularitățile ochilor pacientului pentru a oferi o vedere sănătoasă.',
    'Sub coordonarea doctorului Flaviu Bodea, medic specialist oftalmolog și asistent universitar la catedra de oftalmologie a Facultății de Medicină și Farmacie din Oradea, ne concentrăm asupra detaliilor și a celor mai noi terapii în oftalmologie.',
  ],
  aboutTitle: 'Despre clinica noastră',
  aboutLead:
    'Pentru că a ține pasul cu știința și tehnologia de ultimă oră înseamnă progres, echipa de medici și optometriști a clinicii participă la congrese și workshop-uri internaționale în domeniul oftalmologiei, opticii si optometriei.',
  aboutBody: [
    'Calitatea ramelor comercializate se reflectă în materialele premium folosite în producție, articulații flexibile, rezistență la uzură, design ergonomic adaptat stilului de viață. Culorile și modelele variate oferă alternativa unei alegeri exclusiviste pentru cei moderni sau originali, dar și simplistă sau sobră pentru marii clasici. Lentilele comercializate de Oftalmo Class aduc nume consacrate la nivel mondial în fața ochilor pacienților.',
    'Lumea privită prin lentilele ItalLenti, oferă claritatea specifică și rigoarea tehnologiei japoneze sau germane. Lentilele monofocale, bifocale, progresive sau degresive pot fi completate cu filtrele speciale antizgâriere, oleofobe sau pentru calculator, în varianta normală, colorată sau fotocromatică (heliomată). Partenerii noștri asigură garanția calității pentru fiecare lentilă.',
    'Ca alternativă pentru corecția optică cu ochelari, Oftalmo Class deservește și pacienții purtători de lentile de contact, oferindu-le produse de la 3 mari producători mondiali: Alcon, Bausch & Lomb și Johnson & Johnson. Fie că e vorba de lentile de contact pentru miopii, hipermetropii, astigmatism sau prezbiopie, acestea sunt individualizate, de diametre și raze de curbură variabilă, toate având protecție UV și transmisibilitate bună a oxigenului pentru cornee.',
    'Ele vin completate de soluții de întreținere și casete de păstrare pentru cea mai bună îngrijire a suprafeței oculare.',
  ],
}
