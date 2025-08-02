import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast.error("Please complete the CAPTCHA before sending.");
      return;
    }

    setStatus("loading");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_API_MAIL}`,
        formData,
        {
          withCredentials: true,
        }
      );
      setStatus("sent");
      toast.success(response.data.message || "Message sent successfully!");
      console.log("Success:", response.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      recaptchaRef.current?.reset();
      setCaptchaVerified(false);
    } catch (error: any) {
      setStatus("error");
      toast.error(error?.response?.data?.error || "Failed to send message.");
      console.error("Error:", error);
    }
  };
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Get in touch for inquiries, collaborations, or more information.
            Feel free to reach me out for assistance or further details.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>L.F Purok 6-A, Dayyo Subd, Poblacion, Valencia City</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>+63 966 0516 144</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>Djeikuje.gacus@gmail.com</p>
                  </div>
                </div>

                <iframe
                  src="https://maps.google.com/maps?width=400&amp;height=270&amp;hl=en&amp;q=W37Q+QJ4, Bagonvilla, Valencia City, Bukidnon&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{ border: 0, width: "100%", height: "270px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label className="pb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="pb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="pb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="pb-2">Message</label>
                    <textarea
                      name="message"
                      rows={10}
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="mt-4 d-flex justify-content-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      onChange={handleCaptchaChange}
                    />
                  </div>

                  <div className="col-md-12 text-center">
                    {status === "loading" && (
                      <div className="loading">Sending...</div>
                    )}
                    {status === "error" && (
                      <div className="error-message">
                        Failed to send message.
                      </div>
                    )}
                    {status === "sent" && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={!captchaVerified || status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
