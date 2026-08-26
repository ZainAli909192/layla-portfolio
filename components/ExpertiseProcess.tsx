import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  MessageCircle,
  Megaphone,
  Users,
  ClipboardCheck,
  Handshake,
  Target,
  Sparkles,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Social Media Management",
    image: "/about/socialmedia.png",
    description:
      "Building stronger digital presence through strategy, content, engagement and performance tracking.",
    steps: ["Strategy", "Create", "Publish", "Engage", "Analyze"],
    bullets: [
      {
        label: "Content strategy & planning",
        icon: Layers3,
      },
      {
        label: "Community management",
        icon: MessageCircle,
      },
      {
        label: "Campaign coordination",
        icon: Megaphone,
      },
      {
        label: "Analytics & reporting",
        icon: BarChart3,
      },
    ],
  },
  {
    number: "02",
    title: "Event Planning & Management",
    image: "/about/events.png",
    description:
      "Managing experiences from concept to execution with structure, creativity and attention to every detail.",
    steps: ["Concept", "Plan", "Coordinate", "Execute", "Review"],
    bullets: [
      {
        label: "Event concept & design",
        icon: Sparkles,
      },
      {
        label: "Vendor & budget management",
        icon: Handshake,
      },
      {
        label: "Guest experience",
        icon: Users,
      },
      {
        label: "On-site execution",
        icon: CalendarDays,
      },
    ],
  },
  {
    number: "03",
    title: "Management & Coordination",
    image: "/about/management.png",
    description:
      "Bringing people, timelines and priorities together to keep projects moving and outcomes aligned.",
    steps: ["Plan", "People", "Process", "Deliver", "Results"],
    bullets: [
      {
        label: "Team leadership & coordination",
        icon: Users,
      },
      {
        label: "Project management",
        icon: ClipboardCheck,
      },
      {
        label: "Client & stakeholder management",
        icon: Handshake,
      },
      {
        label: "Reporting & problem solving",
        icon: Target,
      },
    ],
  },
];

export default function ExpertiseProcess() {
  return (
    <section
      id="expertise"
      className="overflow-hidden bg-[#F8F4F1] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-[min(92%,1440px)]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B98773]">
            What I Do Best
          </p>

          <div className="mx-auto mb-4 h-px w-10 bg-[#DDC0B4]" />

          <h2 className="font-[family-name:var(--font-editorial)] text-[clamp(2.4rem,4.5vw,4.6rem)] font-medium leading-[1] tracking-[-0.04em] text-[#2E2927]">
            Expertise That Creates Impact
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-6 text-[#6D625D] sm:text-[14px] sm:leading-7">
            Three disciplines, connected by strategy, organization and
            execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="
                group relative overflow-hidden
                rounded-[24px]
                border border-[#E6DDD8]
                bg-white
                shadow-[0_18px_50px_rgba(63,45,38,0.06)]
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_70px_rgba(63,45,38,0.10)]
              "
            >
              {/* Image */}
              <div className="relative h-[230px] overflow-hidden sm:h-[260px] lg:h-[280px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    group-hover:scale-[1.04]
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,41,39,0.05)_0%,rgba(46,41,39,0.58)_100%)]" />

                {/* Number */}
                <span
                  className="
                    absolute left-5 top-5 z-10
                    font-[family-name:var(--font-editorial)]
                    text-[42px]
                    font-medium
                    leading-none
                    text-[#DDC0B4]
                  "
                >
                  {item.number}
                </span>

                {/* Title on image */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <h3
                    className="
                      max-w-[300px]
                      font-[family-name:var(--font-editorial)]
                      text-[30px]
                      font-medium
                      leading-[1]
                      tracking-[-0.03em]
                      text-white
                      sm:text-[34px]
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <p className="mb-6 text-[12px] leading-6 text-[#625651] sm:text-[13px]">
                  {item.description}
                </p>

                {/* Process */}
                <div className="border-y border-[#E8DDD7] py-5">
                  <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#A97865]">
                    Process
                  </p>

                  {/* desktop/tablet */}
                  <div className="relative hidden grid-cols-5 gap-1 sm:grid">
                    <div className="absolute left-[9%] right-[9%] top-[14px] h-px bg-[#E2D0C8]" />

                    {item.steps.map((step, index) => (
                      <div
                        key={step}
                        className="relative z-10 flex flex-col items-center text-center"
                      >
                        <span
                          className="
                            flex h-7 w-7 items-center justify-center
                            rounded-full
                            border border-[#C79C89]
                            bg-white
                            text-[8px] font-bold
                            text-[#A97865]
                          "
                        >
                          {index + 1}
                        </span>

                        <span className="mt-2 text-[7px] font-bold uppercase tracking-[0.04em] text-[#5C504B] lg:text-[8px]">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* mobile */}
                  <div className="grid grid-cols-2 gap-3 sm:hidden">
                    {item.steps.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="
                            flex h-7 w-7 shrink-0 items-center justify-center
                            rounded-full
                            border border-[#C79C89]
                            bg-[#FBFAF8]
                            text-[8px] font-bold
                            text-[#A97865]
                          "
                        >
                          {index + 1}
                        </span>

                        <span className="text-[8px] font-bold uppercase tracking-[0.05em] text-[#5C504B]">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="pt-5">
                  <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#A97865]">
                    Key Capabilities
                  </p>

                  <div className="grid gap-3">
                    {item.bullets.map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="
                          flex items-center gap-3
                          rounded-[12px]
                          border border-[#EEE3DE]
                          bg-[#FCFAF8]
                          px-3 py-3
                        "
                      >
                        <span
                          className="
                            flex h-8 w-8 shrink-0 items-center justify-center
                            rounded-full
                            bg-[#E6DDD8]
                            text-[#A97865]
                          "
                        >
                          <Icon size={15} strokeWidth={1.5} />
                        </span>

                        <span className="text-[11px] font-medium text-[#4F4642] sm:text-[12px]">
                          {label}
                        </span>

                        <CheckCircle2
                          size={14}
                          strokeWidth={1.4}
                          className="ml-auto shrink-0 text-[#B98773]/70"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer line */}
                <div className="mt-6 border-t border-[#E8DDD7] pt-5">
                  <a
                    href="#portfolio"
                    className="
                      group/link inline-flex items-center gap-3
                      text-[9px]
                      font-bold uppercase
                      tracking-[0.13em]
                      text-[#A97865]
                    "
                  >
                    Explore Work

                    <span className="text-base font-light transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
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