import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/figma-assets';
import booksPng from '../assets/books/books.png';
import heroFeatures from '../assets/hero/hero-features.png';
import mobileApps from '../assets/mobile/mobileApps.png';
import writeStories from '../assets/imagination/write-stories.png';
import buildWorlds from '../assets/imagination/build-worlds.png';
import voiceNarrationImg from '../assets/imagination/publish.png';
import shadersImg from '../assets/mobile/pixelMountains.png';

/** Same teal tint as about / problem row titles on LibellLanding. */
export const FEATURES_TEAL_FILTER =
  'opacity-95 [filter:brightness(0)_saturate(100%)_invert(83%)_sepia(31%)_saturate(1167%)_hue-rotate(116deg)_brightness(97%)_contrast(92%)]';

export type Language = 'en-US' | 'pt-BR';

export const FEATURES_UI: Record<
  Language,
  {
    features: string;
    pricing: string;
    about: string;
    login: string;
    closeMenu: string;
    openMenu: string;
    footerContact: string;
    footerPrivacy: string;
    footerTerms: string;
    footerCopyright: string;
    heroHead1: string;
    heroHead2: string;
    heroHead3: string;
    heroStack1: string;
    heroStack2: string;
    heroIntro: string;
    tryNow: string;
    joinWaitlist: string;
    authoringTitle: string;
    authoringLead: string;
    authoringBullets: string[];
    mobileTitle: string;
    mobileLead: string;
    mobileBullets: string[];
    styleTitle: string;
    styleLead: string;
    styleBullets: string[];
    charactersTitle: string;
    charactersLead: string;
    charactersBullets: string[];
    voiceTitle: string;
    voiceLead: string;
    voiceBullets: string[];
    shadersTitle: string;
    shadersLead: string;
    shadersBullets: string[];
  }
