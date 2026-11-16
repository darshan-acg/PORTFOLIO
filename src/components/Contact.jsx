import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=darshan.acg2003@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className={`section reveal ${visible ? "active" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <p>Contact</p>
          <h2>Let’s Connect</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-card glass-card contact-info-card">
            <h3>Contact Details</h3>

            <div className="contact-row">
              <strong>Name</strong>
              <span>Darshan A.C</span>
            </div>

            <div className="contact-row">
              <strong>Email</strong>
              <a href="mailto:darshan.acg2003@gmail.com">darshan.acg2003@gmail.com</a>
            </div>

            <div className="contact-row">
              <strong>Phone</strong>
              <a href="tel:+919731175349">+91 9731175349</a>
            </div>

            <div className="contact-row">
              <strong>Location</strong>
              <span>Bengaluru</span>
            </div>

            <div className="contact-row">
              <strong>GitHub</strong>
              <a href="https://github.com/darshan-acg" target="_blank" rel="noreferrer">
                github.com/darshan-acg
              </a>
            </div>

            <div className="contact-row">
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/darshan-a-c-12547036a"
                target="_blank"
                rel="noreferrer"
              >
                darshan-a-c-12547036a
              </a>
            </div>

            <div className="contact-quick-actions">
              <a href="mailto:darshan.acg2003@gmail.com" className="secondary-btn">
                Email Me
              </a>
              <a href="/resume.pdf" download className="primary-btn">
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact-card glass-card contact-form-card">
            <h3>Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Write your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="primary-btn full-btn">
                Open in Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}