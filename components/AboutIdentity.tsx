import {
  Lightbulb,
  MessageCircle,
  Search,
  ShieldCheck,
  Puzzle,
  Target,
  CalendarDays,
  Users,
  MessageSquareHeart,
} from "lucide-react";

const qualities = [
  {
    label: "Creative Thinking",
    icon: Lightbulb,
  },
  {
    label: "Strong Communication",
    icon: MessageCircle,
  },
  {
    label: "Attention to Detail",
    icon: Search,
  },
  {
    label: "Organized & Reliable",
    icon: ShieldCheck,
  },
  {
    label: "Problem Solver",
    icon: Puzzle,
  },
  {
    label: "Results Driven",
    icon: Target,
  },
];

export default function AboutIdentity() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFAF8] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[42%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#E6DDD8]/20 blur-[120px]"
      />

      <div className="relative mx-auto w-[min(90%,1500px)]">
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-[0.92fr_1.35fr_0.78fr] lg:items-center lg:gap-10 xl:gap-16">
          {/* LEFT */}
          <div className="max-w-[480px]">
            <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B77B62]">
              About Me
            </p>

            <div className="mb-8 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#B77B62]" />
              <span className="h-[2px] w-3 bg-[#B77B62]/60" />
            </div>

            <h2
              className="
                mb-8
                font-[family-name:var(--font-editorial)]
                text-[clamp(3.5rem,4.4vw,5.6rem)]
                font-medium
                leading-[0.96]
                tracking-[-0.045em]
                text-[#2B2623]
              "
            >
              More Than
              <br />
              One Role.
              <br />
              One Stronger
              <br />
              Purpose.
            </h2>

            <p className="max-w-[455px] text-[15px] leading-[1.85] text-[#554C47] xl:text-[16px]">
              I blend creativity, organization and leadership to deliver
              meaningful results across social media, event experiences and
              management. I enjoy turning ideas into structured plans and
              plans into polished outcomes.
            </p>

            <a
              href="#expertise"
              className="
                group mt-8 inline-flex
                border-b border-[#B77B62]
                pb-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#B77B62]
              "
            >
              Discover My Expertise

              <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* CENTER INFOGRAPHIC */}
          <div className="flex justify-center">
            <div
              className="
                relative
                h-[600px] w-[600px]

                xl:h-[660px] xl:w-[660px]
              "
            >
              {/* SOCIAL MEDIA */}
              <div
                className="
                  absolute
                  left-1/2 top-0
                  h-[310px] w-[310px]
                  -translate-x-1/2
                  overflow-hidden
                  rounded-full
                  border border-[#D9BDAF]
                  bg-[#E6DDD8]

                  xl:h-[340px] xl:w-[340px]
                "
              >
                <img
                  src="/about/socialmedia.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#5A4135]/45" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/5 backdrop-blur-sm">
                    <MessageSquareHeart
                      size={20}
                      strokeWidth={1.4}
                    />
                  </span>

                  <strong className="text-[17px] font-bold uppercase tracking-[0.025em]">
                    Social Media
                  </strong>

                  <span className="mt-2 text-[13px] text-white/90">
                    Strategy · Content · Growth
                  </span>
                </div>
              </div>

              {/* EVENTS */}
              <div
                className="
                  absolute
                  bottom-0 left-[3%]
                  h-[310px] w-[310px]
                  overflow-hidden
                  rounded-full
                  border border-[#D9BDAF]
                  bg-[#E6DDD8]

                  xl:h-[340px] xl:w-[340px]
                "
              >
                <img
                  src="/about/events.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#5A4135]/48" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/5 backdrop-blur-sm">
                    <CalendarDays size={20} strokeWidth={1.4} />
                  </span>

                  <strong className="text-[17px] font-bold uppercase tracking-[0.025em]">
                    Events
                  </strong>

                  <span className="mt-2 text-[13px] text-white/90">
                    Planning · Coordination
                  </span>
                </div>
              </div>

              {/* MANAGEMENT */}
              <div
                className="
                  absolute
                  bottom-0 right-[3%]
                  h-[310px] w-[310px]
                  overflow-hidden
                  rounded-full
                  border border-[#D9BDAF]
                  bg-[#E6DDD8]

                  xl:h-[340px] xl:w-[340px]
                "
              >
                <img
                  src="/about/management.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#5A4135]/48" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/5 backdrop-blur-sm">
                    <Users size={21} strokeWidth={1.4} />
                  </span>

                  <strong className="text-[17px] font-bold uppercase tracking-[0.025em]">
                    Management
                  </strong>

                  <span className="mt-2 text-[13px] text-white/90">
                    People · Projects · Results
                  </span>
                </div>
              </div>

              {/* CENTER LO */}
              <div
                className="
                  absolute
                  left-1/2 top-1/2 z-20
                  flex h-[138px] w-[138px]
                  -translate-x-1/2 -translate-y-1/2
                  flex-col items-center justify-center
                  rounded-full
                  border-[3px] border-white
                  bg-[#FCFAF8]
                  text-center
                  shadow-[0_8px_35px_rgba(76,54,44,0.15)]

                  after:absolute
                  after:inset-[4px]
                  after:rounded-full
                  after:border
                  after:border-[#B98773]
                "
              >
                <strong
                  className="
                    relative z-10
                    font-[family-name:var(--font-editorial)]
                    text-[42px]
                    font-medium
                    leading-none
                    text-[#765044]
                  "
                >
                  LO
                </strong>

                <span className="relative z-10 mt-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#B77B62]">
                  Layla Oud
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT QUALITIES */}
          <div className="flex justify-end">
            <div
              className="
                relative
                w-full max-w-[350px]
                rounded-[26px]
                border border-[#E5D3CA]
                bg-white/50
                px-8 py-8
              "
            >
              {/* vertical line */}
              <div className="absolute bottom-[52px] left-[31px] top-[52px] w-px bg-[#DDBFAF]" />

              <div className="space-y-4">
                {qualities.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="relative flex min-h-[58px] items-center gap-5"
                  >
                    {/* timeline dot */}
                    <span className="absolute -left-[11px] z-10 h-[8px] w-[8px] rounded-full bg-[#B98773]" />

                    {/* icon */}
                    <span
                      className="
                        ml-5 flex h-[48px] w-[48px]
                        shrink-0 items-center justify-center
                        rounded-full
                        border border-[#E8D8D0]
                        bg-[#FCFAF8]
                        text-[#B77B62]
                      "
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </span>

                    <p className="text-[13px] font-semibold text-[#312B28] xl:text-[14px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden">
          {/* heading */}
          <div className="mb-10">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B77B62]">
              About Me
            </p>

            <div className="mb-5 flex gap-2">
              <span className="h-[2px] w-6 bg-[#B77B62]" />
              <span className="h-[2px] w-2 bg-[#B77B62]/60" />
            </div>

            <h2
              className="
                max-w-[500px]
                font-[family-name:var(--font-editorial)]
                text-[clamp(2.65rem,10vw,4rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
                text-[#2B2623]
              "
            >
              More Than One Role.
              <br />
              One Stronger Purpose.
            </h2>

            <p className="mt-6 max-w-[540px] text-[13px] leading-6 text-[#5B504B] sm:text-[14px]">
              I blend creativity, organization and leadership to deliver
              meaningful results across social media, event experiences and
              management.
            </p>
          </div>

          {/* Identity image cards */}
          <div className="space-y-2">
            <IdentityMobileCard
              title="Social Media"
              description="Strategy · Content · Growth"
              image="/about/socialmedia.png"
              icon={<MessageSquareHeart size={19} strokeWidth={1.4} />}
            />

            <IdentityMobileCard
              title="Events"
              description="Planning · Coordination"
              image="/about/events.png"
              icon={<CalendarDays size={19} strokeWidth={1.4} />}
            />

            <IdentityMobileCard
              title="Management"
              description="People · Projects · Results"
              image="/about/management.png"
              icon={<Users size={19} strokeWidth={1.4} />}
            />
          </div>

          {/* Mobile LO */}
          <div className="relative z-10 mx-auto -mt-4 flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full border-4 border-[#FCFAF8] bg-white shadow-[0_8px_30px_rgba(80,58,48,0.13)]">
            <span className="font-[family-name:var(--font-editorial)] text-[28px] leading-none text-[#765044]">
              LO
            </span>

            <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.12em] text-[#B77B62]">
              Layla Oud
            </span>
          </div>

          {/* Mobile qualities */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {qualities.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="
                  flex min-h-[105px]
                  flex-col justify-between
                  rounded-[16px]
                  border border-[#E8D9D2]
                  bg-white
                  p-4
                "
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D8D0] text-[#B77B62]">
                  <Icon size={19} strokeWidth={1.5} />
                </span>

                <p className="mt-4 text-[11px] font-semibold leading-[1.35] text-[#332C29] sm:text-[12px]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#expertise"
            className="
              group mt-8 inline-flex
              border-b border-[#B77B62]
              pb-2
              text-[10px]
              font-bold uppercase
              tracking-[0.12em]
              text-[#B77B62]
            "
          >
            Discover My Expertise

            <span className="ml-4 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

type IdentityMobileCardProps = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

function IdentityMobileCard({
  title,
  description,
  image,
  icon,
}: IdentityMobileCardProps) {
  return (
    <div className="relative h-[108px] overflow-hidden rounded-[14px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#563C31]/50" />

      <div className="relative z-10 flex h-full items-center gap-4 px-5 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-[#B98773]/80 backdrop-blur-sm">
          {icon}
        </span>

        <div>
          <strong className="block text-[13px] font-bold uppercase tracking-[0.025em]">
            {title}
          </strong>

          <span className="mt-1 block text-[11px] text-white/85">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}