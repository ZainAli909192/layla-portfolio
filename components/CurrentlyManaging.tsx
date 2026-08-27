import Image from "next/image";
import {
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  MessageCircle,
  Palette,
  PenLine,
  Users,
} from "lucide-react";

const brands = [
  {
    number: "01",
    name: "The Label Concept",
    role: "Social Media Management",
    description:
      "Managing content strategy, creative direction, campaigns and community engagement.",
    image: "/about/tlc.png",
    align: "left",
    responsibilities: [
      {
        label: "Content Strategy",
        icon: CalendarDays,
      },
      {
        label: "Creative Direction",
        icon: Palette,
      },
      {
        label: "Campaign Management",
        icon: Megaphone,
      },
      {
        label: "Community Engagement",
        icon: Users,
      },
    ],
  },
  {
    number: "02",
    name: "Nuit Collection",
    role: "Social Media Management",
    description:
      "Managing content planning, brand communication, campaigns and audience engagement.",
    image: "/about/nuit.png",
    align: "right",
    responsibilities: [
      {
        label: "Content Planning",
        icon: CalendarDays,
      },
      {
        label: "Brand Communication",
        icon: PenLine,
      },
      {
        label: "Campaign Management",
        icon: Megaphone,
      },
      {
        label: "Audience Engagement",
        icon: MessageCircle,
      },
    ],
  },
];

