const quotes = [
  {
    quote:
      "Layla combines creativity with structure. She keeps people aligned, communicates clearly and stays focused on the outcome.",
    name: "Professional Recommendation",
    role: "Replace with verified testimonial",
  },
  {
    quote:
      "Her strength is the ability to move from idea to execution without losing the details that make the final experience feel polished.",
    name: "Client / Manager Recommendation",
    role: "Replace with verified testimonial",
  },
];

export default function Testimonials() {
  return (
    <section className="section-shell testimonials-section">
      <div className="container">
        <p className="eyebrow centered">What People Say</p>
        <div className="testimonials-grid">
          {quotes.map((item) => (
            <blockquote key={item.quote}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
