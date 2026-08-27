import Image from "next/image";
import ManagedTimeline from "./ManagedTimeline";
import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Megaphone,
  Store,
} from "lucide-react";

const responsibilities = [
  {
    title: "Content & Brand Presentation",
    text: "Managing product presentation, content direction and brand consistency across social channels.",
  },
  {
    title: "Customer Communication",
    text: "Supporting customer interaction and maintaining a clear, professional brand voice.",
  },
  {
    title: "Influencer Collaboration",
    text: "Coordinating product gifting and promotional collaborations with Instagram bloggers and influencers.",
  },
  {
    title: "Paid Promotion",
    text: "Running Meta advertising campaigns to support visibility and reach target audiences.",
  },
];

const exposure = [
  "Influencer Collaborations",
  "Meta Advertising",
  "UAE Exhibitions",
  "Qatar Event Representation",
];

const galleryImages = [
  "/portfolio/nuitmain.jpeg",
  "/portfolio/nuit2.png", 
  "/portfolio/nuit3.png",
    "/portfolio/nuit13.jpg",
  "/portfolio/nuit14.jpeg",

];

export default function NuitCollectionCaseStudy() {
  return (
    <section
      id="nuit-collection"
      className="overflow-hidden bg-[#F8F3F0] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-[min(92%,1440px)]">

        {/* =========================================
            CASE STUDY HEADER
        ========================================== */}
        <div
          className="
            mb-10
            grid gap-7

            lg:mb-14
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-end
          "
        >
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#B98773] sm:text-[10px]">
              Featured Brand / 02
            </p>

            <span className="font-[family-name:var(--font-editorial)] text-[52px] leading-none text-[#DDC0B4] sm:text-[64px]">
              02
            </span>
          </div>

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
                hidden
                mt-5
                max-w-[520px]
                text-[13px]
                leading-7
                text-[#655B56]

                sm:block
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

        {/* =========================================
            MAIN EDITORIAL LAYOUT
        ========================================== */}
        <div
          className="
            grid gap-4

            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-5
          "
        >
          {/* MAIN IMAGE */}
          <div
            className="
              group relative
              min-h-[500px]
              overflow-hidden
              rounded-[22px]
              bg-[#E6DDD8]

              sm:min-h-[620px]

              lg:min-h-[760px]
              lg:rounded-[28px]
            "
          >
            <Image
              src="/portfolio/nuitmain2.jpeg"
              alt="Nuit Collection fashion brand work"
              fill
              priority
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

          {/* =========================================
              RIGHT SIDE
          ========================================== */}
          <div className="grid gap-4">

            {/* BRAND STORY */}
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

              <p className="hidden max-w-[620px] text-[13px] leading-7 text-[#655B56] sm:block sm:text-[14px]">
                Layla built and represented Nuit Collection as an abaya brand,
                managing customer communication, product presentation, social
                promotion and promotional partnerships.
              </p>

              {/* EXPOSURE TAGS */}
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

            {/* =========================================
                EDITORIAL IMAGE GRID
            ========================================== */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className={`
                    group relative
                    min-h-[190px]
                    overflow-hidden
                    rounded-[18px]
                    bg-[#E6DDD8]

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

        {/* =========================================
            WHAT I MANAGED
        ========================================== */}
        <ManagedTimeline items={responsibilities} />

        {/* =========================================
            BRAND EXPOSURE
        ========================================== */}
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

                  <span className="mt-1 hidden text-[9px] leading-4 text-[#675A54] sm:block">
                    {subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            CASE STUDY FOOTER
        ========================================== */}
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
          <p className="hidden max-w-[560px] text-[12px] leading-6 text-[#746964] sm:block">
            This project reflects Layla&apos;s ability to combine brand
            presentation, social media, promotion and customer-facing
            communication within one role.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://www.instagram.com/nuitcollection/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex
                min-h-[50px]
                items-center justify-center
                gap-4
                border border-[#DDC0B4]
                bg-[var(--primary)]
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
              Instagram Account

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
              />
            </a>

            <a
              href="#social-work"
              className="
                group hidden
                min-h-[50px]
                items-center justify-center
                gap-4
                border border-[#DDC0B4]
                bg-[var(--primary)]
                px-6
                text-[9px]
                font-bold uppercase
                tracking-[0.13em]
                text-[#8F6252]
                transition-all duration-300

                hover:bg-[#DDC0B4]
                hover:text-[#2E2927]

                sm:min-w-[220px]
                sm:inline-flex
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
      </div>
    </section>
  );
}