export default function CurrentlyManaging() {
  return (
    <section className="overflow-hidden bg-[#FBFAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[min(92%,1440px)]">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#B98773] sm:text-[10px]">
            Currently Managing
          </p>

          <div className="mx-auto mb-4 h-px w-10 bg-[#DDC0B4]" />

          <h2 className="font-[family-name:var(--font-editorial)] text-[clamp(2.35rem,4.4vw,4.6rem)] font-medium leading-[1] tracking-[-0.04em] text-[#2E2927]">
            Two Brands. One Focused Approach.
          </h2>
        </div>

        {/* =========================
            DESKTOP
        ========================== */}
        <div className="relative hidden overflow-hidden rounded-[24px] lg:grid lg:grid-cols-2">
          {brands.map((brand, brandIndex) => (
            <article
              key={brand.name}
              className={`
                group relative min-h-[620px] overflow-hidden

                ${
                  brandIndex === 0
                    ? "border-r border-white/80"
                    : ""
                }
              `}
            >
              {/* Image */}
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="50vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-[1.035]
                "
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0

                  ${
                    brand.align === "left"
                      ? "bg-[linear-gradient(90deg,rgba(46,41,39,0.88)_0%,rgba(46,41,39,0.70)_52%,rgba(46,41,39,0.25)_100%)]"
                      : "bg-[linear-gradient(270deg,rgba(46,41,39,0.88)_0%,rgba(46,41,39,0.70)_52%,rgba(46,41,39,0.25)_100%)]"
                  }
                `}
              />

              {/* Content */}
              <div
                className={`
                  relative z-10 flex h-full min-h-[620px]
                  flex-col justify-center
                  px-12 py-12 text-white
                  xl:px-16

                  ${
                    brand.align === "right"
                      ? "items-end text-right"
                      : "items-start text-left"
                  }
                `}
              >
                {/* Number */}
                <span className="mb-6 font-[family-name:var(--font-editorial)] text-[34px] leading-none text-[#DDC0B4]">
                  {brand.number}
                </span>

                {/* Brand Name */}
                <h3
                  className="
                    max-w-[360px]
                    font-[family-name:var(--font-editorial)]
                    text-[clamp(3.1rem,4vw,4.4rem)]
                    font-medium
                    leading-[0.96]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  {brand.name}
                </h3>

                {/* Divider */}
                <span className="my-6 block h-px w-14 bg-[#DDC0B4]" />

                {/* Role */}
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#DDC0B4]">
                  {brand.role}
                </p>

                {/* Description */}
                <p className="max-w-[370px] text-[14px] leading-7 text-white/88 xl:text-[15px]">
                  {brand.description}
                </p>

                {/* Responsibilities */}
                <div
                  className={`
                    mt-7 grid gap-3

                    ${
                      brand.align === "right"
                        ? "justify-items-end"
                        : "justify-items-start"
                    }
                  `}
                >
                  {brand.responsibilities.map(
                    ({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className={`
                          flex items-center gap-3

                          ${
                            brand.align === "right"
                              ? "flex-row-reverse"
                              : ""
                          }
                        `}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DDC0B4]/75 text-[#DDC0B4]">
                          <Icon size={14} strokeWidth={1.5} />
                        </span>

                        <span className="text-[12px] text-white/90">
                          {label}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#portfolio"
                  className="
                    group/link mt-8 inline-flex
                    min-h-[54px] min-w-[190px]
                    items-center justify-center
                    gap-7
                    border border-white/60
                    px-7
                    text-[10px]
                    font-bold uppercase
                    tracking-[0.14em]
                    text-white
                    backdrop-blur-sm
                    transition
                    duration-300

                    hover:border-[#DDC0B4]
                    hover:bg-[#DDC0B4]
                    hover:text-[#2E2927]
                  "
                >
                  View Work

                  <span className="text-lg font-light transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}

          {/* CENTER BADGE */}
          <div
            className="
              absolute left-1/2 top-1/2 z-30
              flex h-[185px] w-[185px]
              -translate-x-1/2 -translate-y-1/2
              flex-col items-center justify-center
              rounded-full
              border-[5px] border-[#FBFAF8]
              bg-[#FBFAF8]
              text-center
              shadow-[0_15px_45px_rgba(45,34,29,0.16)]

              after:absolute
              after:inset-[5px]
              after:rounded-full
              after:border
              after:border-[#DDC0B4]
            "
          >
            <BriefcaseBusiness
              size={27}
              strokeWidth={1.35}
              className="relative z-10 mb-3 text-[#B98773]"
            />

            <span className="relative z-10 text-[10px] font-bold uppercase leading-[1.45] tracking-[0.13em] text-[#B98773]">
              Currently
              <br />
              Managing
            </span>

            <span className="relative z-10 my-3 block h-px w-12 bg-[#DDC0B4]" />

            <span className="relative z-10 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#675A54]">
              2 Active
              <br />
              Brands
            </span>
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET
        ========================== */}
        <div className="lg:hidden">
          {/* Mobile badge */}
          <div className="relative z-20 mx-auto mb-5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border-4 border-[#FBFAF8] bg-[#FBFAF8] text-center shadow-[0_10px_35px_rgba(45,34,29,0.12)] after:absolute after:inset-[4px] after:rounded-full after:border after:border-[#DDC0B4]">
            <BriefcaseBusiness
              size={21}
              strokeWidth={1.4}
              className="relative z-10 mb-2 text-[#B98773]"
            />

            <span className="relative z-10 text-[8px] font-bold uppercase leading-[1.35] tracking-[0.12em] text-[#B98773]">
              Currently
              <br />
              Managing
            </span>

            <span className="relative z-10 mt-2 text-[7px] uppercase tracking-[0.11em] text-[#645852]">
              2 Active Brands
            </span>
          </div>

          <div className="grid gap-3">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="
                  group relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[18px]
                "
              >
                {/* Image */}
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="100vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-[1.035]
                  "
                />

                {/* Mobile Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(46,41,39,0.91)_0%,rgba(46,41,39,0.75)_48%,rgba(46,41,39,0.24)_100%)]" />

                {/* Content */}
                <div className="relative z-10 flex min-h-[330px] max-w-[72%] flex-col justify-center px-6 py-7 text-white sm:max-w-[60%] sm:px-8">
                  <span className="mb-3 font-[family-name:var(--font-editorial)] text-[27px] leading-none text-[#DDC0B4]">
                    {brand.number}
                  </span>

                  <h3
                    className="
                      font-[family-name:var(--font-editorial)]
                      text-[clamp(2rem,8vw,2.8rem)]
                      font-medium
                      leading-[0.98]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {brand.name}
                  </h3>

                  <span className="my-4 block h-px w-10 bg-[#DDC0B4]" />

                  <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.13em] text-[#DDC0B4]">
                    {brand.role}
                  </p>

                  <p className="max-w-[280px] text-[11px] leading-5 text-white/85 sm:text-[12px]">
                    {brand.description}
                  </p>

                  {/* Condensed mobile responsibilities */}
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {brand.responsibilities.map(
                      ({ label, icon: Icon }) => (
                        <div
                          key={label}
                          className="flex items-center gap-2"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#DDC0B4]/70 text-[#DDC0B4]">
                            <Icon size={11} strokeWidth={1.5} />
                          </span>

                          <span className="text-[8px] text-white/85 sm:text-[9px]">
                            {label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mobile circular arrow */}
                <a
                  href="/portfolio"
                  aria-label={`View ${brand.name} work`}
                  className="
                    absolute bottom-5 right-5 z-20
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    bg-[#FBFAF8]
                    text-[22px]
                    text-[#2E2927]
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    transition
                    duration-300

                    hover:bg-[#DDC0B4]
                  "
                >
                  →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}