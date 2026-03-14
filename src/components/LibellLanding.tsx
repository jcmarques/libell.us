import { useEffect, useRef, useState } from 'react';
import {
  imgLogo,
  imgVuesaxBoldGallery,
} from '../assets/figma-assets';
import codeIcon from '../assets/icons/code.png';
import gameSettingIcon from '../assets/icons/game-setting.png';
import requestIcon from '../assets/icons/request.png';
import heroImage from '../assets/hero/hero.png';
import interactiveAdventuresImg from '../assets/writers/interactive-adventures.png';
import visualNovelsImg from '../assets/writers/visual-novels.png';
import gameBooksImg from '../assets/writers/game-books.png';
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

const PLATFORM_TABS = [
  { id: 'story-editor', label: 'Story Editor' },
  { id: 'visual-styles', label: 'Visual Styles' },
  { id: 'ai-narration', label: 'AI Narration' },
  { id: 'sound-effects', label: 'Sound Effects' },
] as const;

const PLATFORM_TAB_CONTENT: Record<(typeof PLATFORM_TABS)[number]['id'], { label: string }[]> = {
  'story-editor': [
    { label: 'Branches' },
    { label: 'Choices' },
    { label: 'Variables' },
    { label: 'Conditions' },
    { label: 'Scenes' },
    { label: 'Chapters' },
    { label: 'Notes' },
    { label: 'Export' },
  ],
  'visual-styles': [
    { label: 'Themes' },
    { label: 'Fonts' },
    { label: 'Layouts' },
    { label: 'Colors' },
    { label: 'Backgrounds' },
    { label: 'Cards' },
    { label: 'Animations' },
    { label: 'Preview' },
  ],
  'ai-narration': [
    { label: 'Voices' },
    { label: 'Pace' },
    { label: 'Emotion' },
    { label: 'Languages' },
    { label: 'Pause' },
    { label: 'Highlight' },
    { label: 'Sync' },
    { label: 'Settings' },
  ],
  'sound-effects': [
    { label: 'Ambience' },
    { label: 'SFX' },
    { label: 'Music' },
    { label: 'Volume' },
    { label: 'Fade' },
    { label: 'Loop' },
    { label: 'Triggers' },
    { label: 'Library' },
  ],
};

const CAROUSEL_IMAGES = [
  { src: inkRain, alt: 'Rainy and windy day in the city' },
  { src: pixelSwamp, alt: 'Foggy swamp with dense vegetation' },
  { src: cartoonSwamp, alt: 'Foggy swamp with dense vegetation' },
  { src: pixelMountains, alt: 'Snow in the mountains' },
  { src: cartoonRain, alt: 'Rainy and windy day in the city' },
  { src: woodMountains, alt: 'Snow in the mountains' },
  { src: cartoonMountains, alt: 'Snow in the mountains' },
  { src: inkSwamp, alt: 'Foggy swamp with dense vegetation' },
  { src: woodSwamp, alt: 'Foggy swamp with dense vegetation' },
  { src: mangaRain, alt: 'Rainy and windy day in the city' },
  { src: mangaSwamp, alt: 'Foggy swamp with dense vegetation' },
  { src: inkMountains, alt: 'Snow in the mountains' },
  { src: mangaMountains, alt: 'Snow in the mountains' },
  { src: woodRain, alt: 'Rainy and windy day in the city' },
  { src: pixelRain, alt: 'Rainy and windy day in the city' },
];

