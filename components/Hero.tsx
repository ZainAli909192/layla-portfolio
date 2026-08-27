import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden bg-[#f8f5f2]

        min-h-[600px]

        sm:min-h-[680px]

        lg:min-h-0
        lg:aspect-[3/2]

        xl:aspect-[16/9]
      "
    >
      {/* Background image */}
      <Image
        src="/finalctaimg.png" 
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          -z-20

          object-cover

          /* Mobile: keep Layla visible */
          object-[76%_center]

          sm:object-[70%_center]

          /* Laptop */
          lg:object-contain
          lg:object-top

          /* Large desktop */
          xl:object-cover
          xl:object-center
        "
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10

          /* Mobile */
          bg-[linear-gradient(90deg,rgba(250,248,246,0.98)_0%,rgba(250,248,246,0.90)_8%,rgba(250,248,246,0.18)_78%,transparent_100%)]

          /* Tablet */
          sm:bg-[linear-gradient(90deg,rgba(250,248,246,0.97)_0%,rgba(250,248,246,0.84)_48%,rgba(250,248,246,0.12)_78%,transparent_100%)]

          /* Desktop */
          lg:bg-[linear-gradient(90deg,rgba(250,248,246,0.04)_0%,rgba(250,248,246,0.02)_42%,transparent_62%)]
        "
      />

      {/* Content */}
      <div
        className="
          mx-auto flex
          min-h-[600px]
          w-[min(88%,1340px)]
          items-center

          sm:min-h-[680px]

          lg:absolute
          lg:inset-0
          lg:min-h-0

          xl:relative
          xl:min-h-[90dvh]
        "
      >
        <div
          className="
            w-[72%]
            max-w-[380px]

            sm:w-full
            sm:max-w-[620px]

            lg:w-[46%]
            lg:max-w-[680px]
          "
        >
          {/* Hidden on mobile */}
          <p
            className="
              

              sm:mb-5
              sm:block
              sm:text-[11px]
              sm:font-bold
              sm:uppercase
              sm:tracking-[0.18em]
              sm:text-[#b98773]

              lg:text-xs
            "
          >
            Hello, I&apos;m Layla
          </p>

         <h1
  className="
    mb-7
    font-[family-name:var(--font-editorial)]
    text-[38px]
    font-medium
    leading-[0.98]
    tracking-[-0.035em]
    text-[#272220]

    max-[380px]:text-[34px]

    sm:mb-6
    sm:text-[20px] 

    md:text-[54px]

    lg:text-[clamp(2.75rem,4.4vw,4rem)]
  "
>
  Strategy in mind.
  <br />
  Creativity in action.
  <br />
  Results that{" "}
  <span className="relative inline-block text-[#b98773]">
    matter.
    <span
      aria-hidden="true"
      className="
        absolute -bottom-1 left-0
        h-px w-full
        bg-[#b98773]/45
      "
    />
  </span>
</h1>

          {/* Hidden on mobile */}
          <p
            className="
              mb-8 hidden
              max-w-[475px]
              text-sm
              leading-6
              text-[#4f4743]

              sm:block
              sm:text-[15px]
              sm:leading-7
            "
          >
            I help brands grow online, create unforgettable events,
            <br className="hidden sm:block" />
            and manage projects &amp; people with purpose.
          </p>

          <div className="flex">
            <a
              href="/portfolio"
              className="
                group inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-6

                border border-[#d9aa96]
                bg-[#d9aa96]

                px-7

                text-[10px]
                font-bold
                uppercase
                tracking-[0.05em]
                text-white

                transition-colors

                hover:bg-[#c9947e]

                sm:min-h-12
                sm:text-[11px]
                rounded  
              "
            >
              View my work

            
            </a>

            {/* Hidden on mobile */}
            <a
              href="#contact"
              className="
                ml-4 hidden

                min-h-12
                items-center
                justify-center
                gap-5

                border border-[#d9aa96]
                bg-white/35

                px-6

                text-[11px]
                font-bold
                uppercase
                tracking-[0.045em]
                text-[#6e574d]

                transition-colors

                hover:bg-white/70

                sm:inline-flex
              "
            >
              Let&apos;s connect

              <span
                aria-hidden="true"
                className="
                  text-xl
                  font-light
                  leading-none
                "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}