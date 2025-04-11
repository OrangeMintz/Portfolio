import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
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
                    <p>Nickzgacus@gmail.com</p>
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
                    <button type="submit">Send Message</button>
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
