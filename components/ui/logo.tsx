import { images } from "@/lib/images";

export const LOGO_WIDTH = 1224;
export const LOGO_HEIGHT = 1200;

type LogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Logo({
  className = "h-auto w-[78px] object-contain md:w-[100px]",
  priority = false,
  sizes = "(max-width: 768px) 78px, 100px",
}: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={images.logo}
      alt="Coastal & Country Paradise"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{ background: "transparent", mixBlendMode: "normal" }}
    />
  );
}
