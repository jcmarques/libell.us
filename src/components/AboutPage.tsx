import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/brand-assets';
import aboutHeroImg from '../assets/hero/hero-about.png';
import creator1 from '../assets/about/creator1.jpg';
import creator1Flip from '../assets/about/creator1-flip.jpg';
import aboutLibellImg from '../assets/about/about-libell.png';
import saintCloudImg from '../assets/about/saint-cloud.jpg';
import { FEATURES_TEAL_FILTER, FEATURES_UI, homeHash, type Language } from './FeaturesPage';
import { LanguageSelectControl } from './LanguageSelectControl';

const ABOUT_COPY: Record<
  Language,
  {
    introTitle: string;
    introBody: string;
    storyTitle: string;
    storyBody: string;
    teamTitle: string;
    memberName: string;
    memberBio: string;
    waitWho: string;
    backToPhoto: string;
    linkedinLabel: string;
    cardsTitle: string;
    saintTitle: string;
    saintBody: string;
    gcpTitle: string;
    gcpBody: string;
    stripeTitle: string;
    stripeBody: string;
    vertexTitle: string;
    vertexBody: string;
  }
> = {
  'en-US': {
    introTitle: 'About Libell.us',
    introBody:
      'We\'re a small team in Saint Cloud, Florida, building tools for interactive storytelling. Our mission is simple: help you tell visually rich stories—no technical background required.',
    storyTitle: 'Our story',
    storyBody:
      'Libell.us Publishing LLC is a Florida based company founded in the cozy Saint Cloud city. We\'re a small team of passionate individuals dedicated to empowering creativity and storytelling. Our mission is to provide powerful tools that enable anyone to create visually rich and engaging stories, regardless of their technical skills. We believe that everyone has a story to tell, and we\'re here to help you bring it to life. Thank you for being part of our journey!',
    teamTitle: 'Meet the Team',
    memberName: 'Roberto Colnaghi Junior',
    memberBio:
      "Hello, I'm Rob! I'm a software engineer and the founder of Libell.us. I'm passionate about storytelling and I'm excited to share my work with you!",
    waitWho: 'Wait, who?',
    backToPhoto: 'Back to photo',
    linkedinLabel: 'Roberto Colnaghi Junior on LinkedIn',
    cardsTitle: 'Built on trusted foundations',
    saintTitle: 'Saint Cloud, Florida',
    saintBody:
      'Where our story began—warmth, community, and inspiration. We\'re convinced Saint Cloud has the best ice cream on earth.',
    gcpTitle: 'Powered by Google Cloud',
    gcpBody:
      'We host on Google Cloud for reliability, scale, and security—including reCAPTCHA, Firebase, Cloud Functions, and more.',
    stripeTitle: 'Payments powered by Stripe',
    stripeBody:
      'Membership billing runs through Stripe for secure, dependable checkout. Your payment details are handled with care.',
    vertexTitle: 'AI services powered by Google Vertex AI',
    vertexBody:
      'Image, text, and narration features use Google Vertex AI so we can ship capable creative tools on Libell.us.',
  },
  'pt-BR': {
    introTitle: 'Sobre a Libell.us',
    introBody:
      'Somos um time pequeno em Saint Cloud, Flórida, criando ferramentas para narrativas interativas. Nossa missão é ajudar você a contar histórias visualmente ricas—sem precisar ser técnico.',
    storyTitle: 'Nossa história',
    storyBody:
      'A Libell.us Publishing LLC é uma empresa da Flórida fundada na acolhedora cidade de Saint Cloud. Somos uma equipe pequena e apaixonada por empoderar a criatividade e a narrativa. Nossa missão é oferecer ferramentas poderosas para que qualquer pessoa crie histórias visualmente ricas e envolventes, independentemente do nível técnico. Acreditamos que todos têm uma história para contar—e estamos aqui para ajudar você a dar vida a ela. Obrigado por fazer parte da nossa jornada!',
    teamTitle: 'Conheça a equipe',
    memberName: 'Roberto Colnaghi Junior',
    memberBio:
      'Olá, eu sou o Rob! Sou engenheiro de software e fundador da Libell.us. Amo narrativas e estou animado para compartilhar meu trabalho com você!',
    waitWho: 'Espera, quem?',
    backToPhoto: 'Voltar à foto',
    linkedinLabel: 'Roberto Colnaghi Junior no LinkedIn',
    cardsTitle: 'Construído sobre bases confiáveis',
    saintTitle: 'Saint Cloud, Flórida',
    saintBody:
      'Onde começamos—calor humano, comunidade e inspiração. Temos certeza de que Saint Cloud tem a melhor sorveteria do mundo.',
    gcpTitle: 'Infraestrutura no Google Cloud',
    gcpBody:
      'Rodamos no Google Cloud com confiabilidade, escala e segurança—incluindo reCAPTCHA, Firebase, Cloud Functions e mais.',
    stripeTitle: 'Pagamentos com Stripe',
    stripeBody:
      'Cobrança de assinaturas pelo Stripe, com pagamentos seguros e confiáveis. Seus dados são tratados com cuidado.',
    vertexTitle: 'IA com Google Vertex AI',
    vertexBody:
      'Recursos de IA—imagem, texto e narração—usam o Google Vertex AI para ferramentas criativas capazes na Libell.us.',
  },
};

function GoogleCloudMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 36" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 6c-2.5 0-4.8.9-6.6 2.4l-7-5.4C12.5.8 18.1-1 24 1.2L24 6z"
      />
      <path
        fill="#FBBC04"
        d="M10.4 8.4C8.1 11.4 7 15.1 7.4 19l-5.8 4.5C.2 16.8-.8 9.7 2.6 4l7.8 4.4z"
      />
      <path
        fill="#4285F4"
        d="M24 30c6.1 0 11-4.9 11-11h-9.5c0 2.5-2 4.5-4.5 4.5-1.2 0-2.3-.5-3.1-1.3L11 27.2c3.1 1.8 6.7 2.8 13 2.8z"
      />
      <path
        fill="#34A853"
        d="M35 19h10.2c.5-1.9.8-3.9.8-6 0-7.4-3.5-14-9-18.2L30 10c2.8 2.5 4.5 6.1 5 10z"
      />
    </svg>
  );
}

function VertexMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 10v8M20 8v12M28 14v10M36 12v14"
        opacity={0.85}
      />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 38l10-8 10 8"
      />
    </svg>
  );
}

function AboutInfoCard({
  title,
  body,
  media,
}: {
  title: string;
  body: string;
  media: ReactNode;
}) {
  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-800 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.35),0_0_24px_rgba(45,212,191,0.22)]">
      <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-black/40">{media}</div>
      <div className="flex flex-1 flex-col p-6">
        <h2
          className={`text-center text-lg font-medium leading-snug text-black md:text-xl ${FEATURES_TEAL_FILTER}`}
        >
          {title}
        </h2>
        <p className="mt-2 text-center text-base leading-relaxed text-white/80 md:text-lg">{body}</p>
      </div>
    </article>
  );
}

