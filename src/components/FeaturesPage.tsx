import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/figma-assets';
import heroFeature from '../assets/hero/hero.png';
import booksGrid from '../assets/books/books-grid.png';
import mobileApps from '../assets/mobile/mobileApps.png';
import writeStories from '../assets/imagination/write-stories.png';
import buildWorlds from '../assets/imagination/build-worlds.png';
import voiceNarrationImg from '../assets/imagination/publish.png';
import shadersImg from '../assets/mobile/pixelMountains.png';

type Language = 'en-US' | 'pt-BR';

const FEATURES_UI: Record<
  Language,
  {
    features: string;
    pricing: string;
    about: string;
    login: string;
    closeMenu: string;
    openMenu: string;
    footerDocs: string;
    footerContact: string;
    footerPrivacy: string;
    footerTerms: string;
    heroTitle: string;
    heroSubtitle: string;
    authoringTitle: string;
    authoringBody: string;
    mobileTitle: string;
    mobileBody: string;
    styleTitle: string;
    styleBody: string;
    charactersTitle: string;
    charactersBody: string;
    voiceTitle: string;
    voiceBody: string;
    shadersTitle: string;
    shadersBody: string;
  }
> = {
  'en-US': {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    login: 'Login',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    footerDocs: 'Docs',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    heroTitle: 'Empower your creativity',
    heroSubtitle:
      'With dozens of power tools, the only limit is your imagination.',
    authoringTitle: 'Authoring Console',
    authoringBody:
      'We offer a feature rich authoring console to create your books with ease. From text and image generation tools, to ambiance and character personality settings, our console gives you the power to create visually rich and engaging stories.',
    mobileTitle: 'Free Mobile Apps',
    mobileBody:
      'Libell.us comes with free mobile apps for iOS and Android, allowing you to share your creations with friends and the world. Our apps are designed to provide an immersive reading experience, bringing your stories to life with stunning visuals and interactive features.',
    styleTitle: 'Books with Style',
    styleBody:
      "With over 300,000 visual styles to choose from, you can create books that are truly unique and visually stunning. Whether you're looking for a classic look or something more modern and edgy, our extensive library of styles has got you covered.",
    charactersTitle: 'Characters, Locations & Timelines',
    charactersBody:
      'Enrich your story with detailed character personalities, immersive location ambiances, and intricate timelines. Our tools allow you to create complex characters with unique traits and personalities, vivid locations with rich ambiances, and detailed timelines that add depth and complexity to your story.',
    voiceTitle: 'Voice Narration',
    voiceBody:
      'Hearing is believing! Experience your story like never before with our advanced AI-driven voice narration. Choose from a variety of professional-grade voices to bring your characters and narrative to life, creating an immersive experience for your readers.',
    shadersTitle: 'Shaders & Ambientation',
    shadersBody:
      "Don't read a story, experience it! Our advanced shader-powered effects and ambiance settings allow you to create visually rich and immersive environments that bring your story to life. From dynamic lighting and weather effects, to customizable color palettes and visual filters, our tools give you the power to create a truly unique and engaging reading experience.",
  },
  'pt-BR': {
    features: 'Recursos',
    pricing: 'Preços',
    about: 'Sobre',
    login: 'Entrar',
    closeMenu: 'Fechar menu',
    openMenu: 'Abrir menu',
    footerDocs: 'Documentação',
    footerContact: 'Contato',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',
    heroTitle: 'Potencialize sua criatividade',
    heroSubtitle:
      'Com dezenas de ferramentas poderosas, o único limite é a sua imaginação.',
    authoringTitle: 'Console de autoria',
    authoringBody:
      'Oferecemos um console de autoria completo para criar seus livros com facilidade. De geração de texto e imagens a ambientação e personalidade de personagens, você cria histórias visualmente ricas e envolventes.',
    mobileTitle: 'Apps móveis gratuitos',
    mobileBody:
      'A Libell.us inclui apps gratuitos para iOS e Android para compartilhar suas criações com amigos e o mundo. Uma leitura imersiva com visuais e interação de alto nível.',
    styleTitle: 'Livros com estilo',
    styleBody:
      'Com centenas de milhares de estilos visuais, crie livros únicos e impressionantes — do clássico ao moderno — com nossa biblioteca extensa.',
    charactersTitle: 'Personagens, locais e linhas do tempo',
    charactersBody:
      'Enriqueça sua história com personalidades de personagens, ambientes imersivos e linhas do tempo detalhadas que dão profundidade à narrativa.',
    voiceTitle: 'Narração por voz',
    voiceBody:
      'Ouvir é acreditar! Narração com IA e vozes profissionais para dar vida aos personagens e à narrativa.',
    shadersTitle: 'Shaders e ambientação',
    shadersBody:
      'Não apenas leia — vivencie. Efeitos com shaders, iluminação, clima e filtros para ambientes verdadeiramente imersivos.',
  },
};

function homeHash(hash: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
  return `${base}/#${hash}`;
}

