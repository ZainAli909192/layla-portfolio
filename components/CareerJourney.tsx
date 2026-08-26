const roles = [
  ["2019", "Social Media Executive", "Built hands-on experience in content, publishing and community engagement."],
  ["2021", "Event Coordinator", "Supported planning, vendors, schedules and guest experiences."],
  ["2023", "Social Media Manager", "Led content direction, campaigns and reporting for brands."],
  ["2025", "Events & Operations Manager", "Managed end-to-end event operations and cross-functional coordination."],
  ["Now", "Multi-Disciplinary Professional", "Combining social media, events and management into one strong profile."],
];

export default function CareerJourney() {
  return (
    <section className="section-shell section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Career Journey</p>
          <h2>Experience Built Through Doing</h2>
          <p>
            A compact homepage preview. The detailed experience can later live
            inside the Expertise page.
          </p>
        </div>

        <div className="career-timeline">
          {roles.map(([year, role, text]) => (
            <article className="career-item" key={`${year}-${role}`}>
              <div className="career-year">{year}</div>
              <span className="career-dot" />
              <div>
                <h3>{role}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="sample-note">
          Career dates and titles are placeholders until Layla’s confirmed CV is added.
        </p>
      </div>
    </section>
  );
}
