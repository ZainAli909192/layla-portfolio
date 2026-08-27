import { BriefcaseBusiness, CalendarCheck, Globe2 } from "lucide-react";

const details = [
  { label: "Roles", value: "Social Media · Events · Management", icon: BriefcaseBusiness },
  { label: "Availability", value: "Open to selected opportunities", icon: CalendarCheck },
  { label: "Working style", value: "Dubai-based · Remote-friendly", icon: Globe2 },
];

export default function RolesAvailabilityStrip() {
  return (
    <section aria-labelledby="availability-heading" className="bg-[var(--secondary)] py-12 sm:py-16">
      <div className="mx-auto w-[min(calc(100%-32px),var(--container))] sm:w-[min(calc(100%-64px),var(--container))]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">Currently</p>
            <h2 id="availability-heading" className="m-0 max-w-[420px] font-[family-name:var(--font-editorial)] text-[clamp(2.4rem,4.5vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[var(--ink)]">
              Available for the<br /><span className="italic text-[var(--accent-dark)]">right collaboration.</span>
            </h2>
          </div>

          <dl className="grid border-y border-[var(--line)] sm:grid-cols-3">
            {details.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex min-h-[142px] items-start gap-4 border-b border-[var(--line)] py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0 lg:min-h-[160px] lg:flex-col lg:justify-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--accent-dark)]" aria-hidden="true"><Icon size={19} strokeWidth={1.5} /></span>
                <div>
                  <dt className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">{label}</dt>
                  <dd className="m-0 mt-2 text-sm font-semibold leading-6 text-[var(--ink)]">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
