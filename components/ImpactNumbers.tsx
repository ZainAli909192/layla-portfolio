const stats = [
  { value: "2.4M+", label: "Total Reach" },
  { value: "50+", label: "Campaigns Delivered" },
  { value: "30+", label: "Events Managed" },
  { value: "12+", label: "Brands Managed" },
  { value: "5+", label: "Years Experience" },
];

export default function ImpactNumbers() {
  return (
    <section className="impact-section">
      <div className="container">
        <div className="section-heading centered-heading light-heading">
          <p className="eyebrow">Impact In Numbers</p>
          <h2>Results, Made Visible.</h2>
        </div>

        <div className="impact-chart">
          <svg
            className="impact-line"
            viewBox="0 0 1200 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,125 C120,110 150,85 240,100 C340,118 365,145 455,120 C540,97 565,38 650,60 C730,82 780,135 870,112 C960,88 1010,52 1200,75"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

          <div className="impact-grid">
            {stats.map((stat, index) => (
              <div className={`impact-stat impact-${index + 1}`} key={stat.label}>
                <span className="impact-dot" />
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>

        <p className="sample-note light-note">
          Sample values shown for layout purposes.
        </p>
      </div>
    </section>
  );
}
