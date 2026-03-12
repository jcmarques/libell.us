import {
  imgLogo,
  imgVector,
  imgVector1,
  imgLine,
  imgSocmedFacebook,
  imgSocmedTwitter,
  imgSocmedInstagram,
  imgVuesaxBoldGallery,
} from '../assets/figma-assets';
import codeIcon from '../assets/code.png';
import gameSettingIcon from '../assets/game-setting.png';
import requestIcon from '../assets/request.png';

export function LibellLanding() {
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
            <a href="#features" className="text-base text-primary-600 md:text-xl">
              Features
            </a>
            <a href="#about" className="text-base text-primary-600 md:text-xl">
              About Us
            </a>
            <a href="#login" className="text-base text-primary-600 md:text-xl">
              Login
            </a>
            <button
              type="button"
              className="rounded-2xl border-2 border-neutral-10 bg-primary-600 px-6 py-3 text-base font-medium text-white md:text-xl"
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
                className="rounded-2xl border border-neutral-2 bg-white px-5 py-2.5 text-base font-medium text-primary-800"
              >
                Back the Kickstarter
              </button>
              <button
                type="button"
                className="rounded-2xl border-2 border-primary-800 bg-transparent px-5 py-2.5 text-base text-primary-800"
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
                    className="rounded-2xl border-2 border-primary-700 px-6 py-2.5 text-base text-primary-700 md:text-lg"
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
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-6 border-b-2 border-primary-800 pb-4 md:gap-12">
              <button
                type="button"
                className="text-xl text-primary-800 md:text-3xl"
              >
                Story Editor
              </button>
              <button
                type="button"
                className="text-xl text-primary-800/60 md:text-3xl"
              >
                Visual Styles
              </button>
              <button
                type="button"
                className="text-xl text-primary-800/60 md:text-3xl"
              >
                AI Narration
              </button>
              <button
                type="button"
                className="text-xl text-primary-800/60 md:text-3xl"
              >
                Sound Effects
              </button>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex aspect-square w-full max-w-[220px] flex-col overflow-hidden rounded-2xl bg-neutral-2"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center p-3">
                  <img alt="" className="max-h-12 max-w-12 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-2 text-center text-sm text-primary-600">Image-{i}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-xl bg-white px-8 py-4 text-xl text-primary-600"
            >
              Show more
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
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-xl border-2 border-primary-800 bg-white px-6 py-3 text-base text-primary-600 md:text-lg"
            >
              Read more
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-primary-100 px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:43"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <span className="text-2xl font-semibold text-black md:text-4xl">Logo</span>
              <p className="mt-4 text-base text-black md:text-lg">
                Our vision is to provide convenience and help increase your sales business.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#facebook" aria-label="Facebook">
                  <img alt="" className="size-12 object-contain" src={imgSocmedFacebook} />
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <img alt="" className="size-12 object-contain" src={imgSocmedTwitter} />
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <img alt="" className="size-12 object-contain" src={imgSocmedInstagram} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">About</h3>
              <ul className="mt-4 space-y-2 text-base text-black md:text-lg">
                <li><a href="#how">How it works</a></li>
                <li><a href="#featured">Featured</a></li>
                <li><a href="#partnership">Partnership</a></li>
                <li><a href="#business">Bussiness Relation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">Community</h3>
              <ul className="mt-4 space-y-2 text-base text-black md:text-lg">
                <li><a href="#events">Events</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#podcast">Podcast</a></li>
                <li><a href="#invite">Invite a friend</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">Socials</h3>
              <ul className="mt-4 space-y-2 text-base text-black md:text-lg">
                <li><a href="#discord">Discord</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#facebook">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between border-t-2 border-primary-800 pt-8 md:flex-row">
            <img alt="" className="hidden md:block" src={imgLine} />
            <p className="text-center text-sm text-black md:text-base">
              ©2022 Company Name. All rights reserved
            </p>
            <div className="mt-4 flex gap-8 md:mt-0">
              <a href="#privacy" className="text-sm text-black md:text-base">
                Privacy & Policy
              </a>
              <a href="#terms" className="text-sm text-black md:text-base">
                Terms & Condition
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
