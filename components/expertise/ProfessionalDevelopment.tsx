import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Sparkles,
  Target,
} from "lucide-react";
import Image from 'next/image';

const focusAreas = [
  {
    icon: Target,
    title: "Social Strategy",
    text: "Building stronger, goal-led digital strategies.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Audience",
    text: "Understanding audiences through modern AI-led research.",
  },
  {
    icon: Sparkles,
    title: "Content",
    text: "Creating relevant content built around audience needs.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics",
    text: "Turning performance data into clearer decisions.",
  },
];

export default function ProfessionalDevelopment() {
  return (
    <section
      id="professional-development"
      className="overflow-hidden bg-[var(--paper)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-[min(calc(100%-32px),var(--container))] sm:w-[min(calc(100%-64px),var(--container))]">
        <div className="border-y border-[var(--line)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* =========================================
                LEFT — EDITORIAL INTRO
            ========================================== */}
           {/* =========================================
    LEFT — EDITORIAL INTRO
========================================== */}
<div className="flex flex-col justify-center px-0 py-12 sm:py-16 lg:px-12 lg:py-20 xl:px-16">

  {/* LARGE NMA LOGO */}
  <div className="mb-12 sm:mb-14">
    <Image
      src="/nmlogo.png"
      alt="New Media Academy"
      width={420}
      height={180}
      priority
      className="
        h-auto
        w-[240px]
        object-contain
        object-left
        sm:w-[300px]
        lg:w-[340px]
        xl:w-[390px]
      "
    />
  </div>

  {/* Section Label */}
  <div className="mb-8 flex items-center gap-4">
    <span
      className="h-px w-10 bg-[var(--primary)]"
      aria-hidden="true"
    />

    <p className="m-0 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-dark)]">
      Professional Development
    </p>
  </div>

  {/* Heading */}
  <h2 className="m-0 max-w-[620px] font-[family-name:var(--font-editorial)] text-[clamp(3.1rem,5.6vw,5.4rem)] font-medium leading-[0.91] tracking-[-0.045em] text-[var(--ink)]">
    Always learning.
    <br />

    <span className="italic text-[var(--accent-dark)]">
      Always evolving.
    </span>
  </h2>

  {/* Description */}
  <p className="mt-8 max-w-[570px] text-[15px] leading-7 text-[var(--muted)] sm:text-base">
    Strengthening my approach to social media through continued
    professional development — connecting strategy, creativity,
    emerging technology and measurable outcomes.
  </p>

  {/* Bottom Detail */}
  <div className="mt-12 hidden items-center gap-5 lg:flex">
    <span className="font-[family-name:var(--font-editorial)] text-[70px] font-medium leading-none text-[var(--primary)]/25">
      01
    </span>

    <div className="h-px flex-1 bg-[var(--line)]" />

    <p className="m-0 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
      Learn · Apply · Evolve
    </p>
  </div>
</div>

            {/* =========================================
                RIGHT — PROGRAM
            ========================================== */}
            <div className="relative overflow-hidden bg-[var(--white)] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-20 xl:px-16">
              {/* Background editorial number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-8 font-[family-name:var(--font-editorial)] text-[170px] leading-none text-[var(--secondary)]/45 sm:text-[220px]"
              >
                26
              </span>

              <div className="relative z-10">
                {/* Status */}
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    Currently Enrolled
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Professional Learning
                  </span>
                </div>

                {/* Academy */}
                {/* Academy / Institution */}
<div className="mb-7 flex items-center gap-4">
  <div
    className="
      flex h-[64px] w-[64px] shrink-0
      items-center justify-center
      rounded-[16px]
      border border-[var(--line)]
      bg-white
      p-2.5
      shadow-[0_8px_24px_rgba(61,41,34,0.06)]
      sm:h-[72px] sm:w-[72px]
    "
  >
    <Image
      src="/nmlogo.png"
      alt="New Media Academy"
      width={64}
      height={64}
      className="h-full w-full object-contain"
    />
  </div>

  <div>
    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
      Learning with
    </p>

    <p className="m-0 text-[13px] font-semibold tracking-[0.01em] text-[var(--ink)] sm:text-[14px]">
      New Media Academy
    </p>
  </div>
</div>

<h3 className="m-0 max-w-[640px] font-[family-name:var(--font-editorial)] text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[0.96] tracking-[-0.035em] text-[var(--ink)]">
  Social Media
  <br />
  Professional Program
</h3>

                <span
                  className="my-7 block h-px w-14 bg-[var(--primary)]"
                  aria-hidden="true"
                />

                <p className="m-0 max-w-[620px] text-[15px] leading-7 text-[var(--muted)]">
                  Developing deeper expertise across social strategy, audience
                  intelligence, AI-enabled marketing, content and
                  performance-led decision making.
                </p>

                {/* =====================================
                    FOCUS AREAS
                ====================================== */}
                <div className="mt-9 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                  {focusAreas.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="group bg-[var(--white)] p-5 transition-colors duration-300 hover:bg-[var(--paper)] sm:p-6"
                    >
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--accent-dark)]">
                        <Icon size={17} strokeWidth={1.5} />
                      </div>

                      <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--ink)]">
                        {title}
                      </h4>

                      <p className="m-0 max-w-[230px] text-[12px] leading-5 text-[var(--muted)]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* =====================================
                    FOOTER
                ====================================== */}
                <div className="mt-9 flex flex-col gap-6 border-t border-[var(--line)] pt-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Institution
                    </p>

                    <p className="m-0 font-[family-name:var(--font-editorial)] text-[21px] text-[var(--ink)]">
                      New Media Academy
                    </p>
                  </div>

                  <a
                    href="https://nma.ae/en/learning/programs/social-media-professional-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex min-h-11 w-fit items-center gap-3 border-b border-[var(--accent-dark)] py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--ink)] transition-colors duration-200 hover:text-[var(--accent-dark)]"
                  >
                    View Program

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}