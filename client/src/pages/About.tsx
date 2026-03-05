import { useEffect, useState } from "react";

type ProjectStatusCount = {
  featured: number;
  finished: number;
  ongoing: number;
  dropped: number;
};

function About() {
  const [counts, setCounts] = useState<ProjectStatusCount>({
    featured: 0,
    finished: 0,
    ongoing: 0,
    dropped: 0,
  });

  const getAge = (date: string): number => {
    const today = new Date();
    const birth = new Date(date);

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const age = getAge("2002-09-10");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${
        import.meta.env.VITE_API_PROJECT
      }/count`,
    )
      .then((res) => res.json())
      .then((data: ProjectStatusCount) => {
        setCounts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch project status counts:", err);
        setLoading(false);
      });
  }, []);

  // Loading dots effect
  const [loadingDots, setLoadingDots] = useState(".");

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLoadingDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500); // change speed if you like

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      <main className="main">
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              My name is Djeikuje Nickolai C. Gacus, an Information Technology
              graduate with a strong interest in web development, IoT,
              cybersecurity, and software development. I enjoy learning about
              emerging technologies and applying them to practical projects. My
              interest in technology began with computer hardware and system
              assembly, which led me to build my first custom desktop at the age
              of 18 after gaining basic repair experience from our family
              computer. This experience strengthened my curiosity about how
              systems work and motivated me to continue developing my technical
              skills across different areas of technology.
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
                  Full Stack Web Developer, AI Automation Developer &amp;
                  Computer System Specialist
                </h2>
                <p className="fst-italic py-3">
                  A full stack developer with experience in building web
                  applications, developing AI-powered automation tools, and
                  assembling and optimizing desktop systems.
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
                        <strong>Phone:</strong> <span>+63 966 0516 144</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong>{" "}
                        <span>Valencia City, Bukidnon, Philippines</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>{age}</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong>{" "}
                        <span>
                          Bachelor of Science in Information Technology
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>djeikuje.gacus@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Status:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  As a Full Stack Web Developer with a strong foundation in
                  computer systems, I have experience in building web
                  applications and working with technologies such as IoT,
                  cybersecurity concepts, and basic game development. With a
                  Bachelor's degree in Information Technology and practical
                  development experience, I focus on creating reliable and
                  maintainable software solutions. I also work on AI automation
                  systems, developing chatbots that help streamline client
                  workflows by executing actions directly from our platform.
                  These systems integrate tools such as Neo4j for AI memory
                  storage, Prism for AI integration within Laravel applications,
                  and n8n for workflow automation. I am continuously improving
                  my skills and remain open to opportunities where I can
                  contribute while expanding my experience in modern
                  technologies.
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
                    <span className={loading ? "text-lg" : ""}>
                      {loading ? `Loading${loadingDots}` : counts.finished}
                    </span>
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
                    <span className={loading ? "text-lg" : ""}>
                      {loading ? `Loading${loadingDots}` : counts.ongoing}
                    </span>
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
                    <span className={loading ? "text-lg" : ""}>
                      {loading ? `Loading${loadingDots}` : counts.dropped}
                    </span>
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
                    <span className={loading ? "text-lg" : ""}>
                      {loading ? `Loading${loadingDots}` : counts.featured}
                    </span>
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
