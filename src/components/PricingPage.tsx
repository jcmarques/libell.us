import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/figma-assets';
import heroPricing from '../assets/hero/hero-pricing.png';
import cardBasics from '../assets/pricing/theBasics.jpg';
import cardCreator from '../assets/pricing/creator.jpg';
import cardWorld from '../assets/pricing/worldBuilder.jpg';
import { FEATURES_TEAL_FILTER, FEATURES_UI, homeHash, type Language } from './FeaturesPage';

const PRICING_COPY: Record<
  Language,
  {
    heroStack1: string;
    heroStack2: string;
    heroHead1: string;
    heroHead2: string;
    heroIntro: string;
    thankYouTitle: string;
    thankYouBody: string;
    whatYouGet: string;
    priceBeta: string;
    subscribe: string;
    basicsTitle: string;
    basicsDesc: string;
    basicsBullets: string[];
    creatorTitle: string;
    creatorDesc: string;
    creatorBullets: string[];
    worldTitle: string;
    worldDesc: string;
    worldBullets: string[];
  }
> = {
  'en-US': {
    heroStack1: 'Power within your',
    heroStack2: 'budget',
    heroHead1: 'Power within',
    heroHead2: 'your budget',
    heroIntro:
      'All the tools you need to write, illustrate, and publish—tiered so you only pay for the creative horsepower you use, from your first chapter to sprawling sagas.',
    thankYouTitle: 'Thank you for your interest in our membership plans!',
    thankYouBody:
      'We will offer a variety of options to suit your creative needs and help you bring your stories to life. Join our beta and get ready to unleash your imagination with Libell.us!',
    whatYouGet: 'What You Get',
    priceBeta: '$Free during the beta period',
    subscribe: 'Subscribe',
    basicsTitle: 'The Basics',
    basicsDesc: 'Get the basic limits with access to all features and tools.',
    basicsBullets: [
      '31 AI Text Generation per cycle',
      '15 AI Image Generation per cycle',
      '5 AI Audio Generation per cycle',
    ],
    creatorTitle: 'Creator Package',
    creatorDesc:
      'Mid-tier power tools.\nAll features, with standard limits.',
    creatorBullets: [
      '50 AI Text Generation per cycle',
      '25 AI Image Generation per cycle',
      '15 AI Audio Generation per cycle',
    ],
    worldTitle: 'World Builder Package',
    worldDesc: 'Get full access to our power-tools, with a generous monthly usage.',
    worldBullets: [
      '100 AI Text Generation per cycle',
      '50 AI Image Generation per cycle',
      '31 AI Audio Generation per cycle',
    ],
  },
  'pt-BR': {
    heroStack1: 'Poder dentro do seu',
    heroStack2: 'orçamento',
    heroHead1: 'Poder dentro',
    heroHead2: 'do seu orçamento',
    heroIntro:
      'Todas as ferramentas para escrever, ilustrar e publicar—em níveis que acompanham o que você produz, do primeiro capítulo aos mundos mais complexos.',
    thankYouTitle: 'Obrigado pelo interesse nos nossos planos de assinatura!',
    thankYouBody:
      'Teremos opções para diferentes necessidades criativas e para ajudar você a dar vida às suas histórias. Entre no beta e prepare-se para soltar a imaginação com a Libell.us!',
    whatYouGet: 'O que você recebe',
    priceBeta: 'Grátis durante o período beta',
    subscribe: 'Assinar',
    basicsTitle: 'O Essencial',
    basicsDesc: 'Limites básicos com acesso a todos os recursos e ferramentas.',
    basicsBullets: [
      '31 gerações de texto com IA por ciclo',
      '15 gerações de imagem com IA por ciclo',
      '5 gerações de áudio com IA por ciclo',
    ],
    creatorTitle: 'Pacote Creator',
    creatorDesc:
      'Ferramentas avançadas, nível intermediário.\nTodos os recursos com limites regulares.',
    creatorBullets: [
      '50 gerações de texto com IA por ciclo',
      '25 gerações de imagem com IA por ciclo',
      '15 gerações de áudio com IA por ciclo',
    ],
    worldTitle: 'Pacote Construtor de Mundos',
    worldDesc: 'Acesso completo às ferramentas avançadas, com uso mensal generoso.',
    worldBullets: [
      '100 gerações de texto com IA por ciclo',
      '50 gerações de imagem com IA por ciclo',
      '31 gerações de áudio com IA por ciclo',
    ],
  },
};

function PricingCard({
  imageSrc,
  imageAlt,
  title,
  description,
  bullets,
  priceLabel,
  ctaLabel,
  whatYouGetLabel,
  className = '',
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  bullets: string[];
  priceLabel: string;
  ctaLabel: string;
  whatYouGetLabel: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-features-card-border/40 bg-features-card shadow-lg shadow-black/30 ${className}`}
    >
      <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-black/40">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 md:px-6 md:pb-8 md:pt-6">
        <h2
          className={`text-center text-xl font-medium leading-snug text-black md:text-2xl ${FEATURES_TEAL_FILTER}`}
        >
          {title}
        </h2>
        <p className="mt-3 whitespace-pre-line text-center text-sm leading-relaxed text-features-muted md:text-base">
          {description}
        </p>
        <h3 className="mt-6 text-sm font-semibold text-white">{whatYouGetLabel}</h3>
        <ul className="mt-2 list-none space-y-1.5 text-left">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-features-accent/70" aria-hidden />
              <span className="text-[15px] leading-snug text-features-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-base font-semibold text-white">{priceLabel}</p>
        <div className="mt-5 flex flex-1 flex-col justify-end">
          <button
            type="button"
            className="w-full rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-3 text-center text-sm font-medium text-features-bar transition-colors hover:bg-features-accent-dim sm:text-base"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

export function PricingPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en-US';
    const saved = window.localStorage.getItem('libell-language');
    return saved === 'pt-BR' ? 'pt-BR' : 'en-US';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = FEATURES_UI[language];
  const p = PRICING_COPY[language];

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

  const languageSelectClassName =
    'cursor-pointer rounded-lg border border-white/25 bg-white/5 px-2 py-1 text-lg leading-none text-white outline-none transition-colors hover:bg-white/10 sm:text-xl lg:text-2xl';

  const languageSelect = (id: string, wrapperClassName?: string) => (
    <div className={wrapperClassName}>
      <label className="sr-only" htmlFor={id}>
        Language
      </label>
      <select
        id={id}
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className={languageSelectClassName}
        aria-label="Language switcher"
      >
        <option value="en-US">🇺🇸</option>
        <option value="pt-BR">🇧🇷</option>
      </select>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-features-bar font-sans text-white">
      <div className="w-full">
        <header className="relative z-20 border-b border-features-bar-border bg-features-bar px-4 sm:px-6 md:px-12">
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-6xl items-center justify-between py-3 sm:h-24">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobileMenu}>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-transparent sm:size-16">
                <img
                  alt="Libell.us logomark"
                  className="size-10 object-contain brightness-0 invert sm:size-12"
                  src={imgLogo}
                />
              </div>
              <span className="font-sans text-lg font-semibold text-white sm:text-xl lg:text-2xl">Libell.us</span>
            </Link>

            <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
              <Link to="/features" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.features}
              </Link>
              <span className="text-sm font-medium text-features-accent sm:text-base lg:text-lg" aria-current="page">
                {t.pricing}
              </span>
              <Link to="/about" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.about}
              </Link>
              <button
                type="button"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </button>
              {languageSelect('pricing-language-desktop', 'ml-1')}
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              {languageSelect('pricing-language-mobile-header')}
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
            className="fixed left-0 right-0 top-20 z-50 border-b border-features-bar-border bg-features-bar px-4 py-6 shadow-lg sm:hidden"
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
              <span className="w-full text-lg font-medium text-features-accent">{t.pricing}</span>
              <Link
                to="/about"
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.about}
              </Link>
              <button
                type="button"
                className="w-full max-w-xs rounded-2xl border-2 border-features-accent/80 bg-features-accent py-3 text-base font-medium text-features-bar hover:bg-features-accent-dim"
                onClick={closeMobileMenu}
              >
                {t.login}
              </button>
            </nav>
          </div>
        )}

        <section className="relative bg-black px-4 py-16 sm:px-6 md:px-12 md:pb-24 md:pt-12 lg:pb-32 lg:pt-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-[15px] md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="flex w-full max-w-xl flex-1 flex-col items-center md:max-w-lg md:items-start lg:max-w-xl">
              <div className="mx-auto flex w-full max-w-sm flex-col items-stretch md:mx-0 md:w-fit md:max-w-full">
                <h1 className="text-center text-3xl font-semibold leading-tight text-white md:text-left md:text-4xl lg:text-5xl lg:leading-[1.2] xl:leading-[1.12]">
                  <span className="md:hidden">
                    {p.heroStack1}
                    <br />
                    {p.heroStack2}
                  </span>
                  <span className="hidden md:inline">
                    {p.heroHead1}
                    <br />
                    {p.heroHead2}
                  </span>
                </h1>
                <div
                  className="mx-auto mt-4 h-px w-14 shrink-0 rounded-full bg-white/25 md:mx-0"
                  aria-hidden
                />
                <p className="mt-3 w-full max-w-[450px] text-center text-base text-features-muted md:max-w-[300px] md:text-left md:text-lg min-[900px]:max-w-[450px] lg:mt-2.5 lg:leading-snug xl:mt-2">
                  {p.heroIntro}
                </p>
                <div className="mt-6 flex flex-nowrap justify-center gap-3 md:justify-start">
                  <button
                    type="button"
                    className="shrink-0 rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
                  >
                    {t.tryNow}
                  </button>
                  <button
                    type="button"
                    className="shrink-0 rounded-2xl border-2 border-white bg-transparent px-4 py-2.5 text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/25 hover:shadow-md sm:px-6 sm:py-3 sm:text-base"
                  >
                    {t.joinWaitlist}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full flex-1 items-center justify-center self-center md:mt-0 md:max-w-[min(100%,1008px)] lg:max-w-[min(100%,1344px)]">
              <div className="flex w-full max-w-full items-center justify-center overflow-hidden rounded-2xl md:max-w-[1008px] lg:max-w-[1344px]">
                <img
                  alt=""
                  className="h-[460px] w-full max-w-[510px] object-contain md:max-w-none"
                  src={heroPricing}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-features-bar px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold text-white md:text-2xl">{p.thankYouTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-features-muted md:text-lg">{p.thankYouBody}</p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-5">
            <PricingCard
              imageSrc={cardBasics}
              imageAlt=""
              title={p.basicsTitle}
              description={p.basicsDesc}
              bullets={p.basicsBullets}
              priceLabel={p.priceBeta}
              ctaLabel={p.subscribe}
              whatYouGetLabel={p.whatYouGet}
            />
            <PricingCard
              imageSrc={cardCreator}
              imageAlt=""
              title={p.creatorTitle}
              description={p.creatorDesc}
              bullets={p.creatorBullets}
              priceLabel={p.priceBeta}
              ctaLabel={p.subscribe}
              whatYouGetLabel={p.whatYouGet}
            />
            <PricingCard
              imageSrc={cardWorld}
              imageAlt=""
              title={p.worldTitle}
              description={p.worldDesc}
              bullets={p.worldBullets}
              priceLabel={p.priceBeta}
              ctaLabel={p.subscribe}
              whatYouGetLabel={p.whatYouGet}
              className="md:max-lg:col-span-2 md:max-lg:max-w-[calc((100%_-_2rem)/2)] md:max-lg:justify-self-center"
            />
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <Link to="/" className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain brightness-0 invert" src={imgLogo} />
              <span className="text-xl font-bold text-white">Libell.us</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 text-sm md:gap-8 md:text-base">
              <Link
                to="/features"
                className="font-medium !text-features-accent transition-colors hover:!text-features-accent-dim text-sm sm:text-base lg:text-lg"
              >
                {t.features}
              </Link>
              <Link to="/about">{t.about}</Link>
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