> = {
  'en-US': {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    login: 'Login',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    footerContact: 'Contact Us',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerCopyright: '©2025 Libell.us Publishing LLC · All Rights Reserved.',
    heroHead1: 'Empower your',
    heroHead2: 'creativity with',
    heroHead3: 'these features',
    heroStack1: 'Empower your creativity',
    heroStack2: 'with these features',
    heroIntro:
      'Visual tools, branching structure, characters and worlds, voice, and atmosphere—everything you need to author a story and deliver it on iOS and Android.',
    tryNow: 'Try It Now!',
    joinWaitlist: 'Join the Waitlist',
    authoringTitle: 'Authoring Console',
    authoringLead: 'Feature-rich authoring console: create books with ease',
    authoringBullets: [
      'Text and image generation tools',
      'Ambiance and character personality settings',
      'Create visually rich and engaging stories',
    ],
    mobileTitle: 'Reader Apps (iOS & Android)',
    mobileLead: 'Free mobile apps for iOS and Android',
    mobileBullets: [
      'Share your creations with friends and the world',
      'Immersive reading experience',
      'Stunning visuals and interactive features',
    ],
    styleTitle: 'Visual Styles',
    styleLead: 'Over 300,000 visual styles to choose from',
    styleBullets: [
      'Create books that are truly unique and visually stunning',
      'Classic look or something more modern and edgy',
      'Our extensive library of styles has got you covered',
    ],
    charactersTitle: 'Characters, Locations & Timelines',
    charactersLead: 'Enrich your story with characters, locations, and timelines',
    charactersBullets: [
      'Complex characters with unique traits and personalities',
      'Vivid locations with rich ambiances',
      'Detailed timelines that add depth and complexity to your story',
    ],
    voiceTitle: 'Voice Narration',
    voiceLead: 'Hearing is believing! Advanced AI-driven voice narration',
    voiceBullets: [
      'Professional-grade voices',
      'Bring your characters and narrative to life',
      'Immersive experience for your readers',
    ],
    shadersTitle: 'Shaders & Ambiance',
    shadersLead: "Don't read a story, experience it!",
    shadersBullets: [
      'Shader-powered effects and ambiance',
      'Lighting, weather, palettes, and filters',
      'Immersive, visually rich reading',
    ],
  },
  'pt-BR': {
    features: 'Recursos',
    pricing: 'Preços',
    about: 'Sobre',
    login: 'Entrar',
    closeMenu: 'Fechar menu',
    openMenu: 'Abrir menu',
    footerContact: 'Fale conosco',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',
    footerCopyright: '©2025 Libell.us Publishing LLC · All Rights Reserved.',
    heroHead1: 'Potencialize sua',
    heroHead2: 'criatividade com',
    heroHead3: 'estes recursos',
    heroStack1: 'Potencialize sua criatividade',
    heroStack2: 'com estes recursos',
    heroIntro:
      'Ferramentas visuais, estrutura ramificada, personagens e mundos, voz e atmosfera—tudo para criar e publicar sua história nos apps para iOS e Android.',
    tryNow: 'Experimente agora!',
    joinWaitlist: 'Entrar na lista de espera',
    authoringTitle: 'Console de autoria',
    authoringLead: 'Um só lugar para rascunhar histórias ramificadas e livros lineares—sem sair do navegador',
    authoringBullets: [
      'Fluxos guiados para texto, imagens e layout',
      'Ambiente e traços de personagem ligados às cenas',
      'Organização local: capítulos, ritmos e revisões no mesmo lugar',
    ],
    mobileTitle: 'Apps de leitura (iOS e Android)',
    mobileLead: 'Leve a história ao celular para o leitor tocar nas escolhas, não só ler no site',
    mobileBullets: [
      'Compartilhe links ou catálogo a partir do mesmo projeto',
      'Navegação pensada para toque em painéis e escolhas',
      'Mantém visuais e áudio alinhados ao que você publicou',
    ],
    styleTitle: 'Estilos visuais',
    styleLead: 'Escolha um visual cedo para manter todas as páginas coerentes—biblioteca enorme, sem CSS manual',
    styleBullets: [
      'Centenas de milhares de presets (filtros, molduras, paletas)',
      'Troque estilo sem reconstruir a estrutura',
      'Pré-visualize antes de fixar o tema do livro',
    ],
    charactersTitle: 'Personagens, locais e linhas do tempo',
    charactersLead: 'Dados da história ao lado do texto: quem, onde e quando—para ramificações consistentes',
    charactersBullets: [
      'Fichas de personagem com traços que aparecem nos ramos',
      'Cartões de ambiente de local reutilizáveis',
      'Linhas do tempo que ordenam eventos entre caminhos',
    ],
    voiceTitle: 'Narração por voz',
    voiceLead: 'Associe voz por cena ou fala—quem ouve ganha leitura guiada, não só blocos de texto',
    voiceBullets: [
      'Opções de voz com IA e curadoria',
      'Combine voz ao personagem quando ajudar a clareza',
      'Fluxos de exportação com áudio para apps e web',
    ],
    shadersTitle: 'Shaders e ambientação',
    shadersLead: 'Atmosfera pós-estilo: luz, clima e grades de cor que acompanham o momento',
    shadersBullets: [
      'Shaders e ambientação',
      'Luz, clima, paletas e filtros',
      'Foco na leitura, não só no efeito',
    ],
  },
};

export function homeHash(hash: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
  return `${base}/#${hash}`;
}

