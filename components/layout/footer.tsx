export function Footer() {
  return (
    <footer id="contact" className="border-t border-deep-black/5 bg-ivory">
      <div className="mx-auto max-w-[92rem] px-7 py-28 text-center sm:px-10 md:px-16 md:py-36 lg:px-24">
        <p className="font-serif text-2xl font-light tracking-tight text-deep-black md:text-3xl">
          Coastal & Country Paradise
        </p>

        <div className="mt-14 space-y-3 text-[15px] font-light leading-relaxed text-luxury-muted">
          <p>
            <a
              href="tel:8133349234"
              className="transition-colors duration-500 hover:text-deep-black"
            >
              813-334-9234
            </a>
          </p>
          <p>
            <a
              href="tel:7272077927"
              className="transition-colors duration-500 hover:text-deep-black"
            >
              727-207-7927
            </a>
          </p>
          <p>
            <a
            href="mailto:coastalandcountryparadise@gmail.com"
            className="transition-colors duration-500 hover:text-deep-black"
          >
            coastalandcountryparadise@gmail.com
            </a>
          </p>
        </div>

        <p className="mt-20 text-[8px] font-light uppercase tracking-[0.35em] text-luxury-muted/60">
          © {new Date().getFullYear()} Coastal & Country Paradise
        </p>
      </div>
    </footer>
  );
}
