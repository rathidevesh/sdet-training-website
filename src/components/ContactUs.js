import { useState, useRef } from "react"
import emailjs from "emailjs-com"
import "./ContactUs.css"

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("contact")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [enrollmentForm, setEnrollmentForm] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    experience: "",
    courseInterest: "",
  })

  const contactFormRef = useRef()
  const enrollmentFormRef = useRef()

  // === Replace with your EmailJS IDs ===
  const SERVICE_ID = "service_f23ddjs"
  const TEMPLATE_ID_TO_YOU = "template_xqi0tav"
  const TEMPLATE_ID_TO_CUSTOMER = "template_3a6oy09"
  const PUBLIC_KEY = "GHO1rG7fgP7zR8I45"

  const handleContactSubmit = (e) => {
    e.preventDefault()

    // 1. Send email to YOU with contact details
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_TO_YOU, contactFormRef.current, PUBLIC_KEY)

    // 2. Send confirmation email to CUSTOMER
    emailjs.send(SERVICE_ID, TEMPLATE_ID_TO_CUSTOMER, {
    name: contactForm.name,
    fullName: "",
    courseInterest: "",
    experience: "",
  }, PUBLIC_KEY)

    alert("Your message has been sent!")
    setEnrollmentForm({
      fullName: "",
      experience: "",
      courseInterest: "",
    })
  }

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault()

    // 1. Send email to YOU with enrollment details
   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_TO_YOU, enrollmentFormRef.current, PUBLIC_KEY)
  .then((result) => {
    console.log("Email to me sent:", result.text)
  })
  .catch((error) => {
  console.error("Error sending enrollment to me:", error);
  alert("Failed to send email. Check console for details.");
});



     // 2. Send confirmation email to CUSTOMER
  emailjs.send(SERVICE_ID, TEMPLATE_ID_TO_CUSTOMER, {
    email: enrollmentForm.email,      
    fullName: enrollmentForm.fullName,
    courseInterest: enrollmentForm.courseInterest,
    experience: enrollmentForm.experience,
  }, PUBLIC_KEY)
    .then((result) => {
      console.log("Customer confirmation sent:", result.text);
      alert("Your enrollment has been submitted!");
    })
    .catch((error) => {
      console.error("Error sending confirmation:", error);
      alert("Failed to send confirmation to customer.");
    });

  // reset form
  setEnrollmentForm({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    experience: "",
    courseInterest: "",
  });
  }

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleEnrollmentChange = (e) => {
    setEnrollmentForm({
      ...enrollmentForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Ready to Start Your SDET Journey?</h2>
          <p className="contact-subtitle">
            Join thousands of successful graduates and transform your career in software testing and automation
          </p>
        </div>

        <div className="contact-tabs">
          <button
            className={`tab-button ${activeTab === "enrollment" ? "active" : ""}`}
            onClick={() => setActiveTab("enrollment")}
          >
            Course Enrollment
          </button>
          <button
            className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="contact-form-container">
          {activeTab === "contact" ? (
            <div className="form-content">
              <h3 className="form-title">Contact Us</h3>
              <p className="form-description">Have questions? Get in touch with our team</p>

              <form ref={contactFormRef} onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Tell us about your questions or requirements..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="form-content">
              <h3 className="form-title">Course Enrollment Form</h3>
              <p className="form-description">Fill out the form below and our team will contact you within 24 hours</p>

              <form ref={enrollmentFormRef} onSubmit={handleEnrollmentSubmit} className="enrollment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={enrollmentForm.fullName}
                      onChange={handleEnrollmentChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enrollmentEmail">Email Address *</label>
                    <input
                      type="email"
                      id="enrollmentEmail"
                      name="email"
                      value={enrollmentForm.email}
                      onChange={handleEnrollmentChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={enrollmentForm.country}
                      onChange={handleEnrollmentChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={enrollmentForm.phone}
                      onChange={handleEnrollmentChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="experience">Experience Level *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={enrollmentForm.experience}
                      onChange={handleEnrollmentChange}
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="courseInterest">Course Interest *</label>
                    <select
                      id="courseInterest"
                      name="courseInterest"
                      value={enrollmentForm.courseInterest}
                      onChange={handleEnrollmentChange}
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="selenium-fundamentals">Selenium WebDriver Fundamentals</option>
                      <option value="advanced-automation">Advanced Test Automation</option>
                      <option value="api-testing">API Testing Mastery</option>
                      <option value="mobile-automation">Mobile Test Automation</option>
                      <option value="performance-testing">Performance Testing</option>
                      <option value="framework-design">Test Framework Design</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Submit Enrollment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactUs