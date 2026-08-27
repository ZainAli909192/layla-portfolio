import { Command } from "lucide-react";

type ManagedItem = {
  title: string;
  text: string;
};

type ManagedTimelineProps = {
  items: ManagedItem[];
};

export default function ManagedTimeline({
  items,
}: ManagedTimelineProps) {
  return (
    <section
      className="
        mt-5
        overflow-hidden
        rounded-[22px]
        bg-[#E6DDD8]
        px-5
        py-10

        sm:rounded-[28px]
        sm:px-10
        sm:py-14

        lg:px-16
        lg:py-16
      "
    >
      {/* =========================
          Heading
      ========================== */}
      <header className="mx-auto mb-10 text-center sm:mb-14">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span
            className="h-px w-8 bg-[#DDC0B4]"
            aria-hidden="true"
          />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#2E2927]

              sm:text-[11px]
            "
          >
            What I Managed
          </p>

          <span
            className="h-px w-8 bg-[#DDC0B4]"
            aria-hidden="true"
          />
        </div>

        <h3
          className="
            font-[family-name:var(--font-editorial)]
            text-[34px]
            font-medium
            leading-[0.98]
            tracking-[-0.035em]
            text-[#2E2927]

            sm:text-[44px]
            lg:text-[48px]
          "
        >
          From strategy to impact
        </h3>

        <Command
          aria-hidden="true"
          className="mx-auto mt-3 text-[#DDC0B4]"
          size={28}
          strokeWidth={1.5}
        />
      </header>

      {/* =========================
          Timeline
      ========================== */}
      <div className="relative mx-auto max-w-[760px]">
        {/* Decorative flowing line */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-7
            left-[35px]
            top-7
            w-[48px]

            sm:left-[43px]
            sm:w-[62px]
          "
        >
          <svg
            viewBox="0 0 64 600"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            {/* Wide soft ribbon */}
            <path
              d="
                M18 0
                C72 65, -20 115, 28 180
                C72 238, -14 295, 30 360
                C75 425, -18 492, 23 550
                C39 574, 43 585, 16 600
              "
              fill="none"
              stroke="#DDC0B4"
              strokeWidth="17"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Thin secondary line */}
            <path
              d="
                M18 0
                C72 65, -20 115, 28 180
                C72 238, -14 295, 30 360
                C75 425, -18 492, 23 550
                C39 574, 43 585, 16 600
              "
              fill="none"
              stroke="#E6DDD8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Straight vertical guide */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-8
            left-[35px]
            top-8
            w-px
            bg-[#DDC0B4]

            sm:left-[43px]
          "
        />

        {/* Steps */}
        <ol className="relative grid gap-6 sm:gap-8">
          {items.map(({ title, text }, index) => (
            <li
              key={title}
              className="
                grid
                min-h-[122px]
                grid-cols-[72px_1fr]
                items-start
                gap-6

                sm:min-h-[138px]
                sm:grid-cols-[88px_1fr]
                sm:gap-8
              "
            >
              {/* Number */}
              <span
                className="
                  relative
                  z-10

                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center

                  rounded-full
                  border-[5px]
                  border-[#E6DDD8]
                  bg-[#DDC0B4]

                  font-[family-name:var(--font-editorial)]
                  text-[18px]
                  font-bold
                  text-white

                  shadow-[0_10px_26px_rgba(0,0,0,0.08)]

                  sm:h-[86px]
                  sm:w-[86px]
                  sm:text-[21px]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="pt-1 sm:pt-2">
                <h4
                  className="
                    mb-2
                    font-[family-name:var(--font-editorial)]
                    text-[25px]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-[#2E2927]

                    sm:text-[30px]
                  "
                >
                  {title}
                </h4>

                <p
                  className="
                    max-w-[540px]
                    text-[13px]
                    leading-6
                    text-[#2E2927]/75

                    sm:text-[14px]
                    sm:leading-7
                  "
                >
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}