export function LibellLanding() {
  const [activePlatformTab, setActivePlatformTab] = useState<(typeof PLATFORM_TABS)[number]['id']>('story-editor');
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
        Features
      </a>
      <a href="#about" className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        About
      </a>
      <a href="#login" className="text-sm text-black hover:text-black/80 sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        Login
      </a>
      <button
        type="button"
        className="whitespace-nowrap rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
      >
        Back the Kickstarter
      </button>
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
              <div className="flex size-12 items-center justify-center rounded-2xl bg-transparent ring-1 ring-white/40 sm:size-16 animate-soft-pulse">
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
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                Features
              </a>
              <a href="#about" className="text-lg font-medium text-black hover:text-black/80" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#login" className="text-lg font-medium text-black hover:text-black/80" onClick={closeMobileMenu}>
                Login
              </a>
              <button
                type="button"
                className="w-full rounded-2xl border-2 border-white bg-white py-3 text-base font-medium text-black hover:bg-white"
                onClick={closeMobileMenu}
              >
                Back the Kickstarter
              </button>
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
                Interactive storytelling platform
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.2]">
                Build stories.<br />
                Skip the code.
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-base text-neutral-6 md:mx-0 md:text-lg">
                Build branching adventures
                <br className="md:hidden" />
                {' '}or traditional books{'\u00a0'}with
                <br className="md:hidden" />
                {' '}visuals, sound and AI storytelling.
              </p>
              <div className="mt-6 flex flex-nowrap justify-center gap-3 md:justify-start">
                <button
                  type="button"
                  className="shrink-0 rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
                >
                  Back the Kickstarter
                </button>
                <button
                  type="button"
                  className="shrink-0 rounded-2xl border-2 border-white bg-transparent px-4 py-2.5 text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/25 hover:shadow-md sm:px-6 sm:py-3 sm:text-base"
                >
                  Join the waitlist
                </button>
              </div>
              <p className="mt-2 text-sm text-neutral-6 md:mt-4 md:text-base">
                Your all-in-one platform. No code required.
              </p>
            </div>
            <div className={`-mt-1 flex flex-1 items-center justify-center self-center md:mt-0 md:max-w-[1008px] lg:max-w-[1344px] [animation-fill-mode:backwards] ${heroSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex w-full max-w-full items-center justify-center overflow-hidden rounded-2xl md:max-w-[1008px] lg:max-w-[1344px]">
                <img alt="Create interactive stories with Libell" className="w-full object-contain mix-blend-screen" src={heroImage} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Writers want to create / Problem Section */}
        <section
          ref={writersSectionRef}
          className="bg-[#0f0f0f] px-6 pb-14 pt-0 md:px-12 md:pb-20 md:pt-0"
          data-node-id="1:208"
        >
          <div className="mb-14 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-16" aria-hidden />
          <h2 className="text-center text-xl font-medium text-white md:text-2xl">
            Writers want to create:
          </h2>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
            {[
              { label: 'Interactive Adventures', id: '1:229', img: interactiveAdventuresImg },
              { label: 'Visual Novels', id: '1:233', img: visualNovelsImg },
              { label: 'Game Books', id: '1:237', img: gameBooksImg },
            ].map(({ label, id, img }, index) => {
              const lastIndex = 2;
              const delayMs = writersScrollDown ? 450 + index * 400 : 450 + (lastIndex - index) * 400;
              return (
              <li
                key={id}
                className={`flex flex-col items-center [animation-fill-mode:backwards] ${writersSectionVisible ? 'animate-fade-in-up-slow' : 'opacity-0'}`}
                style={{ animationDelay: writersSectionVisible ? `${delayMs}ms` : undefined }}
              >
                <div className="flex size-[220px] items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-3">
                  <img
                    alt=""
                    className="h-full w-full object-contain"
                    src={img}
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
              But that often requires:
            </h2>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:items-end md:justify-center md:gap-10">
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-90 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(57%)_saturate(2500%)_hue-rotate(166deg)]"
                  src={codeIcon}
                />
                <p className="mt-2 text-center text-base text-white/90">Code</p>
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
                <p className="mt-2 text-center text-base text-white/90">Game Engines</p>
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
                  Complicated Tools
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl py-4 text-center text-base text-white/90 md:mt-12 md:text-lg">
            That’s a lot to learn before you can tell your story.
          </p>
        </section>

        {/* 3.1 Transition - Libell.us changes that */}
        <section
          className="flex flex-col items-center justify-center bg-[#0f172a] pb-10 pt-0 md:pb-14 md:pt-0"
          data-node-id="1:177"
        >
          <div className="mb-10 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-12" aria-hidden />
          <div
            ref={libellChangesRef}
            className="mx-4 w-full max-w-2xl rounded-2xl bg-[#1e293b] px-8 py-10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7),0_16px_32px_-8px_rgba(0,0,0,0.5)] md:px-12 md:py-12"
          >
          <div className={`flex flex-row items-center justify-center gap-3 ${libellSectionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white ring-1 ring-white/30 transition-all duration-200 hover:scale-[1.05] hover:shadow-lg md:size-16 animate-soft-pulse">
                <img
                  alt="Libell.us"
                  className="size-8 md:size-9"
                  src={imgLogo}
                />
              </div>
              <h2 className="text-base font-medium text-white md:text-lg">
                <span className="text-white">Libell.us</span> changes that
              </h2>
            </div>
          </div>
        </section>

        {/* Who it's for - Built for Story Creators */}
        <section
          id="about"
          className="relative overflow-hidden bg-[#00C0E6] px-6 py-14 md:px-12 md:py-20"
          data-node-id="who-its-for"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,192,230,0.2),transparent)] pointer-events-none" aria-hidden />
          <div className="relative">
            <h2 className="text-center text-xl font-medium tracking-wide text-black md:text-2xl lg:text-3xl">
              Built for Story Creators
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-black/50 rounded-full" aria-hidden />
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Writers',
                  description: 'Create interactive novels and immersive narrative worlds.',
                  icon: 'fa-pen-fancy',
                },
                {
                  title: 'Game Designers',
                  description: 'Prototype branching narratives and interactive storytelling systems.',
                  icon: 'fa-gamepad',
                },
                {
                  title: 'Educators',
                  description: 'Build interactive learning experiences and educational simulations.',
                  icon: 'fa-graduation-cap',
                },
                {
                  title: 'Content Creators',
                  description: 'Publish visually rich storytelling experiences.',
                  icon: 'fa-video',
                },
              ].map(({ title, description, icon }) => (
                <div
                  key={title}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/30 bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border hover:border-white hover:bg-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.25),0_0_24px_rgba(0,192,230,0.4)]"
                >
                  <i className={`fa-solid ${icon} text-white mb-4 text-2xl md:text-3xl drop-shadow-sm`} aria-hidden />
                  <h3 className="min-h-[2.75rem] text-lg font-medium text-white md:min-h-14 md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black md:text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.2 From imagination to interactive stories */}
        <section
          ref={imaginationSectionRef}
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:184"
        >
          <h2 className="text-center text-xl font-medium text-content md:text-2xl lg:text-3xl">
            From imagination to interactive stories
          </h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-16">
            {[
              {
                title: 'Write Stories',
                description:
                  'Start with an idea and write your story using an intuitive editor designed for interactive storytelling.',
                imageFirst: false,
                img: writeStoriesImg,
              },
              {
                title: 'Build Worlds',
                description:
                  "Create characters, locations, and branching paths that shape your story's universe.",
                imageFirst: true,
                img: buildWorldsImg,
              },
              {
                title: 'Publish Interactive Books',
                description:
                  'Turn your story into an interactive experience readers can explore.',
                imageFirst: false,
                img: publishImg,
              },
            ].map(({ title, description, imageFirst, img }, index) => {
              const lastIndex = 2;
              const delayMs = imaginationScrollDown ? index * 300 : (lastIndex - index) * 300;
              return (
              <div
                key={title}
                className={`flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-10 [animation-fill-mode:backwards] ${imageFirst ? 'md:flex-row-reverse' : ''
                  } ${imaginationSectionVisible ? 'animate-fade-in-up-slow' : 'opacity-0'}`}
                style={{ animationDelay: imaginationSectionVisible ? `${delayMs}ms` : undefined }}
              >
                <div className="flex flex-1 flex-col items-center space-y-4 text-center md:max-w-md md:items-start md:text-left">
                  <h3 className="text-xl font-medium text-content md:text-2xl">{title}</h3>
                  <p className="text-base text-content md:text-lg">
                    {description}
                  </p>
                  <div className="flex w-full justify-center md:justify-start">
                    <button
                      type="button"
                      className="rounded-2xl border-2 border-content px-6 py-3 text-base font-medium text-content transition-all duration-200 hover:scale-[1.03] hover:bg-content/10 hover:shadow-lg hover:text-black md:text-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex w-fit justify-center md:justify-start">
                  <div className="flex h-[280px] w-[400px] shrink-0 overflow-hidden rounded-2xl shadow-2xl md:h-[340px] md:w-[500px]">
                    <img alt="" className="h-full w-full object-cover" src={img} />
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </section>

        {/* 4. The Platform for Interactive Storytelling */}
        <section
          id="features"
          className="relative overflow-hidden border-t border-b border-white/30 bg-[#0f0f0f] px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:71"
        >
          <h2 className="text-center text-xl font-medium text-white md:text-2xl lg:text-3xl">
            The Platform for Interactive Storytelling
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-white/70 md:text-lg lg:text-xl">
            <span className="font-semibold text-white/90">Libell.us</span> is a creative platform where creators
            <br className="hidden md:block" />
            can build interactive stories with:
          </p>
          <div className="relative mx-auto mt-8 max-w-3xl">
            <div
              aria-label="Platform features"
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
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div
            aria-label={`Content for ${PLATFORM_TABS.find((t) => t.id === activePlatformTab)?.label ?? activePlatformTab}`}
            className="mx-auto mt-8 grid max-w-3xl grid-cols-2 justify-items-center gap-3 md:grid-cols-4 md:gap-4"
            role="tabpanel"
          >
            {PLATFORM_TAB_CONTENT[activePlatformTab].map((item, i) => (
              <div
                key={`${activePlatformTab}-${i}`}
                className="flex aspect-square w-full max-w-[160px] flex-col overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm md:max-w-[180px]"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center p-2">
                  <img alt="" className="max-h-10 max-w-10 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-1.5 text-center text-xs text-white">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border border-white px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/25 hover:shadow-md"
            >
              See how Libell works
            </button>
            <button
              type="button"
              className="rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg"
            >
              Back the Kickstarter
            </button>
          </div>
        </section>

        {/* Explore stories created with Libell.us */}
        <section
          ref={exploreStoriesRef}
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="54:212"
        >
          <h2 className="text-center text-xl font-medium text-content md:text-2xl lg:text-3xl">
            Explore stories created with Libell.us
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-content md:text-lg lg:text-xl">
            From fantasy adventures and children's books to sci-fi interactive stories.
          </p>
          <div
            className={`mx-auto mt-12 max-w-6xl [animation-fill-mode:backwards] ${exploreStoriesVisible ? 'animate-fade-in-up-slow' : 'opacity-0'}`}
          >
            <div className="relative flex items-center justify-center gap-4 md:gap-6">
              <button
                type="button"
                onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-content/30 bg-white text-content transition-colors hover:border-content hover:bg-content hover:text-white disabled:opacity-40 md:size-12"
                aria-label="Previous"
                disabled={carouselIndex === 0}
              >
                <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex flex-1 justify-center gap-4 overflow-hidden md:gap-6">
                {[0, 1, 2].map((offset) => {
                  const idx = carouselIndex + offset;
                  const item = CAROUSEL_IMAGES[idx];
                  if (!item) return null;
                  return (
                    <div key={idx} className="flex min-w-0 flex-1 basis-0 justify-center">
                      <div className="overflow-hidden rounded-xl bg-white">
                        <img
                          alt={item.alt}
                          className="aspect-[9/16] w-full max-w-[200px] object-contain md:max-w-[240px]"
                          src={item.src}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setCarouselIndex((i) => Math.min(CAROUSEL_IMAGES.length - 3, i + 1))}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-content/30 bg-white text-content transition-colors hover:border-content hover:bg-content hover:text-white disabled:opacity-40 md:size-12"
                aria-label="Next"
                disabled={carouselIndex >= CAROUSEL_IMAGES.length - 3}
              >
                <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: CAROUSEL_IMAGES.length - 2 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCarouselIndex(i)}
                  className={`size-2 rounded-full transition-colors md:size-2.5 ${carouselIndex === i ? 'bg-content' : 'bg-content/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border-2 border-content bg-white px-6 py-3 text-base font-medium text-content transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg hover:text-black md:text-lg"
            >
              Read a Story
            </button>
          </div>
        </section>

        {/* Community / Future */}
        <section
          className="relative overflow-hidden bg-[#0f0f0f] px-6 pb-16 pt-0 md:px-12 md:pb-24 md:pt-0"
          data-node-id="community-future"
        >
          <div className="mb-16 h-px w-full shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_-2px_rgba(255,255,255,0.08)] md:mb-24" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
              Join the Next Generation of Storytelling
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
              We’re building a platform for immersive, interactive stories.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              To see the platform in action, check out our{' '}
              <a
                href="https://www.youtube.com/watch?v=TRqNSkkrD8o"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline transition-colors hover:text-white/80"
              >
                YouTube channel
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
        </section>

        {/* Back the Kickstarter CTA */}
        <section
          className="bg-black px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20"
          data-node-id="join-beta"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base text-white md:text-lg">
              Back the project and join the beta.
              <br />
              Help shape what's next!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#kickstarter"
                className="inline-block rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-lg md:text-lg animate-soft-pulse"
              >
                Back the Kickstarter
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
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-black md:gap-8 md:text-base">
              <a href="#features" className="transition-colors hover:text-black/80">Features</a>
              <a href="#about" className="transition-colors hover:text-black/80">About</a>
              <a href="#docs" className="transition-colors hover:text-black/80">Docs</a>
              <a href="#contact" className="transition-colors hover:text-black/80">Contact</a>
              <a href="#privacy" className="transition-colors hover:text-black/80">Privacy</a>
              <a href="#terms" className="transition-colors hover:text-black/80">Terms</a>
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
