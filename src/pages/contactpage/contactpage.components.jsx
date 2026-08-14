import React from "react";
import "./contactpage.styles.scss";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <section className="contact-wrapper">
      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-item">
          <h3>EMAIL</h3>
          <a href="mailto:info@example.com">
            info@example.com
          </a>
        </div>

        <div className="info-item">
          <h3>PHONE</h3>
          <a href="tel:+353000000000">
            +353 00 000 0000
          </a>
        </div>

        <div className="info-item">
          <h3>LOCATION</h3>
          <p>Dublin, Ireland</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">SUBJECT</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default ContactPage;