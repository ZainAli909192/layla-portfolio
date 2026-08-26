import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Megaphone,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

const responsibilities = [
  {
    title: "Content & Brand Presentation",
    text: "Managing product presentation, content direction and brand consistency across social channels.",
    icon: Sparkles,
  },
  {
    title: "Customer Communication",
    text: "Supporting customer interaction and maintaining a clear, professional brand voice.",
    icon: Users,
  },
{
  title: "Influencer Collaboration",
  text: "Coordinating product gifting and promotional collaborations with Instagram bloggers and influencers.",
  icon: Camera,
},
  {
    title: "Paid Promotion",
    text: "Running Meta advertising campaigns to support visibility and reach target audiences.",
    icon: Megaphone,
  },
];

const exposure = [
  "Influencer Collaborations",
  "Meta Advertising",
  "UAE Exhibitions",
  "Qatar Event Representation",
];

export default function NuitCollectionCaseStudy() {
  return (
    <section
      id="nuit-collection"
      className="overflow-hidden bg-[#F8F3F0] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-[min(92%,1440px)]">
      
        <div
          className="
            mb-10
            grid gap-7

            lg:mb-14
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-end
          "
        >
          {/* Number / Meta */}
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#B98773] sm:text-[10px]">
              Featured Brand / 02
            </p>

            <span className="font-[family-name:var(--font-editorial)] text-[52px] leading-none text-[#DDC0B4] sm:text-[64px]">
              02
            </span>
          </div>

          {/* Title */}
          <div className="lg:text-right">
            <h2
              className="
                font-[family-name:var(--font-editorial)]
                text-[clamp(3rem,6vw,6rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.045em]
                text-[#2E2927]
              "
            >
              Nuit
              <br />
              <span className="italic text-[#B98773]">
                Collection.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[520px]
                text-[13px]
                leading-7
                text-[#655B56]

                sm:text-[14px]

                lg:ml-auto
              "
            >
              Fashion brand management built around visual presentation,
              audience communication, influencer relationships and promotional
              reach.
            </p>
          </div>
        </div>

        {/* ===============================
            MAIN EDITORIAL LAYOUT
        =============================== */}
        <div
          className="
            grid gap-4

            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-5
          "
        >
          {/* Large Fashion Visual */}
          <div
            className="
              group relative
              min-h-[500px]
              overflow-hidden
              rounded-[22px]

              sm:min-h-[620px]

              lg:min-h-[760px]
              lg:rounded-[28px]
            "
          >
            <Image
              src="/portfolio/nuit/main.jpg"
              alt="Nuit Collection fashion brand work"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.025]
              "
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,41,39,0.03)_30%,rgba(46,41,39,0.58)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-7 lg:p-9">
              <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#E6DDD8]">
                Fashion · Social Media · Brand
              </p>

              <h3
                className="
                  max-w-[450px]
                  font-[family-name:var(--font-editorial)]
                  text-[32px]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.03em]

                  sm:text-[40px]
                  lg:text-[46px]
                "
              >
                Building presence
                <br />
                beyond the product.
              </h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-4">
            {/* Story Card */}
            <div
              className="
                rounded-[22px]
                border border-[#E6DDD8]
                bg-white
                p-6

                sm:p-8
                lg:rounded-[28px]
                lg:p-10
              "
            >
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B98773]">
                The Brand
              </p>

              <h3
                className="
                  mb-5
                  font-[family-name:var(--font-editorial)]
                  text-[34px]
                  font-medium
                  leading-[1]
                  tracking-[-0.03em]
                  text-[#2E2927]

                  sm:text-[40px]
                "
              >
                Fashion with a
                <br />
                strong social presence.
              </h3>

              <p className="max-w-[620px] text-[13px] leading-7 text-[#655B56] sm:text-[14px]">
                Layla built and represented Nuit Collection as an abaya brand,
                managing customer communication, product presentation, social
                promotion and promotional partnerships.
              </p>

              <div
                className="
                  mt-7 grid
                  grid-cols-2
                  gap-3

                  sm:grid-cols-4
                "
              >
                {exposure.map((item) => (
                  <div
                    key={item}
                    className="
                      flex min-h-[88px]
                      flex-col justify-between
                      rounded-[14px]
                      border border-[#EEE2DC]
                      bg-[#FCFAF8]
                      p-4
                    "
                  >
                    <BadgeCheck
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#B98773]"
                    />

                    <span className="mt-4 text-[9px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#514844]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Small Visuals */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "/portfolio/nuit/social-1.jpg",
                "/portfolio/nuit/social-2.jpg",
                "/portfolio/nuit/social-3.jpg",
              ].map((src, index) => (
                <div
                  key={src}
                  className={`
                    group relative
                    min-h-[190px]
                    overflow-hidden
                    rounded-[18px]

                    sm:min-h-[250px]

                    lg:min-h-[220px]

                    ${
                      index === 2
                        ? "col-span-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt={`Nuit Collection social media work ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div className="absolute inset-0 bg-[#2E2927]/5" />

                  <span
                    className="
                      absolute bottom-4 left-4
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      bg-white/85
                      text-[8px]
                      font-bold
                      text-[#A97865]
                      backdrop-blur-md
                    "
                  >
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===============================
            RESPONSIBILITIES
        =============================== */}
        <div
          className="
            mt-5
            grid overflow-hidden
            rounded-[22px]
            border border-[#E6DDD8]
            bg-white

            lg:grid-cols-[0.7fr_1.3fr]
            lg:rounded-[28px]
          "
        >
          {/* Left */}
          <div
            className="
              border-b border-[#E6DDD8]
              p-6

              sm:p-8

              lg:border-b-0
              lg:border-r
              lg:p-10
              xl:p-12
            "
          >
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B98773]">
              My Role
            </p>

            <h3
              className="
                mb-5
                font-[family-name:var(--font-editorial)]
                text-[32px]
                font-medium
                leading-[1]
                tracking-[-0.03em]
                text-[#2E2927]

                sm:text-[38px]
              "
            >
              From social
              <br />
              promotion to
              <br />
              representation.
            </h3>

            <p className="max-w-[430px] text-[13px] leading-7 text-[#655B56] sm:text-[14px]">
              The role combined digital communication, promotional activity,
              influencer coordination and in-person brand representation.
            </p>
          </div>

          {/* Right */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B98773]">
              What I Managed
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="
                    rounded-[16px]
                    border border-[#EEE2DC]
                    bg-[#FCFAF8]
                    p-4

                    sm:p-5
                  "
                >
                  <div
                    className="
                      mb-4 flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-[#E6DDD8]
                      text-[#A97865]
                    "
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  <h4 className="mb-2 text-[12px] font-semibold text-[#342E2B] sm:text-[13px]">
                    {title}
                  </h4>

                  <p className="text-[10px] leading-5 text-[#746964] sm:text-[11px]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ===============================
            BRAND EXPOSURE STRIP
        =============================== */}
        <div
          className="
            mt-5
            rounded-[22px]
            bg-[#DDC0B4]
            px-5 py-7

            sm:px-8 sm:py-8

            lg:rounded-[28px]
            lg:px-10
          "
        >
          <div
            className="
              grid gap-7

              lg:grid-cols-[220px_1fr]
              lg:items-center
            "
          >
            <div>
              <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#8F6252]">
                Brand Exposure
              </p>

              <h3
                className="
                  font-[family-name:var(--font-editorial)]
                  text-[27px]
                  font-medium
                  leading-[1]
                  text-[#2E2927]

                  sm:text-[31px]
                "
              >
                Digital reach.
                <br />
                Real-world presence.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
               {
  title: "Influencers",
  subtitle: "Product collaborations",
  icon: Camera,
},
                {
                  title: "Meta Ads",
                  subtitle: "Paid promotion",
                  icon: Megaphone,
                },
                {
                  title: "UAE",
                  subtitle: "Exhibitions",
                  icon: Store,
                },
                {
                  title: "Qatar",
                  subtitle: "Event representation",
                  icon: ArrowUpRight,
                },
              ].map(({ title, subtitle, icon: Icon }) => (
                <div
                  key={title}
                  className="
                    rounded-[14px]
                    border border-white/40
                    bg-white/25
                    p-4
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="mb-4 text-[#8F6252]"
                  />

                  <strong className="block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#3E3430]">
                    {title}
                  </strong>

                  <span className="mt-1 block text-[9px] leading-4 text-[#675A54]">
                    {subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===============================
            BOTTOM CTA
        =============================== */}
        <div
          className="
            mt-8
            flex flex-col
            gap-4
            border-t border-[#E6DDD8]
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="max-w-[560px] text-[12px] leading-6 text-[#746964]">
            This project reflects Layla&apos;s ability to combine brand
            presentation, social media, promotion and customer-facing
            communication within one role.
          </p>

          <a
            href="#social-work"
            className="
              group inline-flex
              min-h-[50px]
              items-center justify-center
              gap-4
              border border-[#DDC0B4]
              bg-[#FBFAF8]
              px-6
              text-[9px]
              font-bold uppercase
              tracking-[0.13em]
              text-[#8F6252]
              transition-all duration-300

              hover:bg-[#DDC0B4]
              hover:text-[#2E2927]

              sm:min-w-[220px]
            "
          >
            Explore More Work

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}