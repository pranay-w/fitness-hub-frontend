import { useState } from "react";
import InfoPanel from "../InfoPanel";
import PageHero from "../PageHero";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const contactVideo = `${import.meta.env.BASE_URL}assets/vedios/hero-bg.mp4`;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm(initialForm);
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Send us a message and someone from the team will get back to you shortly."
      />
      <section className="section-block">
        <div className="container stacked-layout">
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Tell us about your goals"
                rows="6"
                value={form.message}
                onChange={handleChange}
              />
              <button className="button button-primary" type="submit">
                Send Message
              </button>
            </form>

            <div className="contact-media">
              <video src={contactVideo} autoPlay loop muted playsInline preload="metadata" />
            </div>
          </div>

          <InfoPanel title="Prefer visiting?">
            You can walk in during staffed hours, tour the facility, and speak with
            a coach before choosing a membership.
          </InfoPanel>
        </div>
      </section>
    </>
  );
}

export default Contact;
