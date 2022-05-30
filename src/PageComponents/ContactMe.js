import React, { useState } from "react";
// eslint-disable-next-line
import FormModal from "./Modal";
import { init } from "emailjs-com";

//Initializing data for EmailJS
init("user_VLCsnAJC6eTea1jTr6ZJo");

function ContactMe() {
  const initialFormData = Object.freeze({
    fname: "",
    email: "",
    message: "",
  });

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };
  // eslint-disable-next-line
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line
  const [validated, setValidated] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  // eslint-disable-next-line
  const handleSubmit = (event) => {
    setLoading(true);

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const templateId = "template_olzhave";
    const serviceID = "service_wjf5wfb";
    sendFeedback(serviceID, templateId, {
      from_name: formData.fname,
      email: formData.email,
      message_html: formData.message,
    });

    setTimeout(() => {
      setLoading(false);
      setVisible(true);
      resetForm();
    }, "400");
  };

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  return (
    <main className="page hire-me-page">
      <section className="portfolio-block hire-me">
        <div className="container">
          <div className="heading">
            <h2>Get in touch with me</h2>
          </div>
          <form
            validated={validated.toString()}
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <div className="mb-3">
              <label className="form-label" htmlFor="fname">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="fname"
                name="fname"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100" type="submit">
                {loading ? (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>

          <FormModal show={visible} onHide={() => setVisible(false)} />
        </div>
      </section>
    </main>
  );
}

export default ContactMe;
