function About() {
  return (
    <>
      <main className="main">
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              My name is Djeikuje Nickolai C. Gacus, and I am passionate about
              web development, IoT, ethical hacking, and game development. I
              have a keen interest in exploring the evolving landscape of
              technology and pushing the boundaries of innovation. From a young
              age, I was captivated by computer hardware and assembly. At 18,
              with only a basic understanding from repairing our family
              computer, I successfully built my first custom desktop, deepening
              my technical skills and igniting my enthusiasm for complex
              systems. My journey in tech has been a continuous learning
              process, driven by curiosity and a commitment to mastering diverse
              aspects of the field.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="portfolio/assets/img/Me.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 content">
                <h2>
                  Full Stack Web Developer &amp; Computer System Specialist
                </h2>
                <p className="fst-italic py-3">
                  A full stack developer with a strong foundation in building
                  web applications and hands-on experience assembling and
                  optimizing desktop systems.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong>{" "}
                        <span>10 September 2002</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong>{" "}
                        <span>https://orangemint-portfolio.vercel.app/</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+63 960 6421 564</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong>{" "}
                        <span>Valencia City, Philippines</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>22</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>BSIT</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>nickzgacus@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Status:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  As a Full Stack Web Developer with a solid foundation in
                  computer systems, I bring a diverse skill set that spans from
                  web development, Internet of Things (IoT), ethical hacking and
                  minor game development. With a BSIT degree and hands-on
                  experience, I’ve honed my ability to develop robust and secure
                  applications while remaining curious about advancements in
                  both software and hardware. Currently available for
                  opportunities, I am eager to continue expanding my expertise
                  in technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <div id="stats" className="stats section"> */}
        <div id="stats" className="stats section" data-aos="fade-up">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-check-circle"></i>
                  <span data-purecounter-start="0" className="purecounter">
                    15
                  </span>
                  <p>
                    <strong>Finished Projects</strong> <br></br>
                    <span>Completed Works</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-terminal"></i>
                  <span data-purecounter-start="0" className="purecounter">
                    2
                  </span>
                  <p>
                    <strong>Ongoing Projects</strong> <br></br>
                    <span>Work in Progress</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-trash"></i>
                  <span data-purecounter-start="0" className="purecounter">
                    0
                  </span>
                  <p>
                    <strong>Dropped Projects</strong> <br></br>
                    <span>Abandoned Works</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-heart"></i>
                  <span data-purecounter-start="0" className="purecounter">
                    2
                  </span>
                  <p>
                    <strong>Featured Projects</strong> <br></br>
                    <span>Highlighted Works</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
