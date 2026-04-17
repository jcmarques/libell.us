import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/brand-assets';
import { FEATURES_TEAL_FILTER, FEATURES_UI, homeHash, type Language } from './FeaturesPage';

const INLINE_LINK =
  'font-normal text-features-accent underline decoration-features-accent/40 underline-offset-2 transition-colors hover:text-features-accent-dim';

/** LibellLanding-style width/centering; light hairline for contrast on dark `bg-features-card`. */
function SectionDivider() {
  return <div className="mx-auto h-px w-full max-w-[16rem] bg-white/30" aria-hidden />;
}

/** Document title block — same teal headline treatment as FeatureCard titles. */
function DocHeading() {
  return (
    <div className="border-b border-features-card-border/40 pb-8 pt-2">
      <h1
        className={`text-center text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl ${FEATURES_TEAL_FILTER}`}
      >
        Privacy Notice v1.0
      </h1>
      <p className="mt-8 text-center text-base font-medium leading-snug text-features-muted md:text-lg">
        Effective Date: April 13, 2026
      </p>
    </div>
  );
}

/** Same teal tint as FeatureCard &lt;h2&gt;, left-aligned for long-form legal text. */
function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className={`scroll-mt-28 mb-4 text-left text-lg font-medium leading-snug text-black md:text-xl ${FEATURES_TEAL_FILTER}`}
    >
      {children}
    </h2>
  );
}

function SubsectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-base font-normal leading-snug tracking-tight text-features-accent md:text-lg">{children}</h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-features-muted md:text-[17px] md:leading-[1.7]">{children}</p>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

