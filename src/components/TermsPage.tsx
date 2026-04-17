import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/brand-assets';
import { FEATURES_TEAL_FILTER, FEATURES_UI, homeHash, type Language } from './FeaturesPage';

const INLINE_LINK =
  'font-normal text-features-accent underline decoration-features-accent/40 underline-offset-2 transition-colors hover:text-features-accent-dim';

function SectionDivider() {
  return <div className="mx-auto h-px w-full max-w-[16rem] bg-white/30" aria-hidden />;
}

function DocHeading() {
  return (
    <div className="border-b border-features-card-border/40 pb-8 pt-2">
      <h1
        className={`text-center text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl ${FEATURES_TEAL_FILTER}`}
      >
        Terms of Service v1.0
      </h1>
      <p className="mt-8 text-center text-base font-medium leading-snug text-features-muted md:text-lg">
        Effective Date: April 13, 2026
      </p>
    </div>
  );
}

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

export function TermsPage() {
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
        <header className="relative z-20 border-b border-features-bar-border bg-features-bar px-6 md:px-10 lg:px-16 xl:px-28 2xl:px-36">
          <div className="mx-auto flex h-20 min-h-[4rem] w-full max-w-7xl items-center justify-between py-3 sm:h-24">
            <Link
              to="/"
              className="flex shrink-0 flex-nowrap items-center gap-2 sm:gap-3"
              onClick={closeMobileMenu}
            >
              <img
                alt="Libell.us logomark"
                className="size-10 shrink-0 object-contain brightness-0 invert sm:size-12"
                src={imgLogo}
              />
              <span className="whitespace-nowrap font-sans text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                Libell.us
              </span>
            </Link>

            <nav className="hidden items-center gap-3 sm:flex sm:gap-4 lg:gap-6">
              <Link to="/features" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.features}
              </Link>
              <Link to="/pricing" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.pricing}
              </Link>
              <Link to="/about" className="text-sm text-white/90 hover:text-white sm:text-base lg:text-lg">
                {t.about}
              </Link>
              <Link
                to="/login"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </Link>
              {languageSelect('terms-language-desktop', 'ml-1')}
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              {languageSelect('terms-language-mobile-header')}
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
            className="fixed left-0 right-0 top-20 z-50 border-b border-features-bar-border bg-features-bar px-6 py-6 shadow-lg sm:hidden"
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
              <Link
                to="/login"
                className="w-full max-w-xs rounded-2xl border-2 border-features-accent/80 bg-features-accent py-3 text-center text-base font-medium text-features-bar hover:bg-features-accent-dim"
                onClick={closeMobileMenu}
              >
                {t.login}
              </Link>
            </nav>
          </div>
        )}

        <section
          id="terms-content"
          className="scroll-mt-24 bg-features-bar px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-28 2xl:px-36"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <article className="flex flex-col rounded-3xl border border-features-card-border/40 bg-features-card p-6 shadow-lg shadow-black/30 md:p-8 lg:py-10 lg:px-8 xl:px-12 2xl:px-14">
              <DocHeading />

              <div className="mt-10 flex flex-col gap-10">
                <section aria-labelledby="acceptance">
                  <SectionTitle id="acceptance">1. Acceptance of Terms</SectionTitle>
                  <P>
                    Welcome to libell.us. By creating an account, accessing, or using the services provided by LIBELL US
                    PUBLISHING LLC (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;libell.us&quot;), you agree to
                    be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, do
                    not use our Services.
                  </P>
                  <SubsectionTitle>A. Age and Eligibility</SubsectionTitle>
                  <P>
                    You must be at least 13 years of age to use the Service. By agreeing to these Terms, you represent
                    and warrant to us that you are at least 13 years old and possess the legal capacity to enter into a
                    binding agreement.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="beta">
                  <SectionTitle id="beta">2. Special Terms for Beta Testing (Closed Beta Addendum)</SectionTitle>
                  <P>
                    If you are accessing the Service as part of a closed beta, early access, or testing program (the
                    &quot;Beta Service&quot;), the following additional terms apply and supersede any conflicting terms
                    in the remainder of this agreement.
                  </P>
                  <p className="mt-4 text-base italic leading-relaxed text-features-muted md:text-[17px] md:leading-[1.7]">
                    Disclaimer: I am an AI, not an attorney. This draft incorporates standard SaaS best practices for
                    beta software, but you should have your legal counsel review this to ensure it is fully enforceable.
                  </p>
                  <SubsectionTitle>A. Nature of the Beta Service and Data Wipes</SubsectionTitle>
                  <P>
                    You acknowledge and agree that the Beta Service is a pre-release version, is experimental in nature,
                    and may not operate correctly. The Beta Service is provided strictly &quot;AS IS&quot; and may contain
                    bugs, errors, or other defects that could cause platform instability, system failures, or data loss.
                    Furthermore, we reserve the right, at our sole discretion, to modify, reset, or completely wipe any
                    data, user accounts, and User Content generated during the Beta phase prior to our general public
                    release. You are strongly advised to keep independent backups of all User Content.
                  </P>
                  <SubsectionTitle>B. Confidentiality</SubsectionTitle>
                  <P>
                    The Beta Service, including its features, user interface, design, AI integrations, performance
                    metrics, and any related communications, constitutes the confidential and proprietary information of
                    LIBELL US PUBLISHING LLC. You agree to hold this information in strict confidence and not to disclose,
                    share screenshots, record videos, or publicly discuss the Beta Service with any third party without
                    our prior written, explicit consent.
                  </P>
                  <SubsectionTitle>C. Feedback Assignment</SubsectionTitle>
                  <P>
                    We welcome and encourage you to provide feedback, bug reports, suggestions, or ideas regarding the
                    Beta Service (&quot;Feedback&quot;). By submitting Feedback, you acknowledge and agree that such
                    Feedback is given voluntarily. You hereby assign to LIBELL US PUBLISHING LLC all right, title, and
                    interest in and to such Feedback, and we are free to use, implement, modify, or distribute it for any
                    purpose, without any obligation, restriction, or compensation to you.
                  </P>
                  <SubsectionTitle>D. Limited Duration and Termination</SubsectionTitle>
                  <P>
                    Access to the Beta Service is a privilege granted at our sole discretion. We reserve the right to
                    suspend, limit, or completely terminate your access to the Beta Service at any time, for any reason,
                    without notice or liability to you. The Beta Service program may be discontinued or transitioned to a
                    commercial release at any time.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="service">
                  <SectionTitle id="service">3. Description of Service</SectionTitle>
                  <P>
                    libell.us provides a web-based platform and associated mobile applications that allow users
                    (&quot;you&quot;) to author, manage, and publish digital books. The Services include tools for writing
                    text, uploading images, and generating creative content (such as text, images, and audio narration)
                    via third-party artificial intelligence providers (collectively, &quot;AI Tools&quot;).
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="accounts">
                  <SectionTitle id="accounts">4. User Accounts &amp; Subscriptions</SectionTitle>
                  <P>
                    <Strong>Account Creation:</Strong> You must register for an account to access the authoring features
                    of the Service. You are responsible for maintaining the confidentiality of your account credentials.
                  </P>
                  <P>
                    <Strong>Subscriptions:</Strong> Access to our authoring tools is provided exclusively on a paid
                    subscription basis; there is no free tier. Your subscription grants you a specific number of monthly
                    credits for text, image, and audio generation using our AI Tools.
                  </P>
                  <P>
                    <Strong>Monthly Credits:</Strong> Your AI generation credits are refilled at the beginning of each
                    billing cycle. Unused credits do not roll over to the next cycle and are forfeited at the end of the
                    billing period.
                  </P>
                  <P>
                    <Strong>Failed Payments and Lapsed Accounts:</Strong> If a payment fails, your membership limits will
                    not refresh, and you will lose access to the platform&apos;s authoring and management tools until the
                    payment issue is resolved. We do not immediately delete your data. Lapsed accounts will retain their
                    data for up to six (6) months. After this 6-month period, the account will be tagged as inactive and
                    the associated data may be deleted at any time without further notice. Note: Books that you have
                    already published are never removed from publication automatically due to a lapsed account.
                  </P>
                  <P>
                    <Strong>Account Termination by User:</Strong> You may explicitly delete your account at any time
                    through your account settings. Deleting your account will permanently remove all your account data,
                    manuscripts, and files from the creator console and our database. Deleting your account does not
                    automatically unpublish books that are already live in the mobile app. If you wish to remove your
                    published books from public access, you must manually unpublish them via the editor console before
                    deleting your account.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="payments">
                  <SectionTitle id="payments">5. Payments and Refunds</SectionTitle>
                  <P>
                    <Strong>Billing:</Strong> We use third-party payment processors (such as Stripe) to handle all
                    subscription payments.
                  </P>
                  <P>
                    <Strong>Refund Policy:</Strong> You are eligible for a full refund within seven (7) days of your
                    initial purchase, provided that zero (0) AI credits have been utilized. If any AI credits have been
                    consumed, you are no longer eligible for a refund.
                  </P>
                  <P>
                    <Strong>Exceptions:</Strong> No refunds will be provided for accounts suspended or terminated due to
                    a violation of these Terms.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="ownership">
                  <SectionTitle id="ownership">6. Content Ownership and License</SectionTitle>
                  <P>
                    <Strong>Your Content Ownership:</Strong> You retain all ownership rights to the original content you
                    create and upload to the Service, including text and images you personally created (&quot;User
                    Content&quot;).
                  </P>
                  <P>
                    <Strong>AI-Generated Content:</Strong> libell.us claims no ownership over AI-generated outputs. You
                    acknowledge that the copyrightability of AI-generated content is an evolving area of law, and you
                    assume all risks associated with the commercial use, publication, or copyright registration of such
                    content.
                  </P>
                  <P>
                    <Strong>AI Training Disclaimer:</Strong> We respect your creative privacy. We do not explicitly use
                    your private manuscripts or User Content to train our foundational AI models.
                  </P>
                  <P>
                    <Strong>License Grant to libell.us:</Strong> To allow us to operate the Service, you grant libell.us a
                    worldwide, non-exclusive, royalty-free license to host, display, modify (for technical purposes like
                    formatting), and distribute your User Content through the platform. This license is for the sole
                    purpose of providing, operating, and improving the Service.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="conduct">
                  <SectionTitle id="conduct">7. User Responsibilities and Conduct</SectionTitle>
                  <P>
                    <Strong>Responsibility for Content:</Strong> You are solely responsible for all User Content you
                    create, upload, and publish on libell.us. You represent and warrant that you have all necessary rights
                    to upload your content and that it does not violate any third-party rights or any applicable laws.
                  </P>
                  <P>
                    <Strong>Compliance with Laws:</Strong> You agree to comply with all local laws and regulations
                    regarding the content you create and publish.
                  </P>
                  <P>
                    <Strong>Acceptable Use Policy:</Strong> You agree not to create, upload, or generate any content that:
                  </P>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-features-muted marker:text-features-accent-dim/50 md:text-[17px] md:leading-[1.7]">
                    <li>
                      <Strong>Is Sexually Explicit:</Strong> We have a zero-tolerance policy for sexually explicit
                      material.
                    </li>
                    <li>
                      <Strong>Is Abusive or Violent:</Strong> Content that is harassing, hateful, threatening, or depicts
                      dangerous or gratuitously violent acts is strictly prohibited.
                    </li>
                    <li>
                      <Strong>Bypasses Safety Filters:</Strong> You are expressly forbidden from attempting to circumvent
                      the safety filters we or our third-party AI providers have in place.
                    </li>
                  </ul>
                </section>
                <SectionDivider />
                <section aria-labelledby="moderation">
                  <SectionTitle id="moderation">8. Content Moderation and Enforcement</SectionTitle>
                  <P>
                    <Strong>Our Rights:</Strong> We reserve the right, at our sole discretion, to remove content,
                    unpublish books, or suspend or terminate your account at any time and without notice if we believe you
                    have violated these Terms.
                  </P>
                  <P>
                    <Strong>Zero Tolerance:</Strong> Violations of our Acceptable Use Policy will result in immediate
                    action, which may include permanent account suspension. No refunds will be issued for accounts
                    terminated for cause.
                  </P>
                  <SubsectionTitle>A. Copyright Complaints and DMCA Policy</SubsectionTitle>
                  <P>
                    If you believe that any User Content infringes upon your copyright, please submit a formal
                    notification pursuant to the Digital Millennium Copyright Act (DMCA) to our designated Copyright Agent
                    at:
                  </P>
                  <p className="mt-4 text-base leading-relaxed text-features-muted md:text-[17px] md:leading-[1.7]">
                    LIBELL US PUBLISHING LLC
                    <br />
                    Attn: Copyright Agent
                    <br />
                    4926 Emilee Grace Ln
                    <br />
                    St. Cloud, Florida, 34771
                    <br />
                    Email:{' '}
                    <a className={INLINE_LINK} href="mailto:support@libell.us">
                      support@libell.us
                    </a>
                  </p>
                  <P>
                    Your notice must include: (1) your physical or electronic signature; (2) identification of the
                    copyrighted work claimed to have been infringed; (3) identification of the material that is claimed to
                    be infringing and where it is located; (4) your contact information; and (5) a statement of good faith
                    belief that the use is not authorized by the copyright owner.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="support">
                  <SectionTitle id="support">9. Support</SectionTitle>
                  <P>
                    If you experience issues with the Service, you can create a support ticket. Our team will use
                    commercially reasonable, best efforts to respond to your inquiry and resolve the issue.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="governing">
                  <SectionTitle id="governing">10. Governing Law and Dispute Resolution</SectionTitle>
                  <P>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                    United States, without regard to its conflict of law provisions. You agree to submit to the personal
                    and exclusive jurisdiction of the state and federal courts located within Osceola County, Florida to
                    resolve any dispute or claim arising from these Terms.
                  </P>
                  <SubsectionTitle>A. Binding Arbitration and Class Action Waiver</SubsectionTitle>
                  <P>
                    PLEASE READ THIS SECTION CAREFULLY—IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS. You and LIBELL US
                    PUBLISHING LLC agree that any dispute, claim, or controversy arising out of or relating to these
                    Terms or the breach, termination, enforcement, interpretation, or validity thereof, shall be resolved
                    by binding arbitration, rather than in court. YOU AND LIBELL US PUBLISHING LLC AGREE THAT EACH MAY
                    BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
                    MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                  </P>
                  <SubsectionTitle>B. Severability</SubsectionTitle>
                  <P>
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                    changed and interpreted to accomplish the objectives of such provision to the greatest extent possible
                    under applicable law and the remaining provisions will continue in full force and effect.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="indemnification">
                  <SectionTitle id="indemnification">11. Indemnification</SectionTitle>
                  <P>
                    You agree to defend, indemnify, and hold harmless LIBELL US PUBLISHING LLC, its affiliates, and their
                    respective officers, directors, employees, and agents from and against any claims, liabilities,
                    damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in any
                    way connected with your access to or use of the Service or your violation of these Terms.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="disclaimers">
                  <SectionTitle id="disclaimers">12. DISCLAIMERS AND LIMITATION OF LIABILITY</SectionTitle>
                  <SubsectionTitle>A. DISCLAIMER OF WARRANTIES</SubsectionTitle>
                  <P>
                    THE SERVICE, INCLUDING ALL GENERATIVE AI FEATURES AND OUTPUTS, IS PROVIDED ON AN &quot;AS IS&quot; AND
                    &quot;AS AVAILABLE&quot; BASIS. LIBELL US PUBLISHING LLC MAKES NO WARRANTIES, EXPRESS OR IMPLIED,
                    INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED,
                    SECURE, OR ERROR-FREE, NOR DO WE GUARANTEE THE ACCURACY, UNIQUENESS, OR RELIABILITY OF ANY
                    AI-GENERATED CONTENT. YOU ARE SOLELY RESPONSIBLE FOR BACKING UP YOUR USER CONTENT AND MANUSCRIPTS.
                  </P>
                  <SubsectionTitle>B. LIMITATION OF LIABILITY</SubsectionTitle>
                  <P>
                    TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL LIBELL US PUBLISHING LLC, ITS DIRECTORS,
                    EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                    DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, RESULTING FROM YOUR
                    ACCESS TO OR USE OF (OR INABILITY TO USE) THE SERVICE.
                  </P>
                  <SubsectionTitle>C. LIABILITY CAP</SubsectionTitle>
                  <P>
                    IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE EXCEED THE GREATER OF
                    ONE HUNDRED U.S. DOLLARS ($100.00 USD) OR THE AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE (12)
                    MONTHS PRECEDING THE INCIDENT GIVING RISE TO THE CLAIM.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="changes-terms">
                  <SectionTitle id="changes-terms">13. Changes to Terms</SectionTitle>
                  <P>
                    We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on
                    this page and updating the &quot;Effective Date.&quot; Your continued use of the Service after such
                    changes constitutes your acceptance of the new Terms.
                  </P>
                </section>
                <SectionDivider />
                <section aria-labelledby="contact-terms">
                  <SectionTitle id="contact-terms">14. Contact Us</SectionTitle>
                  <P>If you have any questions about these Terms of Service, please contact us at:</P>
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
              <Link to="/privacy">{t.footerPrivacy}</Link>
              <Link
                to="/terms"
                aria-current="page"
                className="font-normal !text-features-accent transition-colors hover:!text-features-accent-dim text-sm sm:text-base lg:text-lg"
              >
                {t.footerTerms}
              </Link>
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
