import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imgLogo } from '../assets/brand-assets';
import { FEATURES_UI, homeHash, type Language } from './FeaturesPage';

const BETA_COPY: Record<
  Language,
  {
    pageTitle: string;
    headline: string;
    sub: string;
    cardTitle: string;
    cardLines: string[];
    ctaHome: string;
    ctaFeatures: string;
  }
> = {
  'en-US': {
    pageTitle: 'Beta waitlist — Libell.us',
    headline: "You're on the list",
    sub: 'Thanks for joining the Libell.us beta waitlist. We will email you when it is time for early access—no spam, just the essentials.',
    cardTitle: 'What happens next',
    cardLines: [
      'We will confirm your spot and share timing as invites roll out.',
      'You can explore the site anytime while you wait.',
      'Questions? Use Contact from the footer and we will get back to you.',
    ],
    ctaHome: 'Back to home',
    ctaFeatures: 'See features',
  },
  'pt-BR': {
    pageTitle: 'Lista de espera do beta — Libell.us',
    headline: 'Você está na lista',
    sub: 'Obrigado por entrar na lista de espera do beta Libell.us. Enviaremos um e-mail quando for a hora do acesso antecipado—sem spam, só o necessário.',
    cardTitle: 'O que vem a seguir',
    cardLines: [
      'Confirmaremos sua vaga e avisaremos conforme os convites forem saindo.',
      'Enquanto isso, você pode explorar o site quando quiser.',
      'Dúvidas? Use Fale conosco no rodapé que respondemos.',
    ],
    ctaHome: 'Voltar ao início',
    ctaFeatures: 'Ver recursos',
  },
};

export function BetaWaitlistPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en-US';
    const saved = window.localStorage.getItem('libell-language');
    return saved === 'pt-BR' ? 'pt-BR' : 'en-US';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = FEATURES_UI[language];
  const c = BETA_COPY[language];

  useEffect(() => {
    document.title = c.pageTitle;
    return () => {
      document.title = 'Libell.us';
    };
  }, [c.pageTitle]);

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
      <div className="flex min-h-screen w-full flex-col">
        <header className="relative z-20 shrink-0 border-b border-features-bar-border bg-features-bar px-6 md:px-10 lg:px-16 xl:px-28 2xl:px-36">
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
              <button
                type="button"
                className="whitespace-nowrap rounded-2xl border-2 border-features-accent/80 bg-features-accent px-4 py-2.5 text-sm font-medium text-features-bar hover:bg-features-accent-dim sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-base"
              >
                {t.login}
              </button>
              {languageSelect('beta-language-desktop', 'ml-1')}
            </nav>

            <div className="flex items-center gap-2 sm:hidden">
              {languageSelect('beta-language-mobile-header')}
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

        <main className="relative flex flex-1 flex-col bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.12),transparent_55%)]" aria-hidden />
          <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-28 2xl:px-36">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
              <div
                className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-features-accent/35 bg-features-accent/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:size-20"
                aria-hidden
              >
                <i className="fa-solid fa-circle-check text-3xl text-features-accent sm:text-4xl" />
              </div>
              <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
                {c.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-features-muted md:text-lg">{c.sub}</p>

              <div className="mt-10 w-full max-w-md rounded-2xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:max-w-lg md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-features-accent/90">{c.cardTitle}</p>
                <ul className="mt-5 space-y-3 text-left text-sm leading-relaxed text-white/85 md:text-base">
                  {c.cardLines.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-features-accent/80" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-features-accent/80 bg-features-accent px-6 py-3 text-center text-sm font-medium text-features-bar transition-colors hover:bg-features-accent-dim sm:px-8 sm:text-base"
                >
                  {c.ctaHome}
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 sm:px-8 sm:text-base"
                >
                  {c.ctaFeatures}
                </Link>
              </div>
            </div>
          </div>
        </main>

        <footer className="shrink-0 border-t border-white/10 bg-black px-6 py-8 md:px-10 md:py-10 lg:px-16 xl:px-28 2xl:px-36">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <img alt="" className="size-9 object-contain brightness-0 invert" src={imgLogo} />
              <span className="text-xl font-bold text-white">Libell.us</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 text-sm md:gap-8 md:text-base">
              <Link
                to="/features"
                className="font-medium !text-features-accent transition-colors hover:!text-features-accent-dim text-sm sm:text-base lg:text-lg"
              >
                {t.features}
              </Link>
              <Link to="/about">{t.about}</Link>
              <a href={homeHash('contact')}>{t.footerContact}</a>
              <Link to="/privacy">{t.footerPrivacy}</Link>
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
