import { imgVector } from '../assets/figma-assets';

interface PlaceholderImageProps {
  className?: string;
}

export function PlaceholderImage({ className }: PlaceholderImageProps) {
  return (
    <div
      className={
        className ??
        'flex size-[400px] items-center justify-center rounded-3xl bg-neutral-1 p-2.5'
      }
    >
      <div className="relative size-24 shrink-0">
        <img alt="" className="absolute size-full max-w-none object-contain" src={imgVector} />
      </div>
    </div>
  );
}