export function PrivacyPage() {
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
              <Link
                to="/features"
                className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg"
              >
                {t.features}
              </Link>
              <Link to="/pricing" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.pricing}
              </Link>
              <Link to="/about" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.about}
              </Link>
              <button
                type="button"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </button>
              {languageSelect('privacy-language-desktop', 'ml-1')}
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              {languageSelect('privacy-language-mobile-header')}
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
              <Link
                to="/pricing"
                className="w-full text-lg font-medium text-white hover:text-white/80"
                onClick={closeMobileMenu}
              >
                {t.pricing}
              </Link>
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

        <section
          id="privacy-content"
          className="scroll-mt-24 bg-features-bar px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <article className="flex flex-col rounded-3xl border border-features-card-border/40 bg-features-card p-6 shadow-lg shadow-black/30 md:p-8 lg:py-10 lg:px-8 xl:px-12 2xl:px-14">
              <DocHeading />

              <div className="mt-10 flex flex-col gap-10">
              <section aria-labelledby="intro">
                <SectionTitle id="intro">Introduction</SectionTitle>
                <P>
                  Welcome to libell.us! This Privacy Notice explains how LIBELL US PUBLISHING LLC (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information about you when you use our
                  website, mobile applications, services, and tools (collectively, our &quot;Services&quot;).
                </P>
                <P>
                  By using our Services, you agree to the collection and use of information in accordance with this
                  policy.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="collect">
                <SectionTitle id="collect">1. Information We Collect</SectionTitle>
                <P>We collect information in a few different ways to provide, improve, and secure our Services.</P>

                <SubsectionTitle>A. Information You Provide to Us</SubsectionTitle>
                <P>
                  <Strong>Account Information:</Strong> When you create an account, we use Firebase Authentication to
                  facilitate Single Sign-On (SSO) via Google and Apple across all platforms, and additionally via
                  Microsoft on our web application. We capture basic public profile data provided by these services,
                  including your display name, email address, and email verification status. Users may also optionally
                  provide a pen name. Note: We do not store your profile picture.
                </P>
                <P>
                  <Strong>User Content:</Strong> We collect and store the books, text inputs, character traits, location
                  ambiance details, uploaded reference images, and any other content you create or share on our platform
                  (&quot;User Content&quot;).
                </P>
                <P>
                  <Strong>Support Inputs:</Strong> If you contact us directly for support, we capture a structured reason
                  for contact and the detailed text description of your issue.
                </P>
                <P>
                  <Strong>Payment Information:</Strong> To process your membership subscription, we use a third-party
                  payment processor, Stripe. When initiating a checkout, we pass your mapped display name, email, internal
                  user ID, and the targeted price ID. We store the raw Stripe Invoice JSON object for tracking history
                  (which may contain generic billing details like the last 4 digits of a card). We strictly do not process
                  or store raw credit card numbers (PANs) or CVVs.
                </P>

                <SubsectionTitle>B. Information We Collect Automatically</SubsectionTitle>
                <P>
                  <Strong>Cookies and Local Storage:</Strong> We use local storage mechanisms (such as browser
                  &quot;localStorage&quot; and occasionally Cookies) to operate our Site and Service. This includes
                  Session Data (to keep you signed in), Preference Data (to remember your local UI settings, such as dark
                  mode, font sizes, UI tooltips, and AI voice configurations without systematically transmitting them to
                  our backend), and Security Data (to protect against unauthorized access).
                </P>
                <P>
                  <Strong>Application Telemetry &amp; Usage Data:</Strong> We automatically track application usage to
                  monitor health and feature engagement. This includes screen views, textual search queries, app opens, UI
                  tap events, API request/error statuses, and reading progress (e.g., saving bookmarks or rating books).
                </P>
                <P>
                  <Strong>Device Context (Mobile):</Strong> Requests originating from our mobile application transmit a
                  secure header containing hardware and OS context. This includes your OS version, device model name,
                  computer name, processor count, and application package details.
                </P>
                <P>
                  <Strong>Locale:</Strong> We safely collect the device&apos;s locale and language codes to format content
                  correctly.
                </P>
                <P>
                  <Strong>Security Tokens:</Strong> We collect and transmit Firebase AppCheck tokens to validate that
                  requests originate from legitimate, untampered app instances.
                </P>
                <P>
                  <Strong>Network Identifiers &amp; Logs:</Strong> Web traffic logging captures system-identifiable data
                  such as IP addresses, hostnames, and request paths.
                </P>
                <P>
                  <Strong>&quot;Do Not Track&quot; Signals:</Strong> Currently, our Service does not respond to &quot;Do
                  Not Track&quot; (DNT) signals from web browsers.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="use">
                <SectionTitle id="use">2. How We Use Your Information</SectionTitle>
                <P>We use the information we collect for the following technical and operational purposes:</P>
                <P>
                  <Strong>Authentication &amp; Identity:</Strong> To identify you, authorize API calls, and manage
                  feature waitlists using your primary profile data.
                </P>
                <P>
                  <Strong>Core Service Functionality:</Strong> To execute AI generation features by transmitting your User
                  Content (narrative prompts, story structures, and reference images) directly to external vision and text
                  models.
                </P>
                <P>
                  <Strong>AI Training &amp; Third-Party Models:</Strong> We do not explicitly use your private manuscripts
                  or User Content to train our own foundational AI models. However, we utilize public models and APIs
                  provided by third parties (including Google, AWS, Microsoft, and OpenAI). We are not responsible for how
                  these third-party models are trained, structured, or how they internally process data.
                </P>
                <P>
                  <Strong>Diagnostics &amp; Security:</Strong> To bundle detailed device payloads with bug reports to
                  diagnose issues, and to utilize rules engines that block or allow devices based on internal security
                  policies.
                </P>
                <P>
                  <Strong>Commerce &amp; Entitlements:</Strong> To process real-time webhook events that update your
                  membership state, manage subscription statuses, and enforce usage limits for AI text, image, and audio
                  generation.
                </P>
                <P>
                  <Strong>Platform Health:</Strong> To monitor and analyze usage patterns without systematically piping
                  explicit personally identifiable information into analytics engines.
                </P>
                <P>
                  <Strong>Communication:</Strong> To respond to support requests and send service-related announcements.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="storage">
                <SectionTitle id="storage">3. Data Storage, Retention, &amp; Logs</SectionTitle>
                <P>
                  <Strong>Database Storage:</Strong> Our database maintains a user collection keyed by a unique ID. This
                  stores profile metadata, Stripe customer IDs, membership states, and nested usage limits. Transactional
                  storage retains historical orders and raw invoices. Mobile diagnostics submitted via issue reports are
                  permanently saved and mapped to your user ID.
                </P>
                <P>
                  <Strong>Data Retention:</Strong> We retain your personal data and User Content for as long as your
                  account is active. If your subscription lapses, we may retain your inactive account data for up to six
                  (6) months before securely deleting it, unless you request earlier deletion.
                </P>
                <P>
                  <Strong>System Logs:</Strong> Our backend employs native loggers to capture incoming requests,
                  authentication errors, and system states. During payment processing, Stripe Customer IDs and Invoice IDs
                  are logged in cleartext. In debugging environments, detailed device payloads and generative AI prompts may
                  be temporarily recorded to system output streams.
                </P>
                <P>
                  <Strong>Right to Erasure:</Strong> Our database architecture allows for the recursive purging of your
                  personal data and User Content associated with your specific user ID upon account deletion.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="share">
                <SectionTitle id="share">4. How We Share Your Information</SectionTitle>
                <P>
                  Your trust is important to us. We do not sell or share your personal information for cross-context
                  behavioral advertising. We only share your information with service providers that perform necessary
                  tasks on our behalf:
                </P>
                <P>
                  <Strong>Google Firebase:</Strong> Processes our core authentication tokens, hosts our primary databases,
                  and validates device legitimacy via AppCheck.
                </P>
                <P>
                  <Strong>Google Analytics:</Strong> Processes application telemetry, custom engagement events, and
                  navigation states. You can learn more about how Google uses your data at their{' '}
                  <a className={INLINE_LINK} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Privacy &amp; Terms
                  </a>{' '}
                  page and opt out by using the{' '}
                  <a className={INLINE_LINK} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </P>
                <P>
                  <Strong>Stripe:</Strong> Acts as our exclusive payment processor, receiving names, emails, and internal
                  IDs to handle transactions and synchronize subscriptions. You can learn more about how Stripe handles
                  data at their{' '}
                  <a className={INLINE_LINK} href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                    Privacy Center
                  </a>
                  .
                </P>
                <P>
                  <Strong>Generative AI Providers:</Strong> Full user narrative prompts, story structures, and reference
                  images are forwarded to Google GenAI (Vertex AI &amp; Text-to-Speech), AWS Bedrock, and Azure OpenAI /
                  OpenAI to fulfill your content generation requests.
                </P>
                <P>
                  <Strong>Apple:</Strong> We verify signatures against Apple JWKS repositories during account deletion
                  workflows.
                </P>
                <P>
                  These providers are given access to your information only to perform these tasks on our behalf and are
                  obligated not to disclose or use it for any other purpose.
                </P>

                <SubsectionTitle>Legal Disclosure &amp; Protection of Rights</SubsectionTitle>
                <P>
                  We may also disclose your personal information in the good faith belief that such action is necessary
                  to:
                </P>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-features-muted marker:text-features-accent-dim/50 md:text-[17px] md:leading-[1.7]">
                  <li>Comply with a legal obligation or valid request by public authorities.</li>
                  <li>Protect and defend the rights or property of LIBELL US PUBLISHING LLC.</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
                  <li>Protect the personal safety of users of the Service or the public.</li>
                  <li>Protect against legal liability.</li>
                </ul>
              </section>
              <SectionDivider />
              <section aria-labelledby="international">
                <SectionTitle id="international">5. International Data Transfers</SectionTitle>
                <P>
                  Our primary hosting infrastructure is located in the United States. If you access our Service from the
                  European Union, the United Kingdom, or other regions with laws governing data collection and use, please
                  note that your personal data is transferred to, stored, and processed in the United States. By using our
                  Service, you consent to this transfer, understanding that the United States may have data protection laws
                  that differ from those in your jurisdiction.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="rights">
                <SectionTitle id="rights">6. Your Data Rights and Choices</SectionTitle>
                <P>
                  You have certain rights regarding the personal information we hold about you. You can access and update
                  your account information at any time through your profile settings. You may also request the complete
                  deletion of your account and associated personal data (Right to Erasure) by contacting us or utilizing
                  in-app deletion tools.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="security">
                <SectionTitle id="security">7. Data Security</SectionTitle>
                <P>
                  We implement reasonable security measures designed to protect your information from unauthorized access,
                  use, or disclosure. However, please be aware that no method of transmission over the Internet or method
                  of electronic storage is 100% secure.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="children">
                <SectionTitle id="children">8. Children&apos;s Privacy</SectionTitle>
                <P>
                  Our Service is not intended for use by anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from children under 13. If you become aware that a child has provided us with
                  personal data, please contact us so we can take steps to remove that information.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="changes">
                <SectionTitle id="changes">9. Changes to This Privacy Notice</SectionTitle>
                <P>
                  We may update our Privacy Notice from time to time. We will notify you of any changes by posting the new
                  Privacy Notice on this page and updating the &quot;Effective Date.&quot;
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="links">
                <SectionTitle id="links">10. Links to Other Sites</SectionTitle>
                <P>
                  Our Service may contain links to other sites that are not operated by us. If you click on a third-party
                  link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy
                  Policy of every site you visit. We have no control over and assume no responsibility for the content,
                  privacy policies, or practices of any third-party sites or services.
                </P>
              </section>
              <SectionDivider />
              <section aria-labelledby="contact">
                <SectionTitle id="contact">11. Contact Us</SectionTitle>
                <P>If you have any questions about this Privacy Notice, please contact us at:</P>
                <P>
                  <Strong>Email:</Strong>{' '}
                  <a className={INLINE_LINK} href="mailto:support@libell.us">
                    support@libell.us
                  </a>
                </P>
                <P>
                  <Strong>Mail:</Strong> LIBELL US PUBLISHING LLC, 4926 Emilee Grace Ln, St. Cloud, Florida, 34771
                </P>
              </section>
            </div>
            </article>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <Link to="/" className="flex items-center gap-2">
              <img alt="" className="size-9 object-contain brightness-0 invert" src={imgLogo} />
              <span className="text-xl font-bold text-white">Libell.us</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 text-sm md:gap-8 md:text-base">
              <Link to="/features" className="text-sm sm:text-base lg:text-lg">
                {t.features}
              </Link>
              <Link to="/about">{t.about}</Link>
              <a href={homeHash('contact')}>{t.footerContact}</a>
              <Link
                to="/privacy"
                aria-current="page"
                className="font-normal !text-features-accent transition-colors hover:!text-features-accent-dim text-sm sm:text-base lg:text-lg"
              >
                {t.footerPrivacy}
              </Link>
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
