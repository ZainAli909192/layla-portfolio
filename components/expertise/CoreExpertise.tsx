import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  MessageCircle,
  Megaphone,
  Users,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Social Media Management",
    subtitle: "Strategy · Content · Growth",
    description:
      "Building a distinct digital presence through thoughtful strategy, intentional content and audience-focused execution.",
    image: "/social.png",
    alt: "Social media platforms used for digital content planning",

    imageFit: "contain",
    imagePosition: "center", 

    capabilities: [
      { label: "Content Strategy", icon: CalendarDays },
      { label: "Community Management", icon: MessageCircle },
      { label: "Campaign Coordination", icon: Megaphone },
      { label: "Analytics & Reporting", icon: BarChart3 },
    ],
  },

  {
    number: "02",
    title: "Event Planning & Management",
    subtitle: "Concept · Coordination · Execution",
    description:
      "Turning ideas into structured, memorable experiences through precise planning, calm coordination and hands-on delivery.",
    image: "/13.jpg",
    alt: "Elegant event table prepared for guests",
   
    imageFit: "cover",
    imagePosition: "center",

    capabilities: [
      { label: "Event Planning", icon: CalendarDays },
      { label: "People Coordination", icon: Users },
      { label: "On-site Execution", icon: ClipboardCheck },
      { label: "Guest Experience", icon: MessageCircle },
    ],
  },

  {
    number: "03",
    title: "Management & Coordination",
    subtitle: "People · Projects · Results",
    description:
      "Bringing people, timelines and priorities together so communication stays clear and every outcome remains aligned.",
    image: "/manage1.png",
    alt: "Management presentation and team coordination",

    imageFit: "cover",

    // IMPORTANT
    imagePosition: "42% center",

    capabilities: [
      { label: "Project Coordination", icon: ClipboardCheck },
      { label: "Team Management", icon: Users },
      { label: "Stakeholder Communication", icon: MessageCircle },
      { label: "Results & Reporting", icon: BarChart3 },
    ],
  },
];

export default function CoreExpertise() {
  return (
    <section
      id="core-expertise"
      className="overflow-hidden bg-[var(--white)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-[min(calc(100%-32px),var(--container))] sm:w-[min(calc(100%-64px),var(--container))]">
        {/* =========================
            Heading
        ========================== */}
        <header className="mb-14 grid gap-7 border-t border-[var(--line)] pt-7 lg:mb-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
              Core Expertise
            </p>

            <p className="m-0 max-w-[340px] text-sm leading-6 text-[var(--muted)]">
              Three complementary disciplines, connected by one thoughtful and
              dependable way of working.
            </p>
          </div>

          <h2 className="m-0 max-w-[820px] font-[family-name:var(--font-editorial)] text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-[var(--ink)] lg:ml-auto lg:text-right">
            Built to think.
            <br />

            <span className="italic text-[var(--accent-dark)]">
              Ready to deliver.
            </span>
          </h2>
        </header>

        {/* =========================
            Expertise
        ========================== */}
        <div className="space-y-8 lg:space-y-12">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                overflow-hidden
                border
                border-[var(--line)]
                bg-[var(--paper)]
              "
            >
              <div
                className="
                  grid

                  lg:min-h-[610px]
                  lg:grid-cols-[1.02fr_0.98fr]
                "
              >
                {/* =========================
                    IMAGE
                ========================== */}
                <div
                  className={`
                    relative
                    min-h-[320px]
                    overflow-hidden

                    sm:min-h-[420px]

                    lg:min-h-full

                    ${
                      item.imageFit === "contain"
                        ? "bg-[#F4E8DF]"
                        : "bg-[var(--secondary)]"
                    }

                    ${
                      index % 2 === 1
                        ? "lg:order-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className={`
                      transition-transform
                      duration-500
                      ease-out

                      ${
                        item.imageFit === "contain"
                          ? `
                            object-contain
                            object-center
                            p-4
                            sm:p-7
                            lg:p-8
                          `
                          : `
                            object-cover
                            object-center
                            group-hover:scale-[1.02]
                          `
                      }

                      motion-reduce:transition-none
                      motion-reduce:group-hover:scale-100
                    `}
                  />

                  {/* Overlay only for photography */}
                  {item.imageFit !== "contain" && (
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[var(--ink)]/65
                        via-transparent
                        to-transparent
                      "
                      aria-hidden="true"
                    />
                  )}

                  {/* Very subtle overlay for social graphic */}
                  {item.imageFit === "contain" && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#2E2927]/10
                        via-transparent
                        to-transparent
                      "
                    />
                  )}

                  {/* Number */}
                  <span
                    className={`
                      absolute
                      left-6 top-6
                      z-10

                      font-[family-name:var(--font-editorial)]
                      text-6xl
                      leading-none

                      sm:left-8
                      sm:top-8
                      sm:text-7xl

                      ${
                        item.imageFit === "contain"
                          ? "text-[var(--accent-dark)]"
                          : "text-[var(--white)]"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  {/* Subtitle */}
                  <p
                    className={`
                      absolute
                      bottom-6 left-6
                      z-10
                      mb-0

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      sm:bottom-8
                      sm:left-8

                      ${
                        item.imageFit === "contain"
                          ? "text-[var(--accent-dark)]"
                          : "text-[var(--white)]"
                      }
                    `}
                  >
                    {item.subtitle}
                  </p>
                </div>

                {/* =========================
                    CONTENT
                ========================== */}
                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    p-7

                    sm:p-10
                    lg:p-12
                    xl:p-16
                  "
                >
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
                    Expertise {item.number}
                  </p>

                  <h3
                    className="
                      m-0
                      max-w-[560px]

                      font-[family-name:var(--font-editorial)]
                      text-[clamp(2.7rem,5vw,4.8rem)]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.04em]
                      text-[var(--ink)]
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="my-7 block h-px w-14 bg-[var(--primary)]"
                    aria-hidden="true"
                  />

                  <p className="m-0 max-w-[560px] text-base leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  {/* Capabilities */}
                  <ul
                    className="
                      mt-8
                      grid
                      gap-px
                      overflow-hidden
                      border
                      border-[var(--line)]
                      bg-[var(--line)]

                      sm:grid-cols-2
                    "
                  >
                    {item.capabilities.map(({ label, icon: Icon }) => (
                      <li
                        key={label}
                        className="
                          flex
                          min-h-[78px]
                          items-center
                          gap-4
                          bg-[var(--white)]
                          px-5
                          py-4
                        "
                      >
                        <span
                          className="
                            flex
                            h-11 w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--secondary)]
                            text-[var(--accent-dark)]
                          "
                          aria-hidden="true"
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </span>

                        <span className="text-[13px] font-semibold leading-5 text-[var(--ink)]">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#how-i-work"
                    className="
                      group/link
                      mt-8
                      inline-flex
                      min-h-12
                      w-fit
                      items-center
                      gap-3
                      border-b
                      border-[var(--accent-dark)]
                      py-2

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--ink)]

                      transition-colors
                      duration-200

                      hover:text-[var(--accent-dark)]

                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[var(--accent-dark)]
                    "
                  >
                    Explore approach

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-200

                        group-hover/link:-translate-y-1
                        group-hover/link:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}