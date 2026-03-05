function Resume() {
  return (
    <>
      <section id="resume" className="py-16 bg-white">
        {/* Section Header */}
        <div className="lg:max-w-[87%]  mx-auto px-6" data-aos="fade-up">
          <h2 className="!text-3xl !font-bold text-[#050d18] relative pb-4 mb-6">
            Resume
          </h2>

          <p className="text-justify text-gray-700">
            With a strong foundation in information technology and practical
            experience in web development, computer system assembly,
            cybersecurity, and game development, I have developed a well-rounded
            understanding of both software and hardware systems. I also have
            experience working as an AI Automation Developer, building chatbot
            solutions designed to assist and streamline client workflows through
            platform integrations and automated processes. This resume
            highlights the skills, projects, and experiences that have helped me
            grow as a developer and prepare me to contribute effectively in
            technology-driven environments.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <a
              href="/portfolio/assets/Djeikuje-Nickolai-Gacus-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-white bg-[#149ddd] hover:bg-[#1290ca] rounded-lg transition duration-150"
            >
              <i className="fa-solid fa-download mr-2"></i>
              Download
            </a>

            {/* Optional View Button */}
            {/* <a
              href="/portfolio/assets/Djeikuje-Nickolai-Gacus-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#149ddd] text-[#149ddd] hover:text-[#1290ca] hover:border-[#1290ca] rounded-lg transition duration-150"
            >
              <i className="fa-solid fa-eye mr-2"></i>
              View
            </a> */}
          </div>
        </div>

        {/* Resume Content */}
        <div className="lg:max-w-[87%] mx-auto px-6 mt-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ================= EXPERIENCE ================= */}
            <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <h4 className="!font-bold !text-[27px] !mb-4">
                Professional Experience
              </h4>

              {/* Timeline Wrapper */}
              <div className="relative before:absolute before:left-[-2px] before:top-2 before:bottom-7 before:w-[2px] before:bg-[#149ddd]">
                {/* LogicBase */}
                <div className="relative pl-6 pb-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[#149ddd] bg-white"></div>

                  <h4 className="!text-[18px] !font-semibold uppercase !text-gray-700 mb-2">
                    LogicBase Interactive Ent.
                  </h4>

                  <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold mb-2">
                    January 2025 - May 2025
                  </span>

                  <p className="font-semibold">Web Developer</p>

                  <ul className="list-disc pl-5 space-y-2 marker:text-[#149ddd]">
                    <li>
                      Developed and maintained web applications using Laravel
                      and Next.js while gaining experience with frontend-backend
                      integration and database management.
                    </li>
                  </ul>

                  {/* Contact */}
                  <div className="mt-4 text-sm space-y-1">
                    <p className="font-medium text-[16px]">
                      Mary Jane E. Nazareno
                    </p>

                    <h6 className="text-gray-600 !mt-[-10px]">
                      Human Resources Administrator
                    </h6>

                    <div className="flex items-center gap-4 flex-wrap !text-[15px]">
                      <div className="flex items-center gap-2">
                        <i className="bi bi-envelope-fill text-[#149ddd]"></i>
                        <a
                          href="mailto:m_nazareno@logicbaseinteractive.com"
                          className="italic"
                        >
                          m_nazareno@logicbaseinteractive.com
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <i className="bi bi-globe2 text-[#149ddd]"></i>
                        <a
                          href="https://logicbaseinteractive.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic"
                        >
                          https://logicbaseinteractive.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Split Second */}
                <div className="relative pl-6 pb-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[#149ddd] bg-white"></div>

                  <h4 className="!text-[18px] !font-semibold uppercase !text-gray-700 mb-2">
                    Split Second Research Ltd.
                  </h4>

                  <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold mb-2">
                    October 2025 - Present
                  </span>

                  <p className="font-semibold">Software Developer</p>

                  <p className="text-gray-700 leading-relaxed">
                    Worked as a full-stack developer contributing to platform
                    development and maintaining scalable features for internal
                    research tools.
                  </p>

                  <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-[#149ddd]">
                    <li>Developed services using Laravel and Vue.js</li>
                    <li>Implemented containerized development using Docker</li>
                    <li>Collaborated with international teams using Git</li>
                  </ul>

                  <p className="font-semibold mt-4">AI Chatbot Developer</p>

                  <p className="text-gray-700 leading-relaxed">
                    Developed AI-powered automation systems designed to
                    streamline internal workflows and support operational
                    requests.
                  </p>

                  <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-[#149ddd]">
                    <li>
                      Integrated chatbot services with Neo4j GraphQL knowledge
                      graphs
                    </li>
                    <li>
                      Implemented workflow automation through intent recognition
                    </li>
                    <li>
                      Built backend services connecting conversational input
                      with system actions
                    </li>
                  </ul>

                  {/* Contact */}
                  <div className="mt-4 text-sm space-y-1">
                    <p className="font-medium text-[16px]">
                      Joeanna Grace Marie V. Maputi
                    </p>

                    <h6 className="text-gray-600 !mt-[-10px]">
                      Human Resources Generalist / Admin Officer
                    </h6>

                    <div className="flex items-center gap-4 flex-wrap !text-[15px]">
                      <div className="flex items-center gap-2">
                        <i className="bi bi-envelope-fill text-[#149ddd]"></i>
                        <a
                          href="mailto:joeanna.vega@splitsecondresearch.com"
                          className="italic"
                        >
                          joeanna.vega@splitsecondresearch.com
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <i className="bi bi-globe2 text-[#149ddd]"></i>
                        <a
                          href="https://splitsecondresearch.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic"
                        >
                          https://splitsecondresearch.co.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= EDUCATION ================= */}
            <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
              <h3 className="!font-bold !text-[27px] !mb-4">Education</h3>

              <div className="border-l-2 border-[#149ddd]">
                <div className="relative pl-6 pb-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#149ddd] bg-white"></div>
                  <h4 className="!text-[18px] !font-semibold uppercase !text-gray-700 mb-2">
                    Information and Communications Technology
                  </h4>
                  <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold mb-2">
                    2019 - 2021
                  </span>
                  <p className="italic">
                    Valencia National High School (VNHS), Valencia City,
                    Philippines
                  </p>
                  <p className="text-gray-700">
                    Completed the ICT strand with honors, gaining foundational
                    knowledge in computer systems and networking.
                  </p>
                </div>
                <div className="relative pl-6 pb-6mt-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#149ddd] bg-white"></div>
                  <h4 className="!text-[18px] !font-semibold uppercase !text-gray-700 mb-2">
                    Bachelor of Science in Information Technology
                  </h4>
                  <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold mb-2">
                    2021 - 2025
                  </span>
                  <p className="italic">
                    Bukidnon State University (BukSU), Malaybalay City,
                    Philippines
                  </p>
                  <p className="text-gray-700">
                    Graduated <strong>Cum Laude</strong>. Recognized on the
                    Dean's List for three consecutive years and achieved
                    Competency Level 2 in the TOPCIT exam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
