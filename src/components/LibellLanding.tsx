import {
  imgLogo,
  imgVector1,
  imgVector2,
  imgGameSetting1,
  imgCode1,
  imgRequest1,
  imgLine,
  imgLine4,
  imgVector5,
  imgSocmedFacebook,
  imgSocmedTwitter,
  imgSocmedInstagram,
  imgVuesaxBoldGallery,
  imgVuesaxBoldGallery1,
} from '../assets/figma-assets';
import { PlaceholderImage } from './PlaceholderImage';

export function LibellLanding() {
  return (
    <div className="flex w-full flex-col items-center bg-white font-sans" data-node-id="1:41">
      <div className="w-full max-w-[2560px]">
        {/* 0. Navigation */}
        <header
          className="flex h-32 items-center justify-between border-b-2 border-neutral-2 bg-white px-6 py-4 md:px-12 lg:px-[174px]"
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
              className="rounded-full border-2 border-neutral-10 bg-primary-600 px-6 py-3 text-base font-medium text-white md:text-xl"
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
            <p className="text-xl text-primary-500 md:text-2xl lg:text-[31px]">
              Interactive storytelling platform
            </p>
            <h1 className="mt-4 text-3xl font-medium leading-tight text-primary-800 md:text-4xl lg:text-5xl xl:text-[61px]">
              Create interactive stories
              <br />
              without writing code
            </h1>
            <p className="mt-4 text-lg text-primary-600 md:text-xl lg:text-[39px]">
              Build branching adventures or traditional books with visuals, sound, and AI
              storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-3 text-lg font-medium text-primary-800 md:text-xl"
              >
                Back the Kickstarter
              </button>
              <button
                type="button"
                className="rounded-2xl border-2 border-primary-800 bg-transparent px-6 py-3 text-lg text-primary-800 md:text-xl"
              >
                Join the Beta
              </button>
            </div>
          </div>
          <div className="mt-8 flex-1 md:mt-0 md:max-w-xl lg:max-w-2xl">
            <img
              alt=""
              className="w-full rounded-2xl object-cover"
              src={imgVuesaxBoldGallery1}
            />
          </div>
        </section>

        {/* 2. Writers want to create / Problem Section */}
        <section
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:208"
        >
          <h2 className="text-center text-2xl font-medium text-primary-800 md:text-4xl lg:text-5xl">
            Writers want to create:
          </h2>
          <ul className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
            {[
              { label: 'Interactive Adventures', id: '1:229' },
              { label: 'Visual Novels', id: '1:233' },
              { label: 'Game Books', id: '1:237' },
            ].map(({ label, id }) => (
              <li
                key={id}
                className="flex w-full max-w-[539px] flex-col items-center rounded-lg"
              >
                <PlaceholderImage className="flex h-[300px] w-full items-center justify-center rounded-3xl bg-neutral-1 p-4 md:h-[400px]" />
                <p className="mt-4 text-center text-xl text-primary-700 md:text-2xl lg:text-[39px]">
                  {label}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="mt-20 text-center text-2xl font-medium text-primary-800 md:text-4xl lg:text-5xl">
            But that often requires:
          </h2>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
            <div className="flex flex-col items-center">
              <img
                alt=""
                className="size-24 opacity-30 md:size-32"
                src={imgCode1}
              />
              <p className="mt-4 text-xl text-primary-700 md:text-2xl">Code</p>
            </div>
            <img alt="" className="hidden h-2 w-24 flex-1 object-contain md:block" src={imgVector5} />
            <div className="flex flex-col items-center">
              <img
                alt=""
                className="size-28 opacity-30 md:size-36"
                src={imgGameSetting1}
              />
              <p className="mt-4 text-xl text-primary-700 md:text-2xl">Game Engines</p>
            </div>
            <img alt="" className="hidden h-2 w-24 flex-1 object-contain md:block" src={imgVector5} />
            <div className="flex flex-col items-center">
              <img
                alt=""
                className="size-20 opacity-30 md:size-28"
                src={imgRequest1}
              />
              <p className="mt-4 text-center text-xl text-primary-700 md:text-2xl">
                Complicated Tools
              </p>
            </div>
          </div>
        </section>

        {/* 3.1 Transition - Libell.us changes that */}
        <section
          className="flex flex-col items-center justify-center bg-primary-50 py-16 md:py-24"
          data-node-id="1:177"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute -z-10 size-36 rounded-full bg-primary-600 opacity-10 md:size-40" />
            <img alt="Libell.us" className="size-24 md:size-36" src={imgLogo} />
            <h2 className="mt-6 text-2xl font-medium text-primary-800 md:text-4xl lg:text-5xl">
              Libell.us changes that
            </h2>
          </div>
        </section>

        {/* 3.2 From imagination to interactive stories */}
        <section
          className="bg-white px-6 py-16 md:px-12 md:py-24"
          data-node-id="1:184"
        >
          <h2 className="text-center text-2xl font-medium text-primary-800 md:text-4xl lg:text-5xl">
            From imagination to interactive stories
          </h2>
          <div className="mx-auto mt-16 max-w-6xl space-y-24">
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
                className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
                  imageFirst ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-medium text-neutral-10 md:text-4xl">{title}</h3>
                  <p className="text-lg text-primary-600 md:text-2xl lg:text-[39px]">
                    {description}
                  </p>
                  <button
                    type="button"
                    className="rounded-full border-2 border-primary-700 px-8 py-3 text-lg text-primary-700 md:text-xl"
                  >
                    Learn More
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex h-72 items-center justify-center rounded-3xl bg-neutral-1 p-4 md:h-96">
                    <img alt="" className="max-h-40 object-contain" src={imgVector2} />
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
          <h2 className="text-center text-2xl font-medium text-primary-800 md:text-4xl lg:text-5xl">
            The Platform for Interactive Storytelling
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-lg text-primary-600 md:text-2xl lg:text-5xl">
            Libell.us is a creative platform where creators
            <br className="hidden md:block" />
            can build interactive stories with:
          </p>
          <div className="mx-auto mt-12 max-w-4xl">
            <img alt="" className="w-full" src={imgLine4} />
            <div className="flex flex-wrap justify-center gap-6 border-b-2 border-primary-800 pt-4 md:gap-12">
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
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl bg-neutral-2"
              >
                <div className="flex aspect-square items-center justify-center p-4">
                  <img alt="" className="max-h-24 object-contain" src={imgVuesaxBoldGallery} />
                </div>
                <p className="p-4 text-center text-primary-600">Image-{i}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-lg bg-white px-8 py-4 text-xl text-primary-600"
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
          <h2 className="text-center text-2xl font-medium text-neutral-10 md:text-4xl lg:text-5xl">
            Explore stories created with Libell.us
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-lg text-neutral-7 md:text-2xl lg:text-5xl">
            From fantasy adventures and children's books to sci-fi interactive stories.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-72 items-center justify-center rounded-3xl bg-neutral-1 p-6 md:h-96"
              >
                <img alt="" className="max-h-40 object-contain" src={imgVector1} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-lg border-2 border-primary-800 bg-white px-8 py-4 text-xl text-primary-600"
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
