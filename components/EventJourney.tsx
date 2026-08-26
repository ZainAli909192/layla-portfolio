const steps = [
  ["01", "Concept", "Understand the purpose and define the right idea."],
  ["02", "Planning", "Build timelines, budgets and detailed plans."],
  ["03", "Vendors", "Select and coordinate the right partners."],
  ["04", "Coordination", "Manage logistics, schedules and stakeholders."],
  ["05", "Execution", "Own the on-site experience and delivery."],
  ["06", "Experience", "Create a result people remember."],
];

export default function EventJourney() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="section-heading centered-heading">
          <p className="eyebrow">Event Journey</p>
          <h2>From Idea to Unforgettable Experience</h2>
        </div>

        <div className="journey">
          <div className="journey-line" aria-hidden="true" />
          {steps.map(([number, title, description]) => (
            <article className="journey-step" key={number}>
              <div className="journey-node">
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
