function Services() {
  return (
    <>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            I offer a variety of services tailored to meet the needs of both
            individuals and businesses. With a focus on quality and customer
            satisfaction, my expertise spans across technology, creative
            development, and more.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-laptop"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Web Development
                  </a>
                </h4>
                <p className="description">
                  End-to-end web development services, creating responsive and
                  user-friendly websites tailored to your business needs.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-camera-video"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Video Editing
                  </a>
                </h4>
                <p className="description">
                  Professional video editing services to enhance your content
                  with creative storytelling and seamless transitions.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-controller"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Graphic Designing
                  </a>
                </h4>
                <p className="description">
                  Creative design solutions for posters, social media content,
                  and branding materials using Photoshop, Canva, and other
                  tools.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-person"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Digital Marketing
                  </a>
                </h4>
                <p className="description">
                  Strategic content management and data-driven marketing to
                  boost audience engagement and improve digital campaign
                  performance.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-tools"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Computer Repair and Maintenance
                  </a>
                </h4>
                <p className="description">
                  Comprehensive repair and maintenance services for all types of
                  computers, ensuring optimal performance and longevity.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="bi bi-arrow-clockwise"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="service-details.html" className="stretched-link">
                    Bios Reflash
                  </a>
                </h4>
                <p className="description">
                  Bios reflashing to restore functionality and resolve
                  compatibility issues in various hardware systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
