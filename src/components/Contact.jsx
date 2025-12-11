import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "9ff7d5e4-367e-4942-bdf6-fc4379e235d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent successfully!");
      event.target.reset(); // ✅ clears form fields
    } else {
      setResult("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-continer container-fluid py-4 ">
      <h2 className="section-title color-title mb-4 text-center">Connect With Me 😊! </h2>

      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-6 contact-section">

          <form className="contact-form p-4 shadow rounded " onSubmit={onSubmit} method="POST">
            
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control custom-placeholder"
                placeholder="Enter your name"
                required
                name="name"
                
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control custom-placeholder"
                placeholder="Enter your email"
                required
                name="email"
                
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control custom-placeholder"
                placeholder="Enter your mobile Number"
                required
                name="phone"
                
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control custom-placeholder"
                rows="4"
                placeholder="Write your message"
                required
                name="message"
               
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-info w-100 fw-bold text-black send-btn">
              {isSubmitting ? "Sending..." : "Submit"} 
            </button>
            <p className="result-data">{result}</p>
          </form>

        </div>
      </div>
    </section>
  );
}
