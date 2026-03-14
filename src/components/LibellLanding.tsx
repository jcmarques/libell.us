import { useEffect, useState } from 'react';
import {
  imgLogo,
  imgVector,
  imgVector1,
  imgVuesaxBoldGallery,
} from '../assets/figma-assets';
import codeIcon from '../assets/code.png';
import gameSettingIcon from '../assets/game-setting.png';
import requestIcon from '../assets/request.png';
import heroImage from '../assets/hero-01.png';

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

export function LibellLanding() {
  const [activePlatformTab, setActivePlatformTab] = useState<(typeof PLATFORM_TABS)[number]['id']>('story-editor');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
      <a href="#features" className="text-sm text-neutral-10 transition-colors hover:text-black sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        Features
      </a>
      <a href="#about" className="text-sm text-neutral-10 transition-colors hover:text-black sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        About
      </a>
      <a href="#login" className="text-sm text-neutral-10 transition-colors hover:text-black sm:text-base lg:text-lg" onClick={closeMobileMenu}>
        Login
      </a>
      <button
        type="button"
        className="whitespace-nowrap rounded-2xl border-2 border-black bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
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
          className="relative flex h-20 min-h-[4rem] items-center justify-between border-b border-neutral-2 bg-white px-4 py-3 sm:h-24 sm:px-6 sm:py-3 lg:px-12"
          data-node-id="1:258"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              alt="Libell.us logomark"
              className="size-12 object-contain sm:size-16"
              src={imgLogo}
            />
            <span className="text-lg font-bold text-black sm:text-xl lg:text-2xl">Libell.us</span>
          </div>

          {/* Desktop nav - visible from sm and up, no hamburger on bigger screens */}
          <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
            {navLinks}
          </nav>

          {/* Mobile hamburger button - only on small screens */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-neutral-10 transition-colors hover:bg-neutral-2 sm:hidden"
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
        </header>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div
            className="fixed left-0 right-0 top-20 z-50 border-b border-neutral-2 bg-white px-4 py-6 shadow-lg sm:hidden"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
          >
            <nav className="flex flex-col gap-6">
              <a href="#features" className="text-lg font-medium text-neutral-10 hover:text-black" onClick={closeMobileMenu}>
                Features
              </a>
              <a href="#about" className="text-lg font-medium text-neutral-10 hover:text-black" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#login" className="text-lg font-medium text-neutral-10 hover:text-black" onClick={closeMobileMenu}>
                Login
              </a>
              <button
                type="button"
                className="w-full rounded-2xl border-2 border-black bg-black py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
                onClick={closeMobileMenu}
              >
                Back the Kickstarter
              </button>
            </nav>
          </div>
        )}

        {/* 1. Hero */}
        <section
          className="relative flex flex-col items-center justify-center bg-black px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-24 lg:px-24 lg:py-32"
          data-node-id="1:243"
        >
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
                className="shrink-0 rounded-2xl border-2 border-white bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-2 hover:text-black sm:px-6 sm:py-3 sm:text-base"
              >
                Back the Kickstarter
              </button>
              <button
                type="button"
                className="shrink-0 rounded-2xl border border-white bg-transparent px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
              >
                Join the waitlist
              </button>
            </div>
            <p className="mt-4 text-sm text-neutral-6 md:text-base">
              Your all-in-one platform. No code required.
            </p>
          </div>
          <div className="mt-8 flex flex-1 items-center justify-center self-center md:mt-0 md:max-w-md lg:max-w-lg">
            <div className="flex w-full max-w-[360px] items-center justify-center overflow-hidden rounded-2xl md:max-w-md">
              <img alt="Create interactive stories with Libell" className="w-full object-contain mix-blend-screen" src={heroImage} />
            </div>
          </div>
        </section>

        {/* 2. Writers want to create / Problem Section */}
        <section
          className="bg-white px-6 py-14 md:px-12 md:py-20"
          data-node-id="1:208"
        >
          <h2 className="text-center text-xl font-medium text-neutral-10 md:text-2xl">
            Writers want to create:
          </h2>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
            {[
              { label: 'Interactive Adventures', id: '1:229' },
              { label: 'Visual Novels', id: '1:233' },
              { label: 'Game Books', id: '1:237' },
            ].map(({ label, id }) => (
              <li key={id} className="flex flex-col items-center">
                <div className="flex size-[220px] items-center justify-center rounded-2xl bg-neutral-1 p-3">
                  <img
                    alt=""
                    className="size-10 object-contain"
                    src={imgVector}
                  />
                </div>
                <p className="mt-2 text-center text-base text-neutral-7">
                  {label}
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-xl font-medium text-neutral-10 md:text-2xl">
              But that often requires:
            </h2>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:items-end md:justify-center md:gap-10">
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={codeIcon}
                />
                <p className="mt-2 text-center text-base text-neutral-7">Code</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-neutral-2 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={gameSettingIcon}
                />
                <p className="mt-2 text-center text-base text-neutral-7">Game Engines</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-neutral-2 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={requestIcon}
                />
                <p className="mt-2 text-center text-base text-neutral-7">
                  Complicated Tools
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl py-4 text-center text-base text-neutral-7 md:mt-12 md:text-lg">
            That’s a lot to learn before you can tell your story.
          </p>
        </section>

        {/* 3.1 Transition - Libell.us changes that */}
        <section
          className="flex flex-col items-center justify-center bg-dark py-10 md:py-14"
          data-node-id="1:177"
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white md:size-16 ring-1 ring-white/30">
              <img
                alt="Libell.us"
                className="size-8 md:size-9"
                src={imgLogo}
              />
            </div>
            <h2 className="text-base font-medium text-white md:text-lg">
              <span className="text-accent">Libell.us</span> changes that
            </h2>
          </div>
        </section>

        {/* Who it's for - Built for Story Creators */}
        <section
          id="about"
          className="relative overflow-hidden bg-gradient-to-b from-dark-section via-dark-section to-dark px-6 py-14 md:px-12 md:py-20"
          data-node-id="who-its-for"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(202,138,4,0.08),transparent)] pointer-events-none" aria-hidden />
          <div className="relative">
            <h2 className="text-center text-xl font-medium tracking-wide text-white md:text-2xl lg:text-3xl">
              Built for Story Creators
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent/60 rounded-full" aria-hidden />
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
                  className="group relative flex flex-col items-center rounded-2xl border border-dark-border bg-dark-card/90 p-6 text-center transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_24px_rgba(202,138,4,0.12)]"
                >
                  <div className="absolute inset-px rounded-2xl border-l-2 border-accent/0 transition-colors duration-300 group-hover:border-accent/60" aria-hidden />
                  <i className={`fa-solid ${icon} text-accent mb-4 text-2xl md:text-3xl`} aria-hidden />
                  <h3 className="min-h-[2.75rem] text-lg font-medium text-white md:min-h-14 md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-6 md:text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.2 From imagination to interactive stories */}
        <section
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:184"
        >
          <h2 className="text-center text-xl font-medium text-neutral-10 md:text-2xl lg:text-3xl">
            From imagination to interactive stories
          </h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-16">
            {[
              {
                title: 'Write Stories',
                description:
                  'Start with an idea and write your story using an intuitive editor designed for interactive storytelling.',
                imageFirst: false,
              },
              {
                title: 'Build Worlds',
                description:
                  "Create characters, locations, and branching paths that shape your story's universe.",
                imageFirst: true,
              },
              {
                title: 'Publish Interactive Books',
                description:
                  'Turn your story into an interactive experience readers can explore.',
                imageFirst: false,
              },
            ].map(({ title, description, imageFirst }) => (
              <div
                key={title}
                className={`flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-10 ${imageFirst ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="flex flex-1 flex-col items-center space-y-4 text-center md:max-w-md md:items-start md:text-left">
                  <h3 className="text-xl font-medium text-neutral-10 md:text-2xl">{title}</h3>
                  <p className="text-base text-neutral-7 md:text-lg">
                    {description}
                  </p>
                  <div className="flex w-full justify-center md:justify-start">
                    <button
                      type="button"
                      className="rounded-2xl border-2 border-neutral-10 px-6 py-3 text-base font-medium text-neutral-10 transition-colors hover:bg-neutral-2 hover:text-black md:text-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex w-fit justify-center md:justify-start">
                  <div className="flex h-[220px] w-[360px] shrink-0 items-center justify-center rounded-2xl bg-neutral-1 p-6 md:w-[440px]">
                    <img alt="" className="size-10 shrink-0 object-contain" src={imgVector} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. The Platform for Interactive Storytelling */}
        <section
          id="features"
          className="bg-dark-section px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:71"
        >
          <h2 className="text-center text-xl font-medium text-white md:text-2xl lg:text-3xl">
            The Platform for Interactive Storytelling
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-neutral-6 md:text-lg lg:text-xl">
            <span className="text-accent font-semibold">Libell.us</span> is a creative platform where creators
            <br className="hidden md:block" />
            can build interactive stories with:
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <div
              aria-label="Platform features"
              className="flex flex-wrap justify-center gap-4 border-b-2 border-dark-border pb-3 md:gap-6 md:pb-4"
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
                    ? 'border-accent text-white'
                    : 'border-transparent text-neutral-6 hover:text-white'
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
                className="flex aspect-square w-full max-w-[160px] flex-col overflow-hidden rounded-xl bg-dark-card border border-dark-border md:max-w-[180px]"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center p-2">
                  <img alt="" className="max-h-10 max-w-10 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-1.5 text-center text-xs text-neutral-6">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              See how Libell works
            </button>
            <button
              type="button"
              className="rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-neutral-2"
            >
              Back the Kickstarter
            </button>
          </div>
        </section>

        {/* Explore stories created with Libell.us */}
        <section
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="54:212"
        >
          <h2 className="text-center text-xl font-medium text-neutral-10 md:text-2xl lg:text-3xl">
            Explore stories created with Libell.us
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-neutral-7 md:text-lg lg:text-xl">
            From fantasy adventures and children's books to sci-fi interactive stories.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-3xl bg-neutral-1 p-6"
              >
                <img alt="" className="max-h-16 max-w-16 object-contain" src={imgVector1} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-2xl border-2 border-black bg-white px-6 py-3 text-base font-medium text-neutral-10 transition-colors hover:bg-neutral-2 hover:text-black md:text-lg"
            >
              Read a Story
            </button>
          </div>
        </section>

        {/* Community / Future */}
        <section
          className="bg-dark-section px-6 py-16 md:px-12 md:py-24"
          data-node-id="community-future"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
              Join the Next Generation of Storytelling
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-6 md:text-lg">
              We’re building a platform for immersive, interactive stories.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-6 md:text-lg">
              To see the platform in action, check out our{' '}
              <a
                href="https://www.youtube.com/watch?v=TRqNSkkrD8o"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline transition-colors hover:text-accent-hover"
              >
                YouTube channel
              </a>
              !
            </p>
            <div className="relative mx-auto mt-10 aspect-video w-full max-w-2xl min-h-[220px] overflow-hidden rounded-2xl bg-dark-card border border-dark-border shadow-lg">
              <iframe
                title="Libell.us on YouTube"
                src="https://www.youtube.com/embed/TRqNSkkrD8o"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
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
                className="inline-block rounded-2xl border-2 border-white bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-neutral-2 hover:text-black md:text-lg"
              >
                Back the Kickstarter
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-white px-6 py-8 md:px-12 md:py-10 border-t border-neutral-2"
          data-node-id="1:43"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain" src={imgLogo} />
              <span className="text-xl font-bold text-accent">Libell.us</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-10 md:gap-8 md:text-base">
              <a href="#features" className="transition-colors hover:text-accent">Features</a>
              <a href="#about" className="transition-colors hover:text-accent">About</a>
              <a href="#docs" className="transition-colors hover:text-accent">Docs</a>
              <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
              <a href="#privacy" className="transition-colors hover:text-accent">Privacy</a>
              <a href="#terms" className="transition-colors hover:text-accent">Terms</a>
            </nav>
            <p className="text-sm text-neutral-7">
              ©{new Date().getFullYear()} Libell.us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