export function TeamMemberFlipCard({
  sectionTitle,
  sectionTitleId,
  name,
  bio,
  frontSrc,
  backSrc,
  frontAlt,
  backAlt,
  linkedInUrl,
  flipPrompt,
  flipBackLabel,
  linkedInAriaLabel,
}: {
  sectionTitle: string;
  sectionTitleId: string;
  name: string;
  bio: string;
  frontSrc: string;
  backSrc: string;
  frontAlt: string;
  backAlt: string;
  linkedInUrl: string;
  flipPrompt: string;
  flipBackLabel: string;
  linkedInAriaLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="order-2 flex flex-col items-center px-6 text-center sm:px-8 lg:order-1 lg:items-start lg:px-10 lg:text-left">
        <h2
          id={sectionTitleId}
          className="text-center text-xl font-normal text-white md:text-2xl lg:text-left"
        >
          {sectionTitle}
        </h2>
        <div
          className="mx-auto mt-4 h-px w-16 shrink-0 rounded-full bg-white/20 lg:mx-0"
          aria-hidden
        />
        <h3 className={`mt-8 text-2xl font-semibold md:text-3xl ${FEATURES_TEAL_FILTER}`}>{name}</h3>
        <p className="mt-4 w-full max-w-2xl text-base leading-relaxed text-features-muted md:max-w-3xl md:text-lg">
          {bio}
        </p>
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          className="mt-8 w-fit rounded-2xl border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-white/10 hover:shadow-md"
        >
          {flipped ? flipBackLabel : flipPrompt}
        </button>
      </div>
      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="w-full max-w-md [perspective:1200px] lg:max-w-lg">
          <div
            className={`relative aspect-[4/5] w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''
              }`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 [backface-visibility:hidden]">
              <img src={frontSrc} alt={frontAlt} className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img src={backSrc} alt={backAlt} className="h-full w-full object-cover" />
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-black text-white shadow-md ring-1 ring-white/20 transition-transform hover:scale-105"
                aria-label={linkedInAriaLabel}
              >
                <i className="fa-brands fa-linkedin-in text-2xl" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en-US';
    const saved = window.localStorage.getItem('libell-language');
    return saved === 'pt-BR' ? 'pt-BR' : 'en-US';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = FEATURES_UI[language];
  const c = ABOUT_COPY[language];

  useEffect(() => {
    window.localStorage.setItem('libell-language', language);
  }, [language]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-features-bar font-sans text-white">
      <div className="w-full">
        <header className="relative z-20 border-b border-features-bar-border bg-features-bar px-6 md:px-10 lg:px-16 xl:px-28 2xl:px-36">
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-7xl items-center justify-between py-3 sm:h-24">
            <Link
              to="/"
              className="flex shrink-0 flex-nowrap items-center gap-2 sm:gap-3"
              onClick={closeMobileMenu}
            >
              <img
                alt="Libell.us logomark"
                className="size-10 shrink-0 object-contain brightness-0 invert sm:size-12"
                src={imgLogo}
              />
              <span className="whitespace-nowrap font-sans text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                Libell.us
              </span>
            </Link>

            <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
              <Link to="/features" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.features}
              </Link>
              <Link to="/pricing" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.pricing}
              </Link>
              <span className="text-sm font-medium text-features-accent sm:text-base lg:text-lg" aria-current="page">
                {t.about}
              </span>
              <Link
                to="/login"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </Link>
              <LanguageSelectControl
                id="about-language-desktop"
                language={language}
                onLanguageChange={setLanguage}
                wrapperClassName="ml-1"
              />
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              <LanguageSelectControl
                id="about-language-mobile-header"
                language={language}
                onLanguageChange={setLanguage}
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
              >
                {mobileMenuOpen ? (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {mobileMenuOpen && (
          <div
            className="fixed left-0 right-0 top-20 z-50 border-b border-features-bar-border bg-features-bar px-6 py-6 shadow-lg sm:hidden"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
          >
            <nav className="flex flex-col items-center gap-6 text-center">
              <Link
                to="/features"
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.features}
              </Link>
              <Link
                to="/pricing"
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.pricing}
              </Link>
              <span className="w-full text-lg font-medium text-features-accent">{t.about}</span>
              <Link
                to="/login"
                className="w-full max-w-xs rounded-2xl border-2 border-features-accent/80 bg-features-accent py-3 text-center text-base font-medium text-features-bar hover:bg-features-accent-dim"
                onClick={closeMobileMenu}
              >
                {t.login}
              </Link>
            </nav>
          </div>
        )}

        <main>
          <section className="relative bg-black px-4 py-16 text-white sm:px-6 md:px-12 md:pb-24 md:pt-12 lg:pb-[100px] lg:pt-14">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-10 px-[5px] md:flex-row md:items-center md:gap-12 lg:gap-16">
              <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
                <h1 className="w-full text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.2]">
                  {c.introTitle}
                </h1>
                <p className="mt-6 w-full max-w-xl text-base leading-relaxed text-features-muted md:text-lg lg:leading-snug">
                  {c.introBody}
                </p>
              </div>
              <div className="flex w-full flex-1 justify-center md:max-w-[min(100%,520px)] md:justify-end lg:max-w-[min(100%,580px)]">
                <div className="w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                  <img
                    src={aboutHeroImg}
                    alt={c.introTitle}
                    className="box-content h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="our-story"
            className="scroll-mt-24 border-b border-black/5 bg-white px-6 py-12 text-black md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
            aria-labelledby="about-story-heading"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="flex w-full justify-center lg:justify-start">
                  <div className="w-full max-w-md lg:max-w-lg">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
                      <img
                        src={aboutLibellImg}
                        alt={c.storyTitle}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center px-6 text-center sm:px-8 lg:items-start lg:px-10 lg:text-left">
                  <h2
                    id="about-story-heading"
                    className="text-center text-xl font-medium text-black md:text-2xl lg:text-left"
                  >
                    {c.storyTitle}
                  </h2>
                  <div
                    className="mx-auto mt-4 h-px w-16 shrink-0 rounded-full bg-black/15 lg:mx-0"
                    aria-hidden
                  />
                  <h3 className="mt-8 text-center text-2xl font-semibold text-features-bar md:text-3xl lg:text-left">
                    Libell.us
                  </h3>
                  <p className="mt-4 w-full max-w-2xl text-base leading-relaxed text-body-on-light md:max-w-3xl md:text-lg">
                    {c.storyBody}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-24 bg-features-bar px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
            aria-labelledby="about-team-heading"
          >
            <div className="mx-auto max-w-7xl">
              <TeamMemberFlipCard
                sectionTitle={c.teamTitle}
                sectionTitleId="about-team-heading"
                name={c.memberName}
                bio={c.memberBio}
                frontSrc={creator1}
                backSrc={creator1Flip}
                frontAlt={c.memberName}
                backAlt={c.memberName}
                linkedInUrl="https://www.linkedin.com/in/colnaghi"
                flipPrompt={c.waitWho}
                flipBackLabel={c.backToPhoto}
                linkedInAriaLabel={c.linkedinLabel}
              />
            </div>
          </section>

          <section
            id="foundations"
            className="scroll-mt-24 relative overflow-hidden bg-features-ink px-6 py-16 md:px-10 md:py-24 lg:px-16 xl:px-28 2xl:px-36"
            aria-labelledby="foundations-heading"
          >
            <div className="relative mx-auto max-w-6xl">
              <h2
                id="foundations-heading"
                className="text-center text-xl font-medium tracking-wide text-white md:text-2xl lg:text-3xl"
              >
                {c.cardsTitle}
              </h2>
              <div className="mx-auto mt-14 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2">
                <AboutInfoCard
                  title={c.saintTitle}
                  body={c.saintBody}
                  media={<img src={saintCloudImg} alt="" className="h-full w-full object-cover" />}
                />
                <AboutInfoCard
                  title={c.gcpTitle}
                  body={c.gcpBody}
                  media={
                    <div className="flex h-full w-full items-center justify-center">
                      <GoogleCloudMark className="h-36 w-48 sm:h-40 sm:w-[13.5rem]" />
                    </div>
                  }
                />
                <AboutInfoCard
                  title={c.stripeTitle}
                  body={c.stripeBody}
                  media={
                    <div className="flex h-full w-full items-center justify-center">
                      <i
                        className="fa-brands fa-stripe text-7xl sm:text-8xl md:text-9xl"
                        style={{ color: '#635BFF' }}
                        aria-hidden
                      />
                    </div>
                  }
                />
                <AboutInfoCard
                  title={c.vertexTitle}
                  body={c.vertexBody}
                  media={
                    <div className="flex h-full w-full items-center justify-center">
                      <VertexMark className="size-40 text-sky-300 sm:size-44 md:size-52" />
                    </div>
                  }
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black px-6 py-8 md:px-10 md:py-10 lg:px-16 xl:px-28 2xl:px-36">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <Link to="/" className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain brightness-0 invert" src={imgLogo} />
              <span className="text-xl font-bold text-white">Libell.us</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 text-sm md:gap-8 md:text-base">
              <Link to="/features">{t.features}</Link>
              <Link to="/about" aria-current="page" className="font-medium text-features-accent">
                {t.about}
              </Link>
              <a href={homeHash('contact')}>{t.footerContact}</a>
              <Link to="/privacy">{t.footerPrivacy}</Link>
              <Link to="/terms">{t.footerTerms}</Link>
            </nav>
            <p className="mx-auto max-w-xs font-sans text-xs font-normal leading-snug text-features-muted sm:max-w-md md:text-sm">
              {t.footerCopyright}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
