import { useEffect, useRef, useState } from 'react';
import {
  imgLogo,
  imgVuesaxBoldGallery,
} from '../assets/figma-assets';
import codeIcon from '../assets/icons/code.png';
import gameSettingIcon from '../assets/icons/game-setting.png';
import requestIcon from '../assets/icons/request.png';
import heroImage from '../assets/hero/hero.png';
import interactiveAdventuresImg from '../assets/writers/interactive.jpg';
import interactiveAdventuresColorImg from '../assets/writers/interactive-adventures-color.jpg';
import visualNovelsImg from '../assets/writers/novels.jpg';
import visualNovelsColorImg from '../assets/writers/visual-novels-color.jpg';
import gameBooksImg from '../assets/writers/game.jpg';
import gameBooksColorImg from '../assets/writers/game-books-color.jpg';
import writeStoriesImg from '../assets/imagination/write-stories.png';
import buildWorldsImg from '../assets/imagination/build-worlds.png';
import publishImg from '../assets/imagination/publish.png';
import inkRain from '../assets/mobile/inkRain.png';
import pixelSwamp from '../assets/mobile/pixelSwamp.png';
import cartoonSwamp from '../assets/mobile/cartoonSwamp.png';
import pixelMountains from '../assets/mobile/pixelMountains.png';
import cartoonRain from '../assets/mobile/cartoonRain.png';
import woodMountains from '../assets/mobile/woodMountains.png';
import cartoonMountains from '../assets/mobile/cartoonMountains.png';
import inkSwamp from '../assets/mobile/inkSwamp.png';
import woodSwamp from '../assets/mobile/woodSwamp.png';
import mangaRain from '../assets/mobile/mangaRain.png';
import mangaSwamp from '../assets/mobile/mangaSwamp.png';
import inkMountains from '../assets/mobile/inkMountains.png';
import mangaMountains from '../assets/mobile/mangaMountains.png';
import woodRain from '../assets/mobile/woodRain.png';
import pixelRain from '../assets/mobile/pixelRain.png';

type Language = 'en-US' | 'pt-BR';

const PLATFORM_TABS = [
  { id: 'story-editor', label: { 'en-US': 'Story Editor', 'pt-BR': 'Editor de Histórias' } },
  { id: 'visual-styles', label: { 'en-US': 'Visual Styles', 'pt-BR': 'Estilos Visuais' } },
  { id: 'ai-narration', label: { 'en-US': 'AI Narration', 'pt-BR': 'Narração por IA' } },
  { id: 'sound-effects', label: { 'en-US': 'Sound Effects', 'pt-BR': 'Efeitos Sonoros' } },
] as const;

const PLATFORM_TAB_CONTENT: Record<(typeof PLATFORM_TABS)[number]['id'], { label: Record<Language, string> }[]> = {
  'story-editor': [
    { label: { 'en-US': 'Branches', 'pt-BR': 'Ramificacoes' } },
    { label: { 'en-US': 'Choices', 'pt-BR': 'Escolhas' } },
    { label: { 'en-US': 'Variables', 'pt-BR': 'Variáveis' } },
    { label: { 'en-US': 'Conditions', 'pt-BR': 'Condições' } },
    { label: { 'en-US': 'Scenes', 'pt-BR': 'Cenas' } },
    { label: { 'en-US': 'Chapters', 'pt-BR': 'Capítulos' } },
    { label: { 'en-US': 'Notes', 'pt-BR': 'Notas' } },
    { label: { 'en-US': 'Export', 'pt-BR': 'Exportar' } },
  ],
  'visual-styles': [
    { label: { 'en-US': 'Themes', 'pt-BR': 'Temas' } },
    { label: { 'en-US': 'Fonts', 'pt-BR': 'Fontes' } },
    { label: { 'en-US': 'Layouts', 'pt-BR': 'Layouts' } },
    { label: { 'en-US': 'Colors', 'pt-BR': 'Cores' } },
    { label: { 'en-US': 'Backgrounds', 'pt-BR': 'Fundos' } },
    { label: { 'en-US': 'Cards', 'pt-BR': 'Cartões' } },
    { label: { 'en-US': 'Animations', 'pt-BR': 'Animações' } },
    { label: { 'en-US': 'Preview', 'pt-BR': 'Preview' } },
  ],
  'ai-narration': [
    { label: { 'en-US': 'Voices', 'pt-BR': 'Vozes' } },
    { label: { 'en-US': 'Pace', 'pt-BR': 'Ritmo' } },
    { label: { 'en-US': 'Emotion', 'pt-BR': 'Emoção' } },
    { label: { 'en-US': 'Languages', 'pt-BR': 'Idiomas' } },
    { label: { 'en-US': 'Pause', 'pt-BR': 'Pausa' } },
    { label: { 'en-US': 'Highlight', 'pt-BR': 'Destaque' } },
    { label: { 'en-US': 'Sync', 'pt-BR': 'Sincronia' } },
    { label: { 'en-US': 'Settings', 'pt-BR': 'Configurações' } },
  ],
  'sound-effects': [
    { label: { 'en-US': 'Ambience', 'pt-BR': 'Ambiência' } },
    { label: { 'en-US': 'SFX', 'pt-BR': 'SFX' } },
    { label: { 'en-US': 'Music', 'pt-BR': 'Musica' } },
    { label: { 'en-US': 'Volume', 'pt-BR': 'Volume' } },
    { label: { 'en-US': 'Fade', 'pt-BR': 'Fade' } },
    { label: { 'en-US': 'Loop', 'pt-BR': 'Loop' } },
    { label: { 'en-US': 'Triggers', 'pt-BR': 'Gatilhos' } },
    { label: { 'en-US': 'Library', 'pt-BR': 'Biblioteca' } },
  ],
};

