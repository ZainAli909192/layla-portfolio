import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

const disciplines = ["Social Media", "Events", "Management"];

export default function ExpertiseHero() {
  return (
    <section id="expertise-hero" className="relative isolate overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid min-h-[calc(100svh-76px)] w-[min(calc(100%-32px),var(--container))] items-center gap-12 py-16 sm:w-[min(calc(100%-64px),var(--container))] sm:py-20 lg:min-h-[760px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-24">
        <div className="relative z-10 max-w-[650px]">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--primary)]" aria-hidden="true" />
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent-dark)]">Expertise</p>
          </div>

          <h1 className="m-0 font-[family-name:var(--font-editorial)] text-[clamp(3.7rem,10vw,7.4rem)] font-medium leading-[0.82] tracking-[-0.055em] text-[var(--ink)]">
            Strategy.<br />
            Creativity.<br />
            <span className="italic text-[var(--accent-dark)]">Execution.</span>
          </h1>

          <p className="mt-9 max-w-[560px] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            A multidisciplinary approach to building brands, creating memorable experiences and carrying ideas from first thought to final delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3" aria-label="Expertise areas">
            {disciplines.map((discipline, index) => (
              <span key={discipline} className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[11px]">{discipline}</span>
                {index < disciplines.length - 1 && <span className="h-1 w-1 rounded-full bg-[var(--primary)]" aria-hidden="true" />}
              </span>
            ))}
          </div>

          <a href="#core-expertise" className="group mt-10 inline-flex min-h-12 items-center gap-3 border-b border-[var(--accent-dark)] py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors duration-200 hover:text-[var(--accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-dark)]">
            Explore expertise
            <ArrowDownRight size={19} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[640px]">
          <div className="absolute inset-x-5 inset-y-0 overflow-hidden rounded-t-[min(18vw,var(--radius-lg))] rounded-b-[var(--radius-md)] sm:inset-x-10 lg:inset-x-0 lg:left-12">
            <Image src="/portfolio/mainhero.avif" alt="Creative professional planning work at a desk" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute bottom-5 left-0 max-w-[250px] border border-[var(--line)] bg-[var(--white)] p-5 shadow-[var(--shadow)] sm:bottom-8 sm:p-6 lg:-left-2">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">One clear approach</p>
            <p className="m-0 font-[family-name:var(--font-editorial)] text-2xl leading-tight text-[var(--ink)] sm:text-3xl">Think deeply.<br />Deliver beautifully.</p>
          </div>

          <span aria-hidden="true" className="absolute right-0 top-8 font-[family-name:var(--font-editorial)] text-[72px] leading-none text-[var(--primary)] sm:text-[96px]">03</span>
        </div>
      </div>
    </section>
  );
}
