import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const links = [
  { label: "The Estate", href: "#estate" },
  { label: "The Fleet", href: "#fleet" },
  { label: "Corvette", href: "#corvette" },
  { label: "G-Wagon", href: "#gwagon" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#book" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-deep-black/6 bg-ivory">
      <div className="mx-auto max-w-[90rem] px-8 py-28 md:px-16 md:py-36 lg:px-24">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="#" className="relative block h-20 w-56 md:h-24 md:w-64">
              <Image
                src={images.logo}
                alt="Coastal & Country Paradise"
                fill
                sizes="256px"
                quality={95}
                className="object-contain object-left brightness-0"
              />
            </Link>

            <p className="mt-12 font-serif text-2xl font-light leading-snug text-deep-black md:text-3xl">
              Coastal & Country Paradise
            </p>

            <div className="mt-10 space-y-2 text-sm font-light leading-relaxed text-luxury-muted">
              <p>
                <a
                  href="tel:8133349234"
                  className="transition-colors duration-300 hover:text-deep-black"
                >
                  813-334-9234
                </a>
              </p>
              <p>
                <a
                  href="tel:7272077927"
                  className="transition-colors duration-300 hover:text-deep-black"
                >
                  727-207-7927
                </a>
              </p>
              <p>
                <a
                  href="mailto:coastalandcountryparadise@gmail.com"
                  className="transition-colors duration-300 hover:text-deep-black"
                >
                  coastalandcountryparadise@gmail.com
                </a>
              </p>
            </div>
          </div>

          <nav>
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-champagne-dark">
              Explore
            </p>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-luxury-muted transition-colors duration-500 hover:text-deep-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-deep-black/6 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-light uppercase tracking-[0.25em] text-luxury-muted">
            © {new Date().getFullYear()} Coastal & Country Paradise
          </p>
          <p className="text-[10px] font-light uppercase tracking-[0.25em] text-luxury-muted">
            A private luxury lifestyle experience
          </p>
        </div>
      </div>
    </footer>
  );
}