const CAROUSEL_IMAGES = [
  { src: inkRain, alt: { 'en-US': 'Rainy and windy day in the city', 'pt-BR': 'Dia chuvoso e ventoso na cidade' } },
  { src: pixelSwamp, alt: { 'en-US': 'Foggy swamp with dense vegetation', 'pt-BR': 'Pântano com neblina e vegetação densa' } },
  { src: cartoonSwamp, alt: { 'en-US': 'Foggy swamp with dense vegetation', 'pt-BR': 'Pântano com neblina e vegetação densa' } },
  { src: pixelMountains, alt: { 'en-US': 'Snow in the mountains', 'pt-BR': 'Neve nas montanhas' } },
  { src: cartoonRain, alt: { 'en-US': 'Rainy and windy day in the city', 'pt-BR': 'Dia chuvoso e ventoso na cidade' } },
  { src: woodMountains, alt: { 'en-US': 'Snow in the mountains', 'pt-BR': 'Neve nas montanhas' } },
  { src: cartoonMountains, alt: { 'en-US': 'Snow in the mountains', 'pt-BR': 'Neve nas montanhas' } },
  { src: inkSwamp, alt: { 'en-US': 'Foggy swamp with dense vegetation', 'pt-BR': 'Pântano com neblina e vegetação densa' } },
  { src: woodSwamp, alt: { 'en-US': 'Foggy swamp with dense vegetation', 'pt-BR': 'Pântano com neblina e vegetação densa' } },
  { src: mangaRain, alt: { 'en-US': 'Rainy and windy day in the city', 'pt-BR': 'Dia chuvoso e ventoso na cidade' } },
  { src: mangaSwamp, alt: { 'en-US': 'Foggy swamp with dense vegetation', 'pt-BR': 'Pântano com neblina e vegetação densa' } },
  { src: inkMountains, alt: { 'en-US': 'Snow in the mountains', 'pt-BR': 'Neve nas montanhas' } },
  { src: mangaMountains, alt: { 'en-US': 'Snow in the mountains', 'pt-BR': 'Neve nas montanhas' } },
  { src: woodRain, alt: { 'en-US': 'Rainy and windy day in the city', 'pt-BR': 'Dia chuvoso e ventoso na cidade' } },
  { src: pixelRain, alt: { 'en-US': 'Rainy and windy day in the city', 'pt-BR': 'Dia chuvoso e ventoso na cidade' } },
];