function FeatureCard({
  title,
  body,
  imageSrc,
  imageAlt,
}: {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-[#12141a] p-6 shadow-lg md:p-8 lg:py-10 lg:px-10 xl:px-14 2xl:px-16">
      <h2 className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">{title}</h2>
      <div className="flex flex-col items-stretch gap-6">
        <div className="flex w-full justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[280px] w-full max-w-lg rounded-2xl object-contain object-center sm:max-h-[300px] lg:max-h-[360px]"
          />
        </div>
        <p className="my-0 mx-[25px] text-center text-sm leading-relaxed text-white/70 md:text-base">
          {body}
        </p>
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
    'cursor-pointer rounded-lg border border-black/25 bg-transparent px-2 py-1 text-lg leading-none text-black outline-none transition-colors hover:bg-black/5 sm:text-xl lg:text-2xl';

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
    <div className="min-h-screen bg-black font-sans text-white">
      <div className="w-full max-w-[2560px] mx-auto">
        <header className="relative z-20 border-b border-[#00C0E6]/30 bg-[#00C0E6]">
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-6xl items-center justify-between px-4 py-3 sm:h-24 sm:px-6 lg:px-12">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobileMenu}>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-transparent sm:size-16">
                <img alt="Libell.us logomark" className="size-10 object-contain sm:size-12" src={imgLogo} />
              </div>
              <span className="font-sans text-lg font-semibold text-black sm:text-xl lg:text-2xl">Libell.us</span>
            </Link>

            <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
              <span className="text-sm font-medium text-black sm:text-base lg:text-lg" aria-current="page">
                {t.features}
              </span>
              <a href={homeHash('pricing')} className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg">
                {t.pricing}
              </a>
              <a href={homeHash('about')} className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg">
                {t.about}
              </a>
              <button
                type="button"
                className="whitespace-nowrap rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
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
                className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-black hover:bg-white/20"
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
            className="fixed left-0 right-0 top-20 z-50 border-b border-[#00C0E6]/30 bg-[#00C0E6] px-4 py-6 shadow-lg sm:hidden"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
          >
            <nav className="flex flex-col items-center gap-6 text-center">
              <span className="w-full text-lg font-medium text-black">{t.features}</span>
              <a
                href={homeHash('pricing')}
                className="w-full text-lg font-medium text-black hover:text-black/80"
                onClick={closeMobileMenu}
              >
                {t.pricing}
              </a>
              <a
                href={homeHash('about')}
                className="w-full text-lg font-medium text-black hover:text-black/80"
                onClick={closeMobileMenu}
              >
                {t.about}
              </a>
              <button
                type="button"
                className="w-full max-w-xs rounded-2xl border-2 border-white bg-white py-3 text-base font-medium text-black hover:bg-white"
                onClick={closeMobileMenu}
              >
                {t.login}
              </button>
            </nav>
          </div>
        )}

        {/* Hero */}
        <section className="border-b border-white/5 bg-black px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl text-center lg:min-w-0 lg:flex-1 lg:text-left">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{t.heroTitle}</h1>
              <p className="mt-5 text-lg text-white/80 md:text-xl">{t.heroSubtitle}</p>
            </div>
            <div className="w-full max-w-2xl shrink-0 lg:max-w-[min(100%,560px)] lg:flex-1">
              <img
                src={heroFeature}
                alt=""
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section className="bg-[#0a0a0a] px-6 py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-28 2xl:px-36">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 md:gap-14 lg:gap-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.authoringTitle}
                body={t.authoringBody}
                imageSrc={booksGrid}
                imageAlt=""
              />
              <FeatureCard
                title={t.mobileTitle}
                body={t.mobileBody}
                imageSrc={mobileApps}
                imageAlt=""
              />
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.styleTitle}
                body={t.styleBody}
                imageSrc={writeStories}
                imageAlt=""
              />
              <FeatureCard
                title={t.charactersTitle}
                body={t.charactersBody}
                imageSrc={buildWorlds}
                imageAlt=""
              />
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <FeatureCard
                title={t.voiceTitle}
                body={t.voiceBody}
                imageSrc={voiceNarrationImg}
                imageAlt=""
              />
              <FeatureCard
                title={t.shadersTitle}
                body={t.shadersBody}
                imageSrc={shadersImg}
                imageAlt=""
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-[#00C0E6]/30 bg-[#00C0E6] px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <Link to="/" className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain" src={imgLogo} />
              <span className="text-xl font-bold text-black">Libell.us</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 text-sm text-black md:gap-8 md:text-base">
              <Link to="/features" className="transition-colors hover:text-black/80">
                {t.features}
              </Link>
              <a href={homeHash('about')} className="transition-colors hover:text-black/80">
                {t.about}
              </a>
              <a href="#docs" className="transition-colors hover:text-black/80">
                {t.footerDocs}
              </a>
              <a href="#contact" className="transition-colors hover:text-black/80">
                {t.footerContact}
              </a>
              <a href="#privacy" className="transition-colors hover:text-black/80">
                {t.footerPrivacy}
              </a>
              <a href="#terms" className="transition-colors hover:text-black/80">
                {t.footerTerms}
              </a>
            </nav>
            <p className="text-sm text-black">©{new Date().getFullYear()} Libell.us</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
