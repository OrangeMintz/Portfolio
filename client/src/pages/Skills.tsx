import { useEffect, useState } from "react";

interface LanguageData {
  language: string;
  percentage: string;
}

function Skills() {
  const [skills, setSkills] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSkills = (useRefresh: boolean = false) => {
    setLoading(true);
    setError(false);
    const url = `${import.meta.env.VITE_BACKEND_URL}/${
      import.meta.env.VITE_API_GITHUB
    }/${useRefresh ? "?refresh=true" : ""}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
        setRefreshing(false);
      })
      .catch((err) => {
        console.error("Failed to fetch skills:", err);
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const refreshSkills = () => {
    setRefreshing(true);
    fetchSkills(true);
  };

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Language stats below are generated in real-time from my GitHub
          repositories.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {loading ? (
          <div className="flex flex-col items-center justify-center mt-[-7rem] h-[30vh] gap-4">
            <div id="preloader-circle"></div>
            <p className="text-gray-600 text-sm leading-tight">
              Please wait while we fetch and cache the data. This may take a few
              moments.
            </p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center mt-[-7rem] h-[30vh]">
            <p className="text-gray-600 text-xl">Failed to load Languages.</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-end mb-4 mt-[-2rem]">
              <button
                style={{ borderRadius: "6px", fontSize: "15px" }}
                onClick={refreshSkills}
                className="border border-gray-300 px-3 py-2 min-w-[100px] transition transform duration-300 ease-in-out hover:shadow-lg z-1"
              >
                <i className="bi bi-arrow-clockwise mr-[6px] text-sm"></i>
                {refreshing ? "Refreshing..." : "Refresh"}
              </button>
            </div>
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
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
