function Resume() {
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            With a strong foundation in information technology and practical
            experience in web development, computer system assembly,
            cybersecurity and game development, my journey reflects a commitment
            to innovation and continuous learning. This resume highlights the
            skills, projects, and accomplishments that equip me to contribute
            effectively to dynamic, tech-driven environments.
          </p>

          <div className="mt-4">
            <a
              href="/portfolio/assets/Djeikuje-Nickolai-Gacus-Resume.pdf"
              download
              className="inline-block px-[13px] py-[10px] text-white bg-[#149ddd] hover:bg-[#1290ca]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1290ca] duration-150 rounded-lg"
            >
              <i className="fa-solid fa-download mr-[6px]"></i>
              Download
            </a>
          </div>
        </div>

        <div className="container mt-[-36px]">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Djeikuje Nickolai C. Gacus</h4>
                <p>
                  <em>
                    Dedicated and resourceful Full Stack Web Developer with
                    hands-on experience in computer system assembly,
                    maintenance, and support. Has experience in Internet of
                    Things (IoT), ethical hacking, and game development, with a
                    solid foundation in web and software development. Known for
                    innovative problem-solving and a commitment to creating
                    efficient, user-centered solutions.
                  </em>
                </p>
                <ul>
                  <li>Valencia City, Bukidnon, 8709, Phil</li>
                  <li>63+ 960 642 1564</li>
                  <li>nickzgacus@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>LogicBase Interactive Ent. - Intern</h4>
                <h5>2025 - 2025</h5>
                <p>
                  <em>Web Developer</em>
                </p>
                <ul>
                  <li>
                    Developed and maintained web applications using Laravel,
                    Next.js, and React. Gained hands-on experience with frontend
                    and back-end integration, version control, database
                    management and web designing.
                  </li>
                  <p className="point-of-contact">
                    <h5>Mary Jane E. Nazareno</h5>
                    <h6>HR Assistant/OJT Coordinator</h6>
                    <i className="bi bi-envelope-fill"></i>
                    <em>m_nazareno@logicbaseinteractive.com</em>
                    <i className="bi bi-globe2"></i>
                    <em>www.logicbaseinteractive.com</em>
                  </p>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Information and Communications Technology</h4>
                <h5>2019 - 2021</h5>
                <p>
                  <em>
                    Valencia National High School (VNHS), Valencia City,
                    Philippines
                  </em>
                </p>
                <p>
                  I pursued the Information and Communications Technology (ICT)
                  strand during my Senior High School years at Valencia National
                  High School, where I graduated with honors.
                </p>
              </div>

              <div className="resume-item">
                <h4>Bachelor of Science in Information Technology</h4>
                <h5>2021 - 2025</h5>
                <p>
                  <em>
                    Bukidnon State University (BukSU), Malaybalay City,
                    Philippines
                  </em>
                </p>
                <p>
                  Graduated <strong>Cum Laude</strong> with a Bachelor&apos;s
                  degree in Information Technology in 2025. Consistently
                  recognized on the Dean&apos;s List for three consecutive
                  years. Achieved Competency Level 2 in the TOPCIT Exam and
                  earned certifications in &quot;Introduction to
                  Cybersecurity&quot;, &quot;Cyber Threat Management&quot;. and
                  &quot;Academic Mentoring 2024-2025&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
