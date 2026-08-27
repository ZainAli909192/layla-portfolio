import {
  Lightbulb,
  PencilRuler,
  Sparkles,
  Rocket,
  SearchCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the goals, audience, priorities and direction before anything begins.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategize",
    text: "Shape the plan, define the approach and organize the steps needed to move forward.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Create",
    text: "Turn strategy into content, concepts, communication and well-structured deliverables.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Execute",
    text: "Coordinate people, timelines and details to deliver the work clearly and effectively.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Optimize",
    text: "Review the outcome, learn from performance and refine the next step for stronger results.",
    icon: SearchCheck,
  },
];

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="
        overflow-hidden
        bg-[#F8F1EC]
        py-16

        sm:py-20
        lg:py-24
        xl:py-28
      "
    >
      <div className="mx-auto w-[min(92%,1440px)]">
        {/* ==========================================
            HEADING
        =========================================== */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-14 lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#DDC0B4]" />

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#B98773]

                sm:text-[10px]
              "
            >
              How I Work
            </p>

            <span className="h-px w-8 bg-[#DDC0B4]" />
          </div>

          <h2
            className="
              font-[family-name:var(--font-editorial)]
              text-[clamp(2.7rem,5vw,4.8rem)]
              font-medium
              leading-[1]
              tracking-[-0.04em]
              text-[#2E2927]
            "
          >
            From idea to execution
          </h2>

          <p
            className="
              mx-auto mt-4
              max-w-[620px]
              text-[13px]
              leading-6
              text-[#655B56]

              sm:text-[14px]
              sm:leading-7
            "
          >
            A clear, collaborative process that keeps strategy, creativity and
            execution aligned from beginning to end.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="
                absolute
                left-[8%] right-[8%]
                top-[68px]
                h-px
                bg-[#C98F76]/70
              "
            />

            <div className="relative z-10 grid grid-cols-5 gap-6">
              {steps.map(({ number, title, text, icon: Icon }) => (
                <article key={number} className="text-center">
                  {/* Circle */}
                  <div
                    className="
                      mx-auto
                      flex h-[136px] w-[136px]
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      border border-[#C98F76]
                      bg-[#FBF7F4]
                      shadow-[0_14px_35px_rgba(92,63,52,0.10)]

                      xl:h-[148px]
                      xl:w-[148px]
                    "
                  >
                    <span
                      className="
                        mb-3
                        font-[family-name:var(--font-editorial)]
                        text-[27px]
                        leading-none
                        text-[#B86E4F]
                      "
                    >
                      {number}
                    </span>

                    <Icon
                      size={28}
                      strokeWidth={1.35}
                      className="text-[#B86E4F]"
                    />
                  </div>

                  {/* Copy */}
                  <div className="mt-7 px-2">
                    <h3
                      className="
                        mb-2
                        font-[family-name:var(--font-editorial)]
                        text-[24px]
                        font-medium
                        leading-[1]
                        text-[#2E2927]
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mx-auto
                        max-w-[240px]
                        text-[11px]
                        leading-5
                        text-[#625750]

                        xl:text-[12px]
                        xl:leading-6
                      "
                    >
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            {/* Main vertical line */}
            <div
              className="
                absolute
                bottom-[38px]
                left-[34px]
                top-[38px]
                w-px
                bg-[#D8AE9B]
              "
            />

            {/* Decorative wave */}
            <svg
              aria-hidden="true"
              viewBox="0 0 80 520"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[16px]
                top-0
                h-full
                w-[44px]
                overflow-visible
              "
            >
              <path
                d="
                  M40 0
                  C72 45, 72 85, 40 120
                  C8 155, 8 195, 40 230
                  C72 265, 72 305, 40 340
                  C8 375, 8 415, 40 450
                  C65 478, 65 500, 40 520
                "
                fill="none"
                stroke="#DDC0B4"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.65"
              />

              <path
                d="
                  M40 0
                  C18 50, 18 88, 40 120
                  C62 152, 62 196, 40 230
                  C18 264, 18 306, 40 340
                  C62 374, 62 418, 40 450
                  C20 478, 20 500, 40 520
                "
                fill="none"
                stroke="#B98773"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.65"
              />
            </svg>

            {/* Steps */}
            <div className="relative z-10 space-y-10 sm:space-y-12">
              {steps.map(({ number, title, text, icon: Icon }) => (
                <article
                  key={number}
                  className="
                    grid
                    grid-cols-[68px_1fr]
                    gap-5

                    sm:grid-cols-[76px_1fr]
                    sm:gap-6
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-[68px] w-[68px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B86E4F]
                      font-[family-name:var(--font-editorial)]
                      text-[21px]
                      font-semibold
                      text-white
                      shadow-[0_10px_25px_rgba(120,75,58,0.18)]

                      sm:h-[76px]
                      sm:w-[76px]
                      sm:text-[23px]
                    "
                  >
                    {number}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3
                        className="
                          font-[family-name:var(--font-editorial)]
                          text-[27px]
                          font-medium
                          leading-[1]
                          tracking-[-0.02em]
                          text-[#2E2927]

                          sm:text-[30px]
                        "
                      >
                        {title}
                      </h3>

                      <span
                        className="
                          hidden
                          h-9 w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#E6DDD8]
                          text-[#A97865]

                          sm:flex
                        "
                      >
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                    </div>

                    <p
                      className="
                        max-w-[430px]
                        text-[12px]
                        leading-6
                        text-[#625750]

                        sm:text-[13px]
                        sm:leading-7
                      "
                    >
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}