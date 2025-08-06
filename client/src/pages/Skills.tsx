import { useEffect, useState } from "react";

interface LanguageData {
  language: string;
  percentage: string;
}

function Skills() {
  const [skills, setSkills] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_API_GITHUB}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch skills:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
            The data below is dynamically generated from Github repositories.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {loading ? (
            <div className="flex flex-col items-center justify-center mt-[-7rem] h-[30vh] gap-4">
              <div id="preloader-circle"></div>
              <p className="text-gray-600 text-sm m-0 leading-tight">
                This might take a while as its fetching data from Github.
              </p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center mt-[-7rem] h-[30vh]">
              <p className="text-gray-600 text-xl">Failed to load Languages.</p>
            </div>
          ) : (
            <div className="row skills-content skills-animation">
              {skills.map((skill) => (
                <div key={skill.language} className="col-lg-6">
                  <div className="progress">
                    <span className="skill">
                      <span>{skill.language}</span>{" "}
                      <i className="val">{skill.percentage}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Skills;