const UI_TEXT: Record<Language, Record<string, string>> = {
  'en-US': {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    login: 'Login',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    heroEyebrow: 'Interactive storytelling platform',
    heroLine1: 'Build stories.',
    heroLine2: 'Skip the code.',
    heroDesc1: 'Build branching adventures',
    heroDesc2: 'or traditional books with',
    heroDesc3: 'visuals, sound and AI storytelling.',
    tryNow: 'Try It Now!',
    joinWaitlist: 'Join the waitlist',
    heroNote: 'Your all-in-one platform. No code required.',
    writersTitle: 'Writers want to create:',
    writersSubtitle: 'Different formats of interactive storytelling.',
    requiresTitle: 'But that often requires:',
    programming: 'Programming',
    gameEngines: 'Game Engines',
    complexTools: 'Complex Tools',
    learnBeforeStory: 'That is a lot to learn before you can tell your story.',
    changesThat: 'changes that',
    builtForStoryCreators: 'Built for Story Creators',
    imaginationTitle: 'Turn imagination into interactive stories',
    learnMore: 'Learn More',
    platformTitle: 'The Platform for Interactive Storytelling',
    platformSubtitle1: 'is a creative platform where creators',
    platformSubtitle2: 'can build interactive stories with:',
    platformFeaturesAria: 'Platform features',
    seeHowWorks: 'See how Libell works',
    backKickstarter: 'Back the Kickstarter',
    exploreStoriesTitle: 'Explore stories created with Libell.us',
    exploreStoriesSubtitle: "From fantasy adventures and children's books to sci-fi interactive stories.",
    previous: 'Previous',
    next: 'Next',
    readStory: 'Read a Story',
    communityTitle: 'Join the Next Generation of Storytelling',
    communityDesc1: 'We are building a platform for immersive, interactive stories.',
    communityDesc2: 'To see the platform in action, check out our',
    youtubeChannel: 'YouTube channel',
    ctaText1: 'Back the project and join the beta.',
    ctaText2: "Help shape what's next!",
    footerDocs: 'Docs',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
  },
  'pt-BR': {
    features: 'Recursos',
    pricing: 'Preços',
    about: 'Sobre',
    login: 'Entrar',
    closeMenu: 'Fechar menu',
    openMenu: 'Abrir menu',
    heroEyebrow: 'Plataforma de narrativa interativa',
    heroLine1: 'Crie histórias.',
    heroLine2: 'Sem programar.',
    heroDesc1: 'Crie aventuras com ramificações',
    heroDesc2: 'ou livros tradicionais com',
    heroDesc3: 'visuais, som e narrativa com IA.',
    tryNow: 'Experimente agora!',
    joinWaitlist: 'Entrar na lista de espera',
    heroNote: 'Sua plataforma completa. Sem código.',
    writersTitle: 'Escritores querem criar:',
    writersSubtitle: 'Diferentes formatos de narrativa interativa.',
    requiresTitle: 'Mas isso geralmente exige:',
    programming: 'Programação',
    gameEngines: 'Motores de jogo',
    complexTools: 'Ferramentas complexas',
    learnBeforeStory: 'Ha muito para aprender antes de contar sua historia.',
    changesThat: 'muda isso',
    builtForStoryCreators: 'Feito para criadores de histórias',
    imaginationTitle: 'Transforme imaginação em histórias interativas',
    learnMore: 'Saiba mais',
    platformTitle: 'A plataforma para narrativa interativa',
    platformSubtitle1: 'é uma plataforma criativa onde criadores',
    platformSubtitle2: 'podem criar histórias interativas com:',
    platformFeaturesAria: 'Recursos da plataforma',
    seeHowWorks: 'Veja como a Libell funciona',
    backKickstarter: 'Apoie no Kickstarter',
    exploreStoriesTitle: 'Explore histórias criadas com a Libell.us',
    exploreStoriesSubtitle: 'De aventuras de fantasia e livros infantis a histórias interativas de ficção científica.',
    previous: 'Anterior',
    next: 'Próximo',
    readStory: 'Ler uma história',
    communityTitle: 'Junte-se à próxima geração da narrativa',
    communityDesc1: 'Estamos construindo uma plataforma para histórias imersivas e interativas.',
    communityDesc2: 'Para ver a plataforma em ação, confira nosso',
    youtubeChannel: 'canal no YouTube',
    ctaText1: 'Apoie o projeto e entre no beta.',
    ctaText2: 'Ajude a construir o que vem a seguir!',
    footerDocs: 'Documentação',
    footerContact: 'Contato',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',
  },
};

