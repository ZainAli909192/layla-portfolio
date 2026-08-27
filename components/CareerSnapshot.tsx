import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";

type Responsibility = {
  title: string;
  Icon: LucideIcon;
};

const responsibilities: Responsibility[] = [
  {
    title: "Content Strategy",
    Icon: CalendarDays,
  },
  {
    title: "Creative Direction",
    Icon: Palette,
  },
  {
    title: "Campaign Management",
    Icon: Megaphone,
  },
  {
    title: "Community Engagement",
    Icon: MessageCircle,
  },
];

const gallery = [
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/main.png",
];

export default function TheLabelConceptCaseStudy() {
  return (
    <section className="bg-[#F8F5F2] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-[min(90%,1340px)]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B98773] sm:text-[11px]">
              01 · Brand Management
            </p>

            <h2 className="font-[family-name:var(--font-editorial)] text-[clamp(2.7rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.04em] text-[#2B2624]">
              The Label
              <br />
              Concept
            </h2>
          </div>

          <div className="max-w-[570px] lg:justify-self-end">
            <span className="mb-5 block h-px w-10 bg-[#B98773]" />

            <p className="text-[14px] leading-7 text-[#655B56] sm:text-[15px] sm:leading-8">
              Managing the brand&apos;s social media presence through content
              strategy, creative direction, campaign coordination and community
              engagement.
            </p>

            <a
              href="https://thelabelconcept.ae"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-[#ddc0b4] p-3  rounded mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#B98773] transition-opacity hover:scale-[1.3] transition-all duration-1000 ease-in-out" 
            > 
              Visit Website
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>
               <a
              href="https://instagram.com/thelabelconcept"
              target="_blank"
              rel="noopener noreferrer" 
              className=" ml-3 bg-[#ddc0b4] p-3  rounded mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#B98773] transition-opacity hover:scale-[1.3] transition-all duration-1000 ease-in-out" 
            >  
              instagram 
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-[#E6DDD8]">
          <div className="relative aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/about/tlc.png"
              alt="The Label Concept"
              fill
              sizes="(max-width: 768px) 90vw, 1340px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 lg:bottom-12 lg:left-12">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                Current Role
              </p>

              <h3 className="max-w-[480px] font-[family-name:var(--font-editorial)] text-[28px] font-medium leading-[1.05] text-white sm:text-[38px] lg:text-[48px]">
                Social Media
                <br />
                Management
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {responsibilities.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex min-h-[90px] items-center gap-3 rounded-[16px] border border-[#E6DDD8] bg-white/70 px-4 py-4 sm:min-h-[105px] sm:px-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6DDD8] text-[#B98773] sm:h-10 sm:w-10">
                <Icon size={17} strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-semibold leading-4 text-[#3D3532] sm:text-[11px]">
                {title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#E6DDD8] pt-10 sm:mt-16 sm:pt-12">
          <div className="mb-7 flex items-end justify-between">
            <div>
              

              <h3 className="font-[family-name:var(--font-editorial)] text-[32px] font-medium tracking-[-0.03em] text-[#2B2624] sm:text-[42px]">
                Creative Work
              </h3>
            </div>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-[#9A8C85] sm:block">
              Social · Campaigns · Content
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-[18px] bg-[#E6DDD8] ${
                  index === 0
                    ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[4/5]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image}
                  alt={`The Label Concept work ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/[0.04] transition-colors duration-300 group-hover:bg-black/[0.12]" />

              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#E6DDD8] pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B98773]">
              Approach
            </p>
          </div>

          <div>
            <p className="max-w-[720px] font-[family-name:var(--font-editorial)] text-[25px] font-medium leading-[1.25] tracking-[-0.025em] text-[#352E2B] sm:text-[32px] lg:text-[38px]">
              Building a consistent digital presence where strategy and
              creativity work together.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Content Planning",
                "Creative Direction",
                "Campaigns",
                "Community",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#DDC0B4] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.11em] text-[#80665B] sm:text-[9px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}