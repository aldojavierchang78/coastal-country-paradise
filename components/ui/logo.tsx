import Image from "next/image";
import { images } from "@/lib/images";

export const LOGO_WIDTH = 1224;
export const LOGO_HEIGHT = 1200;

type LogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Logo({
  className = "h-auto w-[78px] bg-transparent object-contain md:w-[100px]",
  priority = false,
  sizes = "(max-width: 768px) 78px, 100px",
}: LogoProps) {
  return (
    <Image
      src={images.logo}
      alt="Coastal & Country Paradise"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      sizes={sizes}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
