import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "Laylaouda@gmail.com",
    note: "For project enquiries and collaborations",
    href: "mailto:Laylaouda@gmail.com",
    cta: "Write an email",
    badge: "Replies in 24–48 hours",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+971 50 920 4222",
    note: "For a quick introduction or project brief",
    href: "https://wa.me/+971509204222",
    cta: "Message directly",
    badge: "Quickest response",
    icon: MessageCircle,
  },
  {
    label: "Based in",
    value: "Abu Dhabi, UAE",
    note: "Available for local and remote collaboration",
    href: "mailto:Laylaouda@gmail.com?subject=Project%20enquiry%20from%20Dubai",
    cta: "Discuss a project",
    badge: "Local + remote",
    icon: MapPin,
  },
];

export default function ContactCards() {
  return (
    <main id="contact" className="overflow-hidden bg-[var(--paper)] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-[min(calc(100%-32px),var(--container))] sm:w-[min(calc(100%-64px),var(--container))]">
        <div className="grid gap-10 border-t border-[var(--line)] pt-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--primary)]" aria-hidden="true" />
              <p className="m-0 text-[11px] font-bold  tracking-[0.22em] text-[var(--accent-dark)]">Contact</p>
            </div>
            <h1 className="m-0 max-w-[700px] font-[family-name:var(--font-editorial)] text-[clamp(3.5rem,8vw,7rem)] font-samll leading-[0.88] tracking-[-0.055em] text-[var(--ink)]">
              Let&apos;s begin<br />
              <span className="italic text-[var(--accent-dark)]">with a hello.</span>
            </h1>
          </div>

          <div className="max-w-[570px] lg:justify-self-end">
            <p className="m-0 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              Have a brand to grow, an event to shape or a project that needs thoughtful coordination? Share what you have in mind.
            </p>
            <p className="mb-0 mt-5 text-sm font-semibold text-[var(--ink)]">Clear ideas are welcome. Early ideas are too.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          {contacts.map(({ label, value, note, href, cta, badge, icon: Icon }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={`group relative isolate flex min-h-[340px] touch-manipulation flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border p-7 shadow-[var(--shadow)] transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-1 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-dark)] motion-reduce:transform-none motion-reduce:transition-none sm:p-8 lg:min-h-[430px] lg:p-9 xl:p-10 ${
                index === 0
                  ? "border-[var(--line)] bg-[var(--white)] hover:bg-[var(--paper)] sm:col-span-2 lg:col-span-5"
                  : index === 1
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--white)] sm:col-span-1 lg:col-span-4"
                    : "border-[var(--primary)] bg-[var(--secondary)] sm:col-span-1 lg:col-span-3"
              }`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={0.7}
                className={`pointer-events-none absolute -bottom-8 -right-8 -z-10 h-44 w-44 rotate-[-8deg] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${index === 1 ? "text-[var(--white)] opacity-[0.07]" : "text-[var(--primary)] opacity-30"}`}
              />

              <div className="flex items-start justify-between gap-5">
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-full border transition-[transform,background-color] duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 motion-reduce:transform-none ${index === 1 ? "border-[var(--muted)] bg-[var(--white)] text-[var(--ink)]" : "border-[var(--line)] bg-[var(--paper)] text-[var(--accent-dark)]"}`} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                  <span className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 ${index === 1 ? "border-[var(--ink)] bg-[var(--primary)]" : "border-[var(--white)] bg-[var(--accent-dark)]"}`} />
                </span>
                <span className={`font-[family-name:var(--font-editorial)] text-5xl leading-none ${index === 1 ? "text-[var(--primary)]" : "text-[var(--accent-dark)]"}`}>0{index + 1}</span>
              </div>

              <div className="mt-14">
               
               
                  <p className={`mb-0 mt-5 max-w-[340px] text-[15px] leading-7 ${index === 1 ? "text-[var(--secondary)]" : "text-[var(--muted)]"}`}>
                  {index === 0 ? <><span>Laylaouda@</span><wbr /><span>gmail.com</span></> : value}
                    </p>
            
                <p className={`mb-0 mt-5 max-w-[340px] text-[15px] leading-7 ${index === 1 ? "text-[var(--secondary)]" : "text-[var(--muted)]"}`}>{note}</p>
              </div>

              <span className={`mt-9 inline-flex min-h-12 items-center justify-between gap-4 border-t pt-5 text-[10px] font-bold uppercase tracking-[0.14em] ${index === 1 ? "border-[var(--muted)] text-[var(--white)]" : "border-[var(--line)] text-[var(--ink)]"}`}>
                <span>{cta}</span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] duration-200 group-hover:rotate-45 ${index === 1 ? "bg-[var(--primary)] text-[var(--ink)]" : "bg-[var(--ink)] text-[var(--white)]"}`} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
