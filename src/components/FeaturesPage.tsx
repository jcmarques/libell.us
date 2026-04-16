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
    footerCopyright: string;
    heroLine1: string;
    heroIntro: string;
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
    footerDocs: 'Docs',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerCopyright: '©2025 Libell.us Publishing LLC. All Rights Reserved.',
    heroLine1: 'Empower your creativity with these features',
    heroIntro:
      'Visual tools, branching structure, characters and worlds, voice, and atmosphere—everything you need to author a story and deliver it on the web and on iOS and Android.',
    authoringTitle: 'Authoring console',
    authoringLead: 'One workspace to draft branching stories and static books—without leaving the browser.',
    authoringBullets: [
      'Guided flows for text, images, and layout',
      'Ambiance and character traits tied to scenes',
      'Local organization: chapters, beats, and revisions in one place',
    ],
    mobileTitle: 'Reader apps (iOS & Android)',
    mobileLead: 'Ship to phones so readers tap through your story instead of only reading on the web.',
    mobileBullets: [
      'Share links or catalog listings from the same project',
      'Touch-first navigation for choices and panels',
      'Keeps visuals and audio in sync with your authored build',
    ],
    styleTitle: 'Visual styles',
    styleLead: 'Pick a look early so every page stays consistent—huge preset library, zero manual CSS.',
    styleBullets: [
      'Hundreds of thousands of presets (filters, frames, palettes)',
      'Swap styles without rebuilding structure',
      'Preview before you lock a book-wide theme',
    ],
    charactersTitle: 'Characters, locations & timelines',
    charactersLead: 'Story data lives next to prose: who, where, and when—so choices stay coherent.',
    charactersBullets: [
      'Character sheets with traits that surface in branches',
      'Location ambiance cards you can reuse',
      'Timelines that show how events order across paths',
    ],
    voiceTitle: 'Voice narration',
    voiceLead: 'Attach narration per scene or line—listeners get a guided read, not a wall of text.',
    voiceBullets: [
      'AI and curated voice options',
      'Match voice to character where it helps clarity',
      'Export paths that include audio for apps and web',
    ],
    shadersTitle: 'Shaders & ambiance',
    shadersLead: 'Post-style atmosphere: light, weather, and color grades that react to the moment.',
    shadersBullets: [
      'Shader stacks for mood without custom code',
      'Weather and lighting presets you can blend',
      'Filters tuned for readability, not just spectacle',
    ],
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
    footerCopyright: '©2025 Libell.us Publishing LLC. All Rights Reserved.',
    heroLine1: 'Potencialize sua criatividade com estes recursos',
    heroIntro:
      'Ferramentas visuais, estrutura ramificada, personagens e mundos, voz e atmosfera—tudo para criar e publicar sua história na web e em apps para iOS e Android.',
    authoringTitle: 'Console de autoria',
    authoringLead: 'Um só lugar para rascunhar histórias ramificadas e livros lineares—sem sair do navegador.',
    authoringBullets: [
      'Fluxos guiados para texto, imagens e layout',
      'Ambiente e traços de personagem ligados às cenas',
      'Organização local: capítulos, ritmos e revisões no mesmo lugar',
    ],
    mobileTitle: 'Apps de leitura (iOS e Android)',
    mobileLead: 'Leve a história ao celular para o leitor tocar nas escolhas, não só ler no site.',
    mobileBullets: [
      'Compartilhe links ou catálogo a partir do mesmo projeto',
      'Navegação pensada para toque em painéis e escolhas',
      'Mantém visuais e áudio alinhados ao que você publicou',
    ],
    styleTitle: 'Estilos visuais',
    styleLead: 'Escolha um visual cedo para manter todas as páginas coerentes—biblioteca enorme, sem CSS manual.',
    styleBullets: [
      'Centenas de milhares de presets (filtros, molduras, paletas)',
      'Troque estilo sem reconstruir a estrutura',
      'Pré-visualize antes de fixar o tema do livro',
    ],
    charactersTitle: 'Personagens, locais e linhas do tempo',
    charactersLead: 'Dados da história ao lado do texto: quem, onde e quando—para ramificações consistentes.',
    charactersBullets: [
      'Fichas de personagem com traços que aparecem nos ramos',
      'Cartões de ambiente de local reutilizáveis',
      'Linhas do tempo que ordenam eventos entre caminhos',
    ],
    voiceTitle: 'Narração por voz',
    voiceLead: 'Associe voz por cena ou fala—quem ouve ganha leitura guiada, não só blocos de texto.',
    voiceBullets: [
      'Opções de voz com IA e curadoria',
      'Combine voz ao personagem quando ajudar a clareza',
      'Fluxos de exportação com áudio para apps e web',
    ],
    shadersTitle: 'Shaders e ambientação',
    shadersLead: 'Atmosfera pós-estilo: luz, clima e grades de cor que acompanham o momento.',
    shadersBullets: [
      'Pilhas de shader para clima sem código próprio',
      'Presets de clima e luz que você pode misturar',
      'Filtros pensados para leitura, não só efeito',
    ],
  },
};

function homeHash(hash: string) {
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
    <article className="flex flex-col rounded-3xl border border-white/10 bg-[#12141a] p-6 shadow-lg md:p-8 lg:py-10 lg:px-8 xl:px-12 2xl:px-14">
      <h2 className="mb-4 text-center text-lg font-semibold leading-snug text-white md:text-xl">{title}</h2>
      <div className="flex flex-col items-stretch gap-5">
        <div className="flex w-full justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[300px] w-full max-w-xl rounded-2xl object-contain object-center sm:max-h-[340px] lg:max-h-[400px]"
          />
        </div>
        <p className="mx-auto max-w-md text-center text-sm font-medium leading-snug text-white/85 md:text-[15px]">
          {lead}
        </p>
        <ul className="mx-auto max-w-md list-disc space-y-1.5 pl-5 text-left text-xs leading-relaxed text-white/70 marker:text-white/40 md:text-sm">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-6xl items-center justify-between px-4 py-3 sm:h-24 sm:px-6 md:px-12">
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

        {/* Hero — scoped to /features (not a repeat of the homepage hero) */}
        <section className="relative bg-black py-14 md:py-20 lg:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-12 lg:gap-14">
            <div className="w-full max-w-xl flex-1 text-center md:max-w-lg md:text-left lg:max-w-xl">
              <h1 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl lg:leading-[1.15]">
                {t.heroLine1}
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-6 md:mx-0 md:text-base">
                {t.heroIntro}
              </p>
            </div>
            <div className="mt-8 flex w-full flex-1 items-center justify-center self-center md:mt-0 md:max-w-[min(100%,1008px)] lg:max-w-[min(100%,1344px)]">
              <div className="flex w-full max-w-full items-center justify-center overflow-hidden rounded-2xl md:max-w-[1008px] lg:max-w-[1344px]">
                <img
                  alt=""
                  className="w-full object-contain"
                  src={heroFeatures}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section
          id="features-grid"
          className="scroll-mt-24 bg-[#0a0a0a] px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
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
            <p className="mx-auto max-w-xs font-sans text-xs font-normal leading-snug text-black sm:max-w-md md:text-sm">
              {t.footerCopyright}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
