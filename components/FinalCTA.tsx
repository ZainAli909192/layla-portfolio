export default function FinalCTA() {
  const highlights = [
    {
      title: "Strategic",
      subtitle: "Thinking",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M12 3L19 7V15L12 19L5 15V7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M8.5 10.5L11 13L15.5 8.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Creative",
      subtitle: "Execution",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="9"
            r="5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M9 14L8 21L12 18.5L16 21L15 14"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Reliable",
      subtitle: "Delivery",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="13"
            r="7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 9V13L14.5 14.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M9 3H15"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "People",
      subtitle: "Focused",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M4 11H20V21H4V11Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 11V21M4 15H20"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 11C9.5 11 7.5 9.7 7.5 7.8C7.5 6.6 8.4 5.8 9.5 5.8C11.1 5.8 12 7.5 12 11Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 11C14.5 11 16.5 9.7 16.5 7.8C16.5 6.6 15.6 5.8 14.5 5.8C12.9 5.8 12 7.5 12 11Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="
        bg-[#FBFAF8]
        px-4 py-16
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[28px]
          border border-[#E6DDD8]
          bg-white
          shadow-[0_24px_80px_rgba(73,54,46,0.08)]
        "
      >
        {/* ==================================================
            MAIN CTA
        ================================================== */}
        <div
          className="
            relative isolate
            min-h-[590px]
            overflow-hidden

            sm:min-h-[620px]

            lg:min-h-0
            lg:aspect-[16/7]

            xl:aspect-[16/6.6]
          "
        >
          {/* ==================================================
              BACKGROUND IMAGE
              Keep herobg.png
          ================================================== */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 -z-20

              bg-[#E6DDD8]
              bg-no-repeat

              bg-cover
              bg-[position:68%_top]

              sm:bg-[position:70%_top]

              lg:bg-cover
              lg:bg-top

              xl:bg-cover
              xl:bg-top

              2xl:bg-cover
              2xl:bg-top
            "
            style={{
              backgroundImage: "url('/finalctabanner.png')",
            }}
          />

          {/* ==================================================
              DARK GRADIENT
          ================================================== */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 -z-10

              bg-[linear-gradient(180deg,rgba(46,41,39,0.88)_0%,rgba(46,41,39,0.76)_55%,rgba(46,41,39,0.30)_100%)]

              lg:bg-[linear-gradient(90deg,rgba(46,41,39,0.94)_0%,rgba(46,41,39,0.88)_30%,rgba(46,41,39,0.70)_48%,rgba(46,41,39,0.22)_72%,rgba(46,41,39,0.03)_100%)]
            "
          />

          {/* ==================================================
              CONTENT
          ================================================== */}
          <div
            className="
              mx-auto
              flex
              min-h-[590px]
              w-[min(88%,1340px)]
              items-center

              sm:min-h-[620px]

              lg:absolute
              lg:inset-0
              lg:min-h-0
            "
          > 
            <div
              className="
                w-full
                max-w-[620px]
                py-14
                text-white

                sm:py-16

                lg:w-[48%]
                lg:max-w-[610px]
                lg:py-10

                xl:max-w-[650px]
              "
            >
              {/* Eyebrow */}
              <p
                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#DDC0B4]

                  sm:text-[11px]
                "
              >
                Let&apos;s Work Together
              </p>

              {/* Heading */}
              <h2
                className="
                  mb-6
                  font-[family-name:var(--font-editorial)]
                  text-[clamp(2.8rem,5vw,5.2rem)]
                  font-medium
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white

                  lg:text-[clamp(3rem,4.2vw,4.7rem)]
                "
              >
                Let&apos;s create
                <br />
                something{" "}
                <span className="italic text-[#DDC0B4]">
                  meaningful.
                </span>
              </h2>

              {/* Small line */}
              <span className="mb-6 block h-px w-12 bg-[#DDC0B4]" />

              {/* Description */}
              <p
                className="
                  mb-7
                  max-w-[535px]
                  text-[14px]
                  leading-7
                  text-white/85

                  sm:text-[16px]
                  sm:leading-8

                  lg:text-[15px]
                  lg:leading-7
                "
              >
                Looking for someone who can think strategically, execute
                creatively and manage every detail with purpose? Let&apos;s
                connect and create work that makes an impact.
              </p>

              {/* Buttons */}
              <div
                className="
                  flex flex-col gap-3
                  sm:flex-row sm:gap-4
                "
              >
                <a
                  href="mailto:layla@example.com"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-6
                    bg-[#DDC0B4]
                    px-7

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-[#2E2927]

                    transition
                    duration-300

                    hover:bg-[#CFA99A]

                    sm:min-w-[190px]
                  "
                >
                  Let&apos;s Connect

                  <span
                    aria-hidden="true"
                    className="
                      text-xl
                      font-light
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>

                <a
                  href="/layla-oud-cv.pdf"
                  download
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-5

                    border border-white/40
                    bg-white/10
                    px-7

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-white

                    backdrop-blur-sm
                    transition
                    duration-300

                    hover:bg-white/20

                    sm:min-w-[190px]
                  "
                >
                  Download CV

                  <span
                    aria-hidden="true"
                    className="
                      text-lg
                      font-light
                      transition-transform
                      duration-300
                      group-hover:translate-y-1
                    "
                  >
                    ↓
                  </span>
                </a>
              </div>

              {/* Meta */}
              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-2

                  text-[9px]
                  uppercase
                  tracking-[0.1em]
                  text-white/60

                  sm:text-[10px]
                "
              >
                <span>Dubai, UAE</span>

                <span className="text-[#DDC0B4]">•</span>

                <span>Social Media</span>

                <span className="text-[#DDC0B4]">•</span>

                <span>Events</span>

                <span className="text-[#DDC0B4]">•</span>

                <span>Management</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM INFOGRAPHIC
        ================================================== */}
        <div
          className="
            grid
            grid-cols-2
            bg-[#F1E5DF]

            lg:grid-cols-4
          "
        >
          {highlights.map((item, index) => (
            <div
              key={`${item.title}-${item.subtitle}`}
              className={`
                relative
                flex
                min-h-[100px]
                items-center
                gap-4
                px-5
                py-5

                sm:px-7

                lg:min-h-[92px]
                lg:justify-center
                lg:px-6

                ${
                  index % 2 === 0
                    ? "border-r border-[#D8B8AA]"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b border-[#D8B8AA] lg:border-b-0"
                    : ""
                }

                ${
                  index !== highlights.length - 1
                    ? "lg:border-r lg:border-[#D8B8AA]"
                    : "lg:border-r-0"
                }
              `}
            >
              <div className="shrink-0 text-[#B98773]">
                {item.icon}
              </div>

              <div>
                <strong
                  className="
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.04em]
                    text-[#493C36]

                    sm:text-[12px]
                  "
                >
                  {item.title}
                </strong>

                <span
                  className="
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.04em]
                    text-[#6D625D]

                    sm:text-[10px]
                  "
                >
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}