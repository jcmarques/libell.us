import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

/** Must stay aligned with `Language` in `FeaturesPage.tsx`. */
export type LanguageCode = 'en-US' | 'pt-BR';

export const LANGUAGE_SELECT_CLASSNAME =
  'cursor-pointer rounded-lg border border-white/25 bg-white/5 px-2 py-1 text-lg leading-none text-white outline-none transition-colors hover:bg-white/10 sm:text-xl lg:text-2xl';

type Props = {
  id: string;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  wrapperClassName?: string;
};

/**
 * Custom language picker for all breakpoints (avoids native `<select>` OS modals).
 * Panel opens below the site header; backdrop covers the rest of the viewport.
 */
export function LanguageSelectControl({
  id,
  language,
  onLanguageChange,
  wrapperClassName,
}: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;
    const prevHtmlOverflow = html.style.overflow;
    // Hiding overflow removes the scrollbar and shifts layout; reserve that width.
    const gap = window.innerWidth - html.clientWidth;
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    if (gap > 0) {
      body.style.paddingRight = `${gap}px`;
    }
    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
      html.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  const pick = (value: LanguageCode) => {
    onLanguageChange(value);
    close();
  };

  const mount = typeof document !== 'undefined' ? document.body : null;

  return (
    <div className={wrapperClassName}>
      <button
        id={id}
        type="button"
        className={LANGUAGE_SELECT_CLASSNAME}
        onClick={() => setOpen(true)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language switcher"
      >
        {language === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
      </button>

      {open &&
        mount &&
        createPortal(
          <div className="fixed left-0 right-0 top-20 bottom-0 z-[200] sm:top-24">
            <button
              type="button"
              className="absolute inset-0 bg-black/50"
              aria-label="Close language menu"
              onClick={close}
            />
            <div
              className="relative z-10 ml-auto mr-6 mt-2 max-w-[min(100%,280px)] rounded-2xl border border-white/15 bg-features-bar px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)] sm:mr-10 sm:mt-3 md:mr-10 lg:mr-16 xl:mr-28 2xl:mr-36"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <p
                id={titleId}
                className="mb-1.5 text-center text-[0.65rem] font-medium uppercase tracking-wider text-white/50"
              >
                Language
              </p>
              <div
                role="listbox"
                className="mx-auto flex w-full max-w-[240px] flex-col gap-1 rounded-xl border border-white/15 bg-white/[0.06] p-1 sm:max-w-none"
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={language === 'en-US'}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-white transition-colors hover:bg-white/10 sm:py-2.5 sm:text-base"
                  onClick={() => pick('en-US')}
                >
                  <span className="text-base leading-none sm:text-lg" aria-hidden>
                    🇺🇸
                  </span>
                  <span className="font-medium">English</span>
                  {language === 'en-US' && (
                    <span className="ml-auto text-xs text-features-accent sm:text-sm" aria-hidden>
                      ✓
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  role="option"
                  aria-selected={language === 'pt-BR'}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-white transition-colors hover:bg-white/10 sm:py-2.5 sm:text-base"
                  onClick={() => pick('pt-BR')}
                >
                  <span className="text-base leading-none sm:text-lg" aria-hidden>
                    🇧🇷
                  </span>
                  <span className="font-medium">Português</span>
                  {language === 'pt-BR' && (
                    <span className="ml-auto text-xs text-features-accent sm:text-sm" aria-hidden>
                      ✓
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>,
          mount,
        )}
    </div>
  );
}
