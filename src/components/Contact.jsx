import React, { useState } from "react";
export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://my-website-nine-lilac-63.vercel.app/#contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully!");

      // Clear fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Failed to send message. Try again.");
    }
  };


  return (
    <section id="contact" className="contact-continer container-fluid py-4 ">
      <h2 className="section-title color-title mb-4 text-center">Connect With Me 😊! </h2>

      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-6 contact-section">

          <form className="contact-form p-4 shadow rounded " onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control custom-placeholder"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control custom-placeholder"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control custom-placeholder"
                placeholder="Enter your mobile Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control custom-placeholder"
                rows="4"
                placeholder="Write your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-info w-100 fw-bold text-black send-btn">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