function FeatureCard({
  title,
  lead,
  bullets,
  imageSrc,
  imageAlt,
}: {
  title: string;
  lead: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article className="flex flex-col rounded-3xl border border-features-card-border/40 bg-features-card p-6 shadow-lg shadow-black/30 md:p-8 lg:py-10 lg:px-8 xl:px-12 2xl:px-14">
      <h2
        className={`mb-4 text-center text-xl font-medium leading-snug text-black md:text-2xl ${FEATURES_TEAL_FILTER}`}
      >
        {title}
      </h2>
      <div className="flex flex-col items-stretch gap-5">
        <div className="flex w-full justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[300px] w-full max-w-xl rounded-2xl object-contain object-center sm:max-h-[340px] lg:max-h-[400px]"
          />
        </div>
        <p className="mx-auto max-w-md text-center text-base font-medium leading-snug text-white md:text-lg md:leading-snug">
          {lead}
        </p>
        {bullets.length > 0 ? (
          <ul className="mx-auto max-w-md list-disc space-y-1 pl-5 text-left text-[15px] leading-snug text-features-muted marker:text-features-accent-dim/50 md:text-base md:leading-snug">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export function FeaturesPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en-US';
    const saved = window.localStorage.getItem('libell-language');
    return saved === 'pt-BR' ? 'pt-BR' : 'en-US';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = FEATURES_UI[language];

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
              <span className="text-sm font-medium text-features-accent sm:text-base lg:text-lg" aria-current="page">
                {t.features}
              </span>
              <a href={homeHash('pricing')} className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.pricing}
              </a>
              <a href={homeHash('about')} className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.about}
              </a>
              <button
                type="button"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </button>
              {languageSelect('features-language-desktop', 'ml-1')}
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              {languageSelect('features-language-mobile-header')}
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
              <span className="w-full text-lg font-medium text-features-accent">{t.features}</span>
              <a
                href={homeHash('pricing')}
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.pricing}
              </a>
              <a
                href={homeHash('about')}
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.about}
              </a>
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

        {/* Hero — scoped to /features (not a repeat of the homepage hero) */}
        <section className="relative bg-black px-4 py-16 sm:px-6 md:px-12 md:pb-24 md:pt-12 lg:pb-32 lg:pt-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="flex w-full max-w-xl flex-1 flex-col items-center md:max-w-lg md:items-start lg:max-w-xl">
              <div className="mx-auto flex w-full max-w-sm flex-col items-stretch md:mx-0 md:w-fit md:max-w-full">
                <h1 className="text-center text-3xl font-semibold leading-tight text-white md:text-left md:text-4xl lg:text-5xl lg:leading-[1.2] xl:leading-[1.12]">
                  {/* Stacked layout: two lines — share width with intro via parent max-w-sm */}
                  <span className="md:hidden">
                    {t.heroStack1}
                    <br />
                    {t.heroStack2}
                  </span>
                  {/* md+ beside image: three lines */}
                  <span className="hidden md:inline">
                    {t.heroHead1}
                    <br />
                    {t.heroHead2}
                    <br />
                    {t.heroHead3}
                  </span>
                </h1>
                <p className="mt-3 w-full max-w-[450px] text-center text-base text-features-muted md:max-w-[300px] md:text-left md:text-lg min-[900px]:max-w-[450px] lg:mt-2.5 lg:leading-snug xl:mt-2">
                  {t.heroIntro}
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
                  className="w-full max-w-[520px] object-contain md:max-w-none"
                  src={heroFeatures}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section
          id="features-grid"
          className="scroll-mt-24 bg-features-bar px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12 lg:gap-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.authoringTitle}
                lead={t.authoringLead}
                bullets={t.authoringBullets}
                imageSrc={booksPng}
                imageAlt=""
              />
              <FeatureCard
                title={t.mobileTitle}
                lead={t.mobileLead}
                bullets={t.mobileBullets}
                imageSrc={mobileApps}
                imageAlt=""
              />
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.styleTitle}
                lead={t.styleLead}
                bullets={t.styleBullets}
                imageSrc={writeStories}
                imageAlt=""
              />
              <FeatureCard
                title={t.charactersTitle}
                lead={t.charactersLead}
                bullets={t.charactersBullets}
                imageSrc={buildWorlds}
                imageAlt=""
              />
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.voiceTitle}
                lead={t.voiceLead}
                bullets={t.voiceBullets}
                imageSrc={voiceNarrationImg}
                imageAlt=""
              />
              <FeatureCard
                title={t.shadersTitle}
                lead={t.shadersLead}
                bullets={t.shadersBullets}
                imageSrc={shadersImg}
                imageAlt=""
              />
            </div>
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
                aria-current="page"
                className="font-medium !text-features-accent transition-colors hover:!text-features-accent-dim text-sm sm:text-base lg:text-lg"
              >
                {t.features}
              </Link>
              <a href={homeHash('about')}>{t.about}</a>
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
