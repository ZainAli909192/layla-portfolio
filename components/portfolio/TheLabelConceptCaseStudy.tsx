{/* Compact Project Details */}
<div
  className="
    mt-5
    grid overflow-hidden
    rounded-[22px]
    border border-[#E6DDD8]
    bg-white

    lg:grid-cols-[0.9fr_1.1fr]
    lg:rounded-[28px]
  "
>
  {/* Project Summary */}
  <div
    className="
      border-b border-[#E6DDD8]
      p-6

      sm:p-8

      lg:border-b-0
      lg:border-r
      lg:p-10
    "
  >
    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B98773]">
      The Project
    </p>

    <h3
      className="
        mb-4
        font-[family-name:var(--font-editorial)]
        text-[30px]
        font-medium
        leading-[1]
        tracking-[-0.03em]
        text-[#2E2927]

        sm:text-[36px]
      "
    >
      Building a consistent
      <br className="hidden sm:block" />
      brand presence.
    </h3>

    <p
      className="
        max-w-[470px]
        text-[12px]
        leading-6
        text-[#655B56]

        sm:text-[13px]
        sm:leading-7
      "
    >
      Managing social media, content direction and campaign
      communication for The Label Concept.
    </p>

    <a
      href="https://thelabelconcept.ae"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group mt-6
        inline-flex items-center gap-3
        border-b border-[#B98773]
        pb-2

        text-[9px]
        font-bold
        uppercase
        tracking-[0.13em]
        text-[#A97865]
      "
    >
      Visit Website

      <ArrowUpRight
        size={15}
        strokeWidth={1.6}
        className="
          transition-transform duration-300
          group-hover:-translate-y-[2px]
          group-hover:translate-x-[2px]
        "
      />
    </a>
  </div>

  {/* Responsibilities */}
  <div className="p-6 sm:p-8 lg:p-10">
    <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B98773]">
      What I Manage
    </p>

    <div className="grid grid-cols-2 gap-3">
      {responsibilities.map(({ title, icon: Icon }) => (
        <div
          key={title}
          className="
            flex min-h-[74px]
            items-center gap-3
            rounded-[14px]
            border border-[#EEE2DC]
            bg-[#FCFAF8]
            px-4 py-3

            sm:min-h-[82px]
            sm:gap-4
            sm:px-5
          "
        >
          <span
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              bg-[#E6DDD8]
              text-[#A97865]

              sm:h-10 sm:w-10
            "
          >
            <Icon size={16} strokeWidth={1.5} />
          </span>

          <span
            className="
              text-[10px]
              font-semibold
              leading-[1.35]
              text-[#3F3733]

              sm:text-[12px]
            "
          >
            {title}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>