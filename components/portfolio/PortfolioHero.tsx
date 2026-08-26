"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const filters = ["All Work", "Social Media", "Brand Management", "Events"];

export default function PortfolioHero() {
  return (
    <section
      id="portfolio"
      className="
        relative isolate
        min-h-[680px]
        overflow-hidden
        bg-[#F8F5F2]

        sm:min-h-[760px]
        lg:min-h-[720px]
        xl:min-h-[820px]
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <Image
        src="/experitse.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          -z-30
          object-cover

          object-[68%_center]

          sm:object-[65%_center]

          lg:object-center
        "
      />

      {/* =========================================
          OVERLAY
      ========================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20

          bg-[linear-gradient(90deg,rgba(248,245,242,0.98)_0%,rgba(248,245,242,0.94)_32%,rgba(248,245,242,0.55)_55%,rgba(248,245,242,0.05)_82%)]

          sm:bg-[linear-gradient(90deg,rgba(248,245,242,0.98)_0%,rgba(248,245,242,0.91)_34%,rgba(248,245,242,0.40)_58%,rgba(248,245,242,0.03)_80%)]

          lg:bg-[linear-gradient(90deg,rgba(248,245,242,0.97)_0%,rgba(248,245,242,0.90)_28%,rgba(248,245,242,0.36)_48%,rgba(248,245,242,0.02)_68%)]
        "
      />

      {/* subtle bottom fade */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 -z-10
          h-[30%]
          bg-gradient-to-t
          from-[#F8F5F2]/60
          to-transparent
        "
      />

     {/* MAIN CONTENT */}
<div
  className="
    relative
    mx-auto
    flex
    min-h-[600px]
    w-[min(88%,1340px)]
    items-center
    pb-[78px]

    sm:min-h-[700px]
    lg:min-h-[720px]
    lg:pb-[105px]

    xl:min-h-[820px]
  "
>
  <div className="w-full max-w-[600px] lg:max-w-[650px]">

    {/* Eyebrow */}
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        mb-3
        text-[9px]
        font-bold
        uppercase
        tracking-[0.22em]
        text-[#B98773]

        sm:mb-5
        sm:text-[11px]
      "
    >
      Selected Work
    </motion.p>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.08 }}
      className="
        max-w-[320px]
        font-[family-name:var(--font-editorial)]
        text-[clamp(2.7rem,13vw,3.7rem)]
        font-medium
        leading-[0.9]
        tracking-[-0.045em]
        text-[#2B2624]

        sm:max-w-[520px]
        sm:text-[clamp(3.5rem,8vw,5rem)]

        lg:max-w-[600px]
        lg:text-[clamp(4rem,5.5vw,6rem)]
      "
    >
      Ideas.
      <br />
      Strategy.
      <br />
      <span className="italic text-[#B98773]">
        Execution.
      </span>
    </motion.h1>

    {/* DESKTOP / TABLET ONLY */}
    <div className="hidden sm:block">
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 52 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="my-7 block h-px bg-[#B98773]"
      />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="
          max-w-[470px]
          text-[15px]
          leading-7
          text-[#574E4A]
        "
      >
        A selection of brands, campaigns and experiences shaped through
        strategy, creativity and hands-on management.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="
          mt-7
          flex
          items-center
          gap-3
          text-[9px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-[#8D7064]
        "
      >
        <span>Social Media</span>

        <span className="h-1 w-1 rounded-full bg-[#DDC0B4]" />

        <span>Brand Management</span>

        <span className="h-1 w-1 rounded-full bg-[#DDC0B4]" />

        <span>Events</span>
      </motion.div>
    </div>
  </div>
</div>

      {/* =========================================
          FILTER BAR
      ========================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20

          border-t
          border-[#E6DDD8]/80

          bg-[#F8F5F2]/90
          backdrop-blur-md
        "
      >
        <div className="mx-auto w-[min(90%,1340px)]">
          <div
            className="
              flex
              gap-7
              overflow-x-auto

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:gap-10
              lg:gap-12
            "
          >
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`
                  relative
                  shrink-0
                  py-6

                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]

                  transition-colors
                  duration-300

                  sm:text-[10px]

                  ${
                    index === 0
                      ? "text-[#B98773]"
                      : "text-[#756A65] hover:text-[#B98773]"
                  }
                `}
              >
                {filter}

                {index === 0 && (
                  <motion.span
                    layoutId="portfolio-filter"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      bg-[#B98773]
                    "
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}