export function LibellLanding() {
  const [activePlatformTab, setActivePlatformTab] = useState<(typeof PLATFORM_TABS)[number]['id']>('story-editor');
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en-US';
    const savedLanguage = window.localStorage.getItem('libell-language');
    return savedLanguage === 'pt-BR' ? 'pt-BR' : 'en-US';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const libellChangesRef = useRef<HTMLDivElement>(null);
  const [libellSectionVisible, setLibellSectionVisible] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [heroSectionVisible, setHeroSectionVisible] = useState(false);
  const writersSectionRef = useRef<HTMLElement>(null);
  const [writersSectionVisible, setWritersSectionVisible] = useState(false);
  const [writersScrollDown, setWritersScrollDown] = useState(true);
  const imaginationSectionRef = useRef<HTMLElement>(null);
  const [imaginationSectionVisible, setImaginationSectionVisible] = useState(false);
  const [imaginationScrollDown, setImaginationScrollDown] = useState(true);
  const scrollPosRef = useRef({ y: 0, prevY: 0 });
  const exploreStoriesRef = useRef<HTMLElement>(null);
  const [exploreStoriesVisible, setExploreStoriesVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselVisibleCount, setCarouselVisibleCount] = useState(3);
  const t = UI_TEXT[language];

  useEffect(() => {
    window.localStorage.setItem('libell-language', language);
  }, [language]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const visible = mq.matches ? 2 : 3;
    setCarouselVisibleCount(visible);
    const handler = (e: MediaQueryListEvent) => setCarouselVisibleCount(e.matches ? 2 : 3);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setCarouselIndex((i) => Math.min(i, Math.max(0, CAROUSEL_IMAGES.length - carouselVisibleCount)));
  }, [carouselVisibleCount]);

  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHeroSectionVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = libellChangesRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setLibellSectionVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = writersSectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const { y, prevY } = scrollPosRef.current;
          setWritersScrollDown(y >= prevY);
        }
        setWritersSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollPosRef.current.prevY = scrollPosRef.current.y;
      scrollPosRef.current.y = window.scrollY ?? window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = imaginationSectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const { y, prevY } = scrollPosRef.current;
          setImaginationScrollDown(y >= prevY);
        }
        setImaginationSectionVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = exploreStoriesRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setExploreStoriesVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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

  const navLinks = (
    <>
      <a href="#features" className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        {t.features}
      </a>
      <a href="#pricing" className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        {t.pricing}
      </a>
      <a href="#about" className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        {t.about}
      </a>
      <button
        type="button"
        className="whitespace-nowrap rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
      >
        {t.login}
      </button>
      <div className="ml-1">
        <label className="sr-only" htmlFor="language-select-desktop">Language</label>
        <select
          id="language-select-desktop"
          value={language}
          onChange={(event) => setLanguage(event.target.value as Language)}
          className="rounded-lg border border-black/20 bg-transparent px-2 py-1 text-lg leading-none text-black outline-none transition-colors hover:bg-transparent sm:text-xl lg:text-2xl"
          aria-label="Language switcher"
        >
          <option value="en-US">🇺🇸</option>
          <option value="pt-BR">🇧🇷</option>
        </select>
      </div>
    </>
  );

  return (
    <div className="flex w-full flex-col items-center bg-white font-sans" data-node-id="1:41">
      <div className="w-full max-w-[2560px]">
        {/* 0. Navigation */}
        <header
          className="relative border-b border-[#00C0E6]/30 bg-[#00C0E6]"
          data-node-id="1:258"
        >
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-6xl items-center justify-between px-4 py-3 sm:h-24 sm:px-6 lg:px-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-transparent sm:size-16">
                <img
                  alt="Libell.us logomark"
                  className="size-10 object-contain sm:size-12"
                  src={imgLogo}
                />
              </div>
              <span className="font-sans text-lg font-semibold text-black sm:text-xl lg:text-2xl">Libell.us</span>
            </div>

            {/* Desktop nav - visible from sm and up, no hamburger on bigger screens */}
            <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
              {navLinks}
            </nav>

            {/* Mobile hamburger button - only on small screens */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-black hover:bg-white/20 sm:hidden"
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
        </header>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div
            className="fixed left-0 right-0 top-20 z-50 border-b border-[#00C0E6]/30 bg-[#00C0E6] px-4 py-6 shadow-lg sm:hidden"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
          >
            <nav className="flex flex-col gap-6">
              <a href="#features" className="text-lg font-medium text-black hover:text-black/80" onClick={closeMobileMenu}>
                {t.features}
              </a>
              <a href="#pricing" className="text-lg font-medium text-black hover:text-black/80" onClick={closeMobileMenu}>
                {t.pricing}
              </a>
              <a href="#about" className="text-lg font-medium text-black hover:text-black/80" onClick={closeMobileMenu}>
                {t.about}
              </a>
              <button
                type="button"
                className="w-full rounded-2xl border-2 border-white bg-white py-3 text-base font-medium text-black hover:bg-white"
                onClick={closeMobileMenu}
              >
                {t.login}
              </button>
              <div className="flex items-center justify-center">
                <label className="sr-only" htmlFor="language-select-mobile">Language</label>
                <select
                  id="language-select-mobile"
                  value={language}
                  onChange={(event) => {
                    setLanguage(event.target.value as Language);
                    closeMobileMenu();
                  }}
                  className="w-full max-w-xs rounded-lg border border-black/20 bg-white/90 px-3 py-2 text-base text-black outline-none transition-colors hover:bg-white"
                  aria-label="Language switcher"
                >
                  <option value="en-US">🇺🇸</option>
                  <option value="pt-BR">🇧🇷</option>
                </select>
              </div>
            </nav>
          </div>
        )}

        {/* 1. Hero */}
        <section
          ref={heroSectionRef}
          className="relative bg-black py-16 md:py-24 lg:py-32"
          data-node-id="1:243"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 md:flex-row md:items-center md:justify-between md:gap-12 md:px-6 lg:px-12">
            <div className="w-full max-w-2xl flex-1 text-center lg:max-w-3xl md:text-left">
              <p className="text-sm text-neutral-6 md:text-base">
                {t.heroEyebrow}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.2]">
                {t.heroLine1}<br />
                {t.heroLine2}
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-base text-neutral-6 md:mx-0 md:text-lg">
                {t.heroDesc1}
                <br className="md:hidden" />
                {' '}{t.heroDesc2}
                <br className="md:hidden" />
                {' '}{t.heroDesc3}
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
              <p className="mt-2 text-sm text-neutral-6 md:mt-4 md:text-base">
                {t.heroNote}
              </p>
            </div>
            <div className={`mt-8 flex flex-1 items-center justify-center self-center md:mt-0 md:max-w-[1008px] lg:max-w-[1344px] [animation-fill-mode:backwards] ${heroSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex w-full max-w-full items-center justify-center overflow-hidden rounded-2xl md:max-w-[1008px] lg:max-w-[1344px]">
                <img alt="Create interactive stories with Libell" className="w-full object-contain mix-blend-screen" src={heroImage} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Writers want to create / Problem Section */}
        <section
          ref={writersSectionRef}
          className="bg-[#0f0f0f] px-6 pb-10 pt-0 md:px-12 md:pb-12 md:pt-0"
          data-node-id="1:208"
        >
          <div className="mb-14 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-16" aria-hidden />
          <h2 className="text-center text-xl font-medium text-white md:text-2xl">
            {t.writersTitle}
          </h2>
          <p className="mx-auto mt-2 text-center text-base text-white/80 md:text-lg">
            {t.writersSubtitle}
          </p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
            {[
              {
                label: language === 'pt-BR' ? 'Aventuras interativas' : 'Interactive Adventures',
                id: '1:229',
                img: interactiveAdventuresImg,
                colorImg: interactiveAdventuresColorImg,
              },
              {
                label: language === 'pt-BR' ? 'Novelas visuais' : 'Visual Novels',
                id: '1:233',
                img: visualNovelsImg,
                colorImg: visualNovelsColorImg,
              },
              {
                label: language === 'pt-BR' ? 'Livros-jogo' : 'Game Books',
                id: '1:237',
                img: gameBooksImg,
                colorImg: gameBooksColorImg,
              },
            ].map(({ label, id, img, colorImg }, index) => {
              const lastIndex = 2;
              const delayMs = writersScrollDown ? 150 + index * 150 : 150 + (lastIndex - index) * 150;
              return (
                <li
                  key={id}
                  className={`group flex flex-col items-center [animation-fill-mode:backwards] ${writersSectionVisible ? 'animate-fade-in-up md:animate-fade-in-up-slow' : 'opacity-0'}`}
                  style={{ animationDelay: writersSectionVisible ? `${delayMs}ms` : undefined }}
                >
                  <div className="relative flex size-[260px] items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-3 md:size-[280px] lg:size-[300px]">
                    <img
                      alt={label}
                      className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                      src={img}
                    />
                    <img
                      alt={label}
                      className="pointer-events-none absolute inset-0 h-full w-full object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      src={colorImg}
                    />
                  </div>
                  <p className="mt-2 text-center text-base text-white">
                    {label}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-xl font-medium text-white md:text-2xl">
              {t.requiresTitle}
            </h2>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:items-end md:justify-center md:gap-10">
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-90 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(57%)_saturate(2500%)_hue-rotate(166deg)]"
                  src={codeIcon}
                />
                <p className="mt-2 text-center text-base text-white/90">{t.programming}</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-white/30 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-90 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(57%)_saturate(2500%)_hue-rotate(166deg)]"
                  src={gameSettingIcon}
                />
                <p className="mt-2 text-center text-base text-white/90">{t.gameEngines}</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-white/30 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-90 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(57%)_saturate(2500%)_hue-rotate(166deg)]"
                  src={requestIcon}
                />
                <p className="mt-2 text-center text-base text-white/90">
                  {t.complexTools}
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl py-4 text-center text-base text-white/90 md:mt-12 md:text-lg">
            {t.learnBeforeStory}
          </p>
        </section>

        {/* 3.1 Transition - Libell.us changes that */}
        <section
          className="flex flex-col items-center justify-center bg-[#0f172a] px-6 pt-0 pb-14 md:pb-16"
          data-node-id="1:177"
        >
          <div className="mb-14 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-16" aria-hidden />
          <div
            ref={libellChangesRef}
            className={`flex flex-col items-center justify-center gap-6 ${libellSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="flex size-20 items-center justify-center rounded-2xl bg-white p-3 md:size-24">
              <img
                alt="Libell.us"
                className="h-full w-full object-contain"
                src={imgLogo}
              />
            </div>
            <h2 className="text-center text-2xl font-medium leading-tight text-white md:text-4xl md:leading-tight lg:text-5xl">
              <span className="text-white">Libell.us</span> {t.changesThat}
            </h2>
          </div>
        </section>

        {/* Who it's for - Built for Story Creators */}
        <section
          id="about"
          className="relative overflow-hidden bg-[#00C0E6] px-6 py-16 md:px-12 md:py-24"
          data-node-id="who-its-for"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,192,230,0.2),transparent)] pointer-events-none" aria-hidden />
          <div className="relative">
            <h2 className="text-center text-xl font-medium tracking-wide text-black md:text-2xl lg:text-3xl">
              {t.builtForStoryCreators}
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-black/50 rounded-full" aria-hidden />
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: language === 'pt-BR' ? 'Escritores' : 'Writers',
                  description: language === 'pt-BR'
                    ? 'Crie romances interativos e mundos narrativos imersivos.'
                    : 'Create interactive novels and immersive narrative worlds.',
                  icon: 'fa-pen-fancy',
                },
                {
                  title: language === 'pt-BR' ? 'Designers de jogos' : 'Game Designers',
                  description: language === 'pt-BR'
                    ? 'Prototipe narrativas ramificadas e sistemas de narrativa interativa.'
                    : 'Prototype branching narratives and interactive storytelling systems.',
                  icon: 'fa-gamepad',
                },
                {
                  title: language === 'pt-BR' ? 'Criadores de conteúdo' : 'Content Creators',
                  description: language === 'pt-BR'
                    ? 'Publique experiências de narrativa visualmente ricas.'
                    : 'Publish visually rich storytelling experiences.',
                  icon: 'fa-video',
                },
              ].map(({ title, description, icon }, index) => (
                <div
                  key={title}
                  className={`group relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-black/10 bg-white p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.08),0_0_24px_rgba(0,192,230,0.15)] ${
                    index === 2 ? 'sm:col-span-2 sm:w-[calc(50%-1rem)] sm:justify-self-center lg:col-span-1 lg:w-full' : ''
                  }`}
                >
                  <i
                    className={`fa-solid ${icon} mb-4 text-2xl text-transparent [-webkit-text-stroke:1.5px_#00C0E6] md:text-3xl`}
                    aria-hidden
                  />
                  <h3 className="min-h-[2.75rem] text-lg font-medium text-black md:min-h-14 md:text-xl">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-black/80 md:text-lg">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.2 Turn imagination into interactive stories */}
        <section
          ref={imaginationSectionRef}
          className="bg-white px-4 py-16 md:px-12 md:py-24"
          data-node-id="1:184"
        >
          <h2 className="text-center text-2xl font-medium text-black md:text-3xl lg:text-4xl">
            {t.imaginationTitle}
          </h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-16">
            {[
              {
                title: language === 'pt-BR' ? 'Escreva histórias' : 'Write Stories',
                description: language === 'pt-BR'
                  ? 'Comece com uma ideia e escreva sua história em um editor intuitivo para narrativas interativas.'
                  : 'Start with an idea and write your story using an intuitive editor designed for interactive storytelling.',
                imageFirst: false,
                img: writeStoriesImg,
              },
              {
                title: language === 'pt-BR' ? 'Construa mundos' : 'Build Worlds',
                description: language === 'pt-BR'
                  ? 'Crie personagens, locais e caminhos ramificados que moldam o universo da sua história.'
                  : "Create characters, locations, and branching paths that shape your story's universe.",
                imageFirst: true,
                img: buildWorldsImg,
              },
              {
                title: language === 'pt-BR' ? 'Publique livros interativos' : 'Publish Interactive Books',
                description: language === 'pt-BR'
                  ? 'Transforme sua história em uma experiência interativa que leitores podem explorar.'
                  : 'Turn your story into an interactive experience readers can explore.',
                imageFirst: false,
                img: publishImg,
              },
            ].flatMap(({ title, description, imageFirst, img }, index) => {
              const lastIndex = 2;
              const delayMs = imaginationScrollDown ? index * 150 : (lastIndex - index) * 150;
              const block = (
                <div
                  key={title}
                  className={`flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-10 [animation-fill-mode:backwards] ${imageFirst ? 'md:flex-row-reverse' : ''
                    } ${imaginationSectionVisible ? 'animate-fade-in-up md:animate-fade-in-up-slow' : 'opacity-0'}`}
                  style={{ animationDelay: imaginationSectionVisible ? `${delayMs}ms` : undefined }}
                >
                  <div className="flex flex-1 flex-col items-center space-y-4 text-center md:max-w-md md:items-start md:text-left">
                    <h3 className="text-xl font-medium text-black md:text-2xl">{title}</h3>
                    <p className="text-base text-body-on-light md:text-lg">
                      {description}
                    </p>
                    <div className="flex w-full justify-center md:justify-start">
                      <button
                        type="button"
                        className="rounded-2xl border-2 border-black px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-black/10 hover:shadow-lg md:text-lg"
                      >
                        {t.learnMore}
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full justify-center md:w-fit md:justify-start">
                    <div className="flex w-full max-w-[calc(100vw-2rem)] aspect-[47/33] shrink-0 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.2)] md:h-[400px] md:max-w-none md:w-[580px] md:aspect-auto">
                      <img alt="" className="h-full w-full object-cover" src={img} />
                    </div>
                  </div>
                </div>
              );
              const divider = (
                <div
                  key={`${title}-divider`}
                  className="mx-auto h-px w-full max-w-[16rem] bg-black/20"
                  aria-hidden
                />
              );
              return index < lastIndex ? [block, divider] : [block];
            })}
          </div>
        </section>

        {/* 4. The Platform for Interactive Storytelling */}
        <section
          id="features"
          className="relative overflow-hidden border-t border-b border-white/30 bg-[#0f0f0f] px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:71"
        >
          <h2 className="text-center text-2xl font-medium text-white md:text-3xl lg:text-4xl">
            {t.platformTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-white/70 md:text-lg lg:text-xl">
            <span className="font-semibold text-white/90">Libell.us</span> {t.platformSubtitle1}{' '}
            <br className="hidden md:block" />
            {t.platformSubtitle2}
          </p>
          <div className="relative mx-auto mt-8 max-w-3xl">
            <div
              aria-label={t.platformFeaturesAria}
              className="flex flex-wrap justify-center gap-4 border-b-2 border-white/30 pb-3 md:gap-6 md:pb-4"
              role="tablist"
            >
              {PLATFORM_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activePlatformTab === tab.id}
                  onClick={() => setActivePlatformTab(tab.id)}
                  className={`relative -mb-[2px] border-b-2 pb-3 pt-1 text-base font-medium transition-colors md:pb-4 md:text-lg ${activePlatformTab === tab.id
                    ? 'border-white text-white'
                    : 'border-transparent text-white/70 hover:text-white'
                    }`}
                >
                  {tab.label[language]}
                </button>
              ))}
            </div>
          </div>
          <div
            aria-label={`Content for ${PLATFORM_TABS.find((tab) => tab.id === activePlatformTab)?.label[language] ?? activePlatformTab}`}
            className="mx-auto mt-8 flex max-w-sm flex-wrap justify-center gap-2 sm:max-w-md sm:gap-3 md:max-w-3xl md:grid md:grid-cols-4 md:gap-4"
            role="tabpanel"
          >
            {PLATFORM_TAB_CONTENT[activePlatformTab].map((item, i) => (
              <div
                key={`${activePlatformTab}-${i}`}
                className="flex aspect-square w-full max-w-[110px] flex-col overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm sm:max-w-[130px] md:max-w-[180px]"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center p-2">
                  <img alt="" className="max-h-10 max-w-10 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-1.5 text-center text-xs text-white">{item.label[language]}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border border-white px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/25 hover:shadow-md"
            >
              {t.seeHowWorks}
            </button>
            <button
              type="button"
              className="rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg"
            >
              {t.backKickstarter}
            </button>
          </div>
        </section>

        {/* Explore stories created with Libell.us */}
        <section
          ref={exploreStoriesRef}
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="54:212"
        >
          <h2 className="text-center text-xl font-medium text-black md:text-2xl lg:text-3xl">
            {t.exploreStoriesTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-body-on-light md:text-lg lg:text-xl">
            {t.exploreStoriesSubtitle}
          </p>
          <div
            className={`mx-auto mt-12 max-w-6xl [animation-fill-mode:backwards] ${exploreStoriesVisible ? 'animate-fade-in-up md:animate-fade-in-up-slow' : 'opacity-0'}`}
          >
            <div className="relative flex items-center justify-center gap-4 md:gap-6">
              <button
                type="button"
                onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-black/30 bg-white text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:opacity-40 md:size-12"
                aria-label={t.previous}
                disabled={carouselIndex === 0}
              >
                <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex flex-1 justify-center gap-4 overflow-hidden md:gap-6">
                {Array.from({ length: carouselVisibleCount }).map((_, offset) => {
                  const idx = carouselIndex + offset;
                  const item = CAROUSEL_IMAGES[idx];
                  if (!item) return null;
                  return (
                    <div key={idx} className="flex min-w-0 flex-1 basis-0 justify-center">
                      <div className="overflow-hidden rounded-xl bg-white">
                        <img
                          alt={item.alt[language]}
                          className="aspect-[9/16] w-full max-w-[240px] object-contain md:max-w-[240px]"
                          src={item.src}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setCarouselIndex((i) => Math.min(CAROUSEL_IMAGES.length - carouselVisibleCount, i + 1))}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-black/30 bg-white text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:opacity-40 md:size-12"
                aria-label={t.next}
                disabled={carouselIndex >= CAROUSEL_IMAGES.length - carouselVisibleCount}
              >
                <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: CAROUSEL_IMAGES.length - carouselVisibleCount + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCarouselIndex(i)}
                  className={`size-2 rounded-full transition-colors md:size-2.5 ${carouselIndex === i ? 'bg-black' : 'bg-black/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border-2 border-black bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg md:text-lg"
            >
              {t.readStory}
            </button>
          </div>
        </section>

        {/* Community / Future */}
        <section
          className="relative overflow-hidden bg-[#0f0f0f] px-6 pb-px pt-0 md:px-12 md:pb-px md:pt-0"
          data-node-id="community-future"
        >
          <div className="mb-16 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-24" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
              {t.communityTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
              {t.communityDesc1}
              <br className="hidden sm:block lg:hidden" />
              {' '}{t.communityDesc2}{' '}
              <a
                href="https://www.youtube.com/watch?v=TRqNSkkrD8o"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline transition-colors hover:text-white/80"
              >
                {t.youtubeChannel}
              </a>
              !
            </p>
            <div className="relative mx-auto mt-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                title="Libell.us on YouTube"
                src="https://www.youtube.com/embed/TRqNSkkrD8o?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
                className="absolute inset-0 h-full w-full"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <div className="mt-16 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mt-24" aria-hidden />
        </section>

        {/* Back the Kickstarter CTA */}
        <section
          className="bg-[#0f172a] px-6 py-8 md:px-12 md:py-10 lg:px-24 lg:py-12"
          data-node-id="join-beta"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base text-white/90 md:text-lg">
              {t.ctaText1}
              <br />
              {t.ctaText2}
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#kickstarter"
                className="inline-block rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg md:text-lg animate-soft-pulse"
              >
                {t.backKickstarter}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t border-[#00C0E6]/30 bg-[#00C0E6] px-6 py-8 md:px-12 md:py-10"
          data-node-id="1:43"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain" src={imgLogo} />
              <span className="text-xl font-bold text-black">Libell.us</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-3 text-sm text-black md:gap-8 md:text-base">
              <a href="#features" className="transition-colors hover:text-black/80">{t.features}</a>
              <a href="#about" className="transition-colors hover:text-black/80">{t.about}</a>
              <a href="#docs" className="transition-colors hover:text-black/80">{t.footerDocs}</a>
              <a href="#contact" className="transition-colors hover:text-black/80">{t.footerContact}</a>
              <a href="#privacy" className="transition-colors hover:text-black/80">{t.footerPrivacy}</a>
              <a href="#terms" className="transition-colors hover:text-black/80">{t.footerTerms}</a>
            </nav>
            <p className="text-sm text-black">
              ©{new Date().getFullYear()} Libell.us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

