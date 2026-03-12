import { useState } from 'react';
import {
  imgLogo,
  imgVector,
  imgVector1,
  imgVuesaxBoldGallery,
} from '../assets/figma-assets';
import codeIcon from '../assets/code.png';
import gameSettingIcon from '../assets/game-setting.png';
import requestIcon from '../assets/request.png';

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
  return (
    <div className="flex w-full flex-col items-center bg-white font-sans" data-node-id="1:41">
      <div className="w-full max-w-[2560px]">
        {/* 0. Navigation */}
        <header
          className="flex h-32 items-center justify-between border-b-2 border-neutral-2 bg-white px-6 py-4 md:px-12 lg:px-24"
          data-node-id="1:258"
        >
          <div className="flex items-center gap-3">
            <img
              alt="Libell.us logomark"
              className="size-20 object-contain md:size-24"
              src={imgLogo}
            />
            <span className="text-xl font-bold text-black md:text-[31px]">Libell.us</span>
          </div>
          <nav className="flex items-center gap-4 md:gap-8">
            <a href="#features" className="text-base text-primary-600 transition-colors hover:text-primary-800 md:text-xl">
              Features
            </a>
            <a href="#about" className="text-base text-primary-600 transition-colors hover:text-primary-800 md:text-xl">
              About Us
            </a>
            <a href="#login" className="text-base text-primary-600 transition-colors hover:text-primary-800 md:text-xl">
              Login
            </a>
            <button
              type="button"
              className="rounded-2xl border-2 border-neutral-10 bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 md:text-xl"
            >
              Back the Kickstarter
            </button>
          </nav>
        </header>

        {/* 1. Hero */}
        <section
          className="relative flex flex-col items-start justify-center bg-primary-100 px-6 py-16 md:flex-row md:items-center md:gap-12 md:px-12 md:py-24 lg:px-24 lg:py-32"
          data-node-id="1:243"
        >
          <div className="max-w-2xl flex-1 lg:max-w-3xl">
            <p className="text-sm text-primary-500 md:text-base">
              Interactive storytelling platform
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight text-primary-800 md:text-3xl lg:text-4xl lg:leading-[1.2]">
              Create interactive stories
              <br />
              without writing code
            </h1>
            <p className="mt-3 text-base text-primary-600 md:text-lg">
              Build branching adventures or traditional books with visuals, sound, and AI
              storytelling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-2xl border border-neutral-2 bg-white px-5 py-2.5 text-base font-medium text-primary-800 transition-colors hover:border-neutral-6 hover:bg-neutral-1"
              >
                Back the Kickstarter
              </button>
              <button
                type="button"
                className="rounded-2xl border-2 border-primary-800 bg-transparent px-5 py-2.5 text-base text-primary-800 transition-colors hover:bg-primary-100 hover:text-primary-800"
              >
                Join the Beta
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-1 items-center justify-center md:mt-0 md:max-w-md lg:max-w-lg">
            <div className="flex size-[220px] items-center justify-center rounded-2xl bg-neutral-2 p-3">
              <img alt="" className="size-10 object-contain" src={imgVector} />
            </div>
          </div>
        </section>

        {/* 2. Writers want to create / Problem Section */}
        <section
          className="bg-white px-6 py-14 md:px-12 md:py-20"
          data-node-id="1:208"
        >
          <h2 className="text-center text-xl font-medium text-primary-800 md:text-2xl">
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
                <p className="mt-2 text-center text-base text-primary-700">
                  {label}
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-xl font-medium text-primary-800 md:text-2xl">
              But that often requires:
            </h2>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:items-end md:justify-center md:gap-10">
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={codeIcon}
                />
                <p className="mt-2 text-center text-base text-primary-700">Code</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-primary-600/40 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={gameSettingIcon}
                />
                <p className="mt-2 text-center text-base text-primary-700">Game Engines</p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-16 flex-shrink-0 self-center bg-primary-600/40 md:block"
              />
              <div className="flex w-36 flex-shrink-0 flex-col items-center">
                <img
                  alt=""
                  className="size-12 object-contain opacity-70"
                  src={requestIcon}
                />
                <p className="mt-2 text-center text-base text-primary-700">
                  Complicated Tools
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl py-4 text-center text-base text-primary-600 md:mt-12 md:text-lg">
            That’s a lot to learn before you can tell your story.
          </p>
        </section>

        {/* 3.1 Transition - Libell.us changes that */}
        <section
          className="flex flex-col items-center justify-center bg-primary-50 py-10 md:py-14"
          data-node-id="1:177"
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-neutral-2 md:size-16">
              <img
                alt="Libell.us"
                className="size-8 md:size-9"
                src={imgLogo}
              />
            </div>
            <h2 className="text-base font-medium text-primary-800 md:text-lg">
              Libell.us changes that
            </h2>
          </div>
        </section>

        {/* 3.2 From imagination to interactive stories */}
        <section
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:184"
        >
          <h2 className="text-center text-xl font-medium text-primary-800 md:text-2xl lg:text-3xl">
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
                className={`flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-10 ${
                  imageFirst ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-4 md:max-w-md">
                  <h3 className="text-xl font-medium text-neutral-10 md:text-2xl">{title}</h3>
                  <p className="text-base text-primary-600 md:text-lg">
                    {description}
                  </p>
                  <button
                    type="button"
                    className="rounded-2xl border-2 border-primary-700 px-6 py-2.5 text-base text-primary-700 transition-colors hover:bg-primary-100 hover:text-primary-800 md:text-lg"
                  >
                    Learn More
                  </button>
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
          className="bg-neutral-1 px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:71"
        >
          <h2 className="text-center text-xl font-medium text-primary-800 md:text-2xl lg:text-3xl">
            The Platform for Interactive Storytelling
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base text-primary-600 md:text-lg lg:text-xl">
            Libell.us is a creative platform where creators
            <br className="hidden md:block" />
            can build interactive stories with:
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <div
              aria-label="Platform features"
              className="flex flex-wrap justify-center gap-4 border-b-2 border-neutral-2 pb-3 md:gap-6 md:pb-4"
              role="tablist"
            >
              {PLATFORM_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activePlatformTab === tab.id}
                  onClick={() => setActivePlatformTab(tab.id)}
                  className={`relative -mb-[2px] border-b-2 pb-3 pt-1 text-base font-medium transition-colors md:pb-4 md:text-lg ${
                    activePlatformTab === tab.id
                      ? 'border-primary-800 text-primary-800'
                      : 'border-transparent text-primary-800/60 hover:text-primary-800/80'
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
                className="flex aspect-square w-full max-w-[160px] flex-col overflow-hidden rounded-xl bg-neutral-2 md:max-w-[180px]"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center p-2">
                  <img alt="" className="max-h-10 max-w-10 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-1.5 text-center text-xs text-primary-600">{item.label}</p>
              </div>
            ))}
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
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-xl border-2 border-primary-800 bg-white px-6 py-3 text-base text-primary-600 transition-colors hover:bg-primary-100 hover:text-primary-800 md:text-lg"
            >
              Read more
            </button>
          </div>
        </section>

        {/* Community / Future */}
        <section
          className="bg-primary-50 px-6 py-16 md:px-12 md:py-24"
          data-node-id="community-future"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-medium text-primary-800 md:text-2xl lg:text-3xl">
              Join the Next Generation of Storytelling
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-primary-600 md:text-lg">
              We’re building a platform for immersive, interactive stories.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary-600 md:text-lg">
              To see the platform in action, check out our{' '}
              <a
                href="https://www.youtube.com/watch?v=TRqNSkkrD8o"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-800 underline transition-colors hover:text-primary-700"
              >
                YouTube channel
              </a>
              !
            </p>
            <div className="mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-2 shadow-lg">
              <iframe
                title="Libell.us on YouTube"
                src="https://www.youtube.com/embed/TRqNSkkrD8o"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </section>

        {/* Join the Beta CTA */}
        <section
          className="bg-primary-100 px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20"
          data-node-id="join-beta"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base text-primary-700 md:text-lg">
              Join the beta and help shape what’s next!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#beta"
                className="inline-block rounded-2xl border-2 border-primary-800 bg-primary-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 md:text-lg"
              >
                Join the Beta
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-primary-50 px-6 py-8 md:px-12 md:py-10"
          data-node-id="1:43"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain" src={imgLogo} />
              <span className="text-xl font-bold text-black">Libell.us</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-black md:gap-8 md:text-base">
              <a href="#features" className="transition-colors hover:text-primary-800">Features</a>
              <a href="#about" className="transition-colors hover:text-primary-800">About</a>
              <a href="#privacy" className="transition-colors hover:text-primary-800">Privacy</a>
              <a href="#terms" className="transition-colors hover:text-primary-800">Terms</a>
            </nav>
            <p className="text-sm text-black/80">
              ©{new Date().getFullYear()} Libell.us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
