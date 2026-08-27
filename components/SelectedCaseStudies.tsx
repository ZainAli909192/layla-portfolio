const cases = [
  {
    category: "Social Media",
    title: "Social Media Campaign",
    subtitle: "Beauty Brand",
    image: "/case-social.svg",
    description:
      "Developed a structured content and engagement direction focused on consistency, audience interaction and brand positioning.",
    stats: ["+42% Engagement", "1.2M Reach", "+28% Followers"],
  },
  {
    category: "Events",
    title: "Corporate Event",
    subtitle: "250 Guests",
    image: "/case-event.svg",
    description:
      "Managed the event lifecycle from planning and supplier coordination through guest experience and on-site execution.",
    stats: ["12 Vendors", "250+ Attendees", "100% On-time"],
  },
  {
    category: "Management",
    title: "Brand Launch",
    subtitle: "End-to-End Coordination",
    image: "/case-launch.svg",
    description:
      "Aligned content, teams, event logistics and stakeholder communication around one clear launch plan.",
    stats: ["3.4M Reach", "+65% Engagement", "1 Launch"],
  },
];

export default function SelectedCaseStudies() {
  return (
    <section id="portfolio" className="section-shell">
      <div className="container">
        <div className="section-heading portfolio-heading">
          <div>
            <h2>Work That Shows The Thinking Behind The Result</h2>
          </div>
          <a className="text-link" href="/PORTFOLIO">
            View full portfolio 
          </a>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className="case-card" key={item.title}>
              <div className="case-image">
                <img src={item.image} alt="" />
                <span className="case-index">0{index + 1}</span>
              </div>
              <div className="case-content">
                <p className="case-category">{item.category}</p>
                <h3>{item.title}</h3>
                <strong className="case-subtitle">{item.subtitle}</strong>
                <p>{item.description}</p>
                <div className="case-stats">
                  {item.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="sample-note">
          Case-study names and metrics are placeholders until Layla’s real work is added.
        </p>
      </div>
    </section>
  );
}
