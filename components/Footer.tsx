const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#e6ddd8] text-black">
      <div className="mx-auto w-[min(92%,1440px)]">
        {/* Top */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-16">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white font-[family-name:var(--font-editorial)] text-[24px] text-black"> 
                LO
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-editorial)] text-[28px] font-medium leading-none sm:text-[32px]">
                  Layla Oud
                </h3>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-black sm:text-[10px]">
                  Social Media · Events · Management
                </p>
              </div>
            </div>

            <p className="max-w-[560px] text-[13px] leading-6 text-black sm:text-[14px]">
              Creating stronger brands, better experiences and well-managed 
              projects through strategy, creativity and thoughtful execution.
            </p>
          </div>

          {/* CTA */}
          <div className="lg:text-right">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#DDC0B4]">
              Let&apos;s Connect
            </p>

            <a
              href="mailto:Laylaoud@gmail.com"
              className="group inline-flex items-center gap-4 font-[family-name:var(--font-editorial)] text-[28px] font-medium leading-none text-black transition-colors hover:text-[#DDC0B4] sm:text-[34px]"
            >
              Laylaoud@gmail.com

              <span className="text-[22px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Middle */}
        <div className="grid gap-8 border-b border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
            {footerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-semibold uppercase tracking-[0.11em] text-black transition-colors hover:text-[#DDC0B4]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social / CV */}
          <div className="flex flex-wrap gap-3 lg:justify-end"> 

            <a
              href="/layla-oud-cv.pdf"
              download
              className="inline-flex min-h-10 items-center justify-center gap-2 bg-[#DDC0B4] px-4 text-[9px] font-bold uppercase tracking-[0.1em] text-[#2E2927] transition hover:bg-[#CFA99A]"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Bottom */} 
        <div className="flex  flex-col gap-4  py-6 text-black  text-[15px] uppercase tracking-[0.1em] text-black sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Layla Oud. All rights reserved.</span> 

          
        </div>
      </div>
    </footer>
  );
}