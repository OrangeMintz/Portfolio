import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const Index = () => {
  const [commit, setCommit] = useState<{ sha: string; date: string } | null>(
    null
  );

  useEffect(() => {
    fetch("https://api.github.com/repos/OrangeMintz/Portfolio/commits")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const latest = data[0];
          const sha = latest.sha.slice(0, 7);
          const date = new Date(latest.commit.author.date).toLocaleDateString();
          setCommit({ sha, date });
        }
      })
      .catch((err) => console.error("Error fetching commit:", err));
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <main className="main flex-grow">
          <section className="section">
            <div className="px-5 md:px-8">
              <div className="w-full px-5 md:px-8 flex justify-center">
                <div
                  className="w-full max-w-6xl flex flex-col items-center text-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="portfolio/assets/img/chad.webp"
                    width={100}
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <h1>Welcome</h1>
                    <p className="text-lg">
                      You're viewing in the{" "}
                      <span className="text-blue-400 text-lg">
                        <a href="/control">Control Panel</a>
                      </span>
                    </p>
                    <p>
                      Project Commit:{" "}
                      {commit ? (
                        <span className="inline-flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center">
                          <span className="text-green-700 font-mono">
                            {commit.sha}
                          </span>
                          <span>Date: {commit.date}</span>
                        </span>
                      ) : (
                        "Loading..."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-10" data-aos="fade-up" data-aos-delay="100">
                <h3>Quick Access</h3>
                <p className="text-md text-justify">
                  This page serves as the control panel for managing quick
                  access configurations and dynamic content across the site.
                </p>
              </div>

              {/* Cards Section */}
              <div className="mt-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <a
                    href="/control/project"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="bg-white border border-gray-800 rounded-2xl p-7 w-2xs transition-transform transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center gap-4">
                        <i className="fa-solid fa-diagram-project text-gray-700 text-xl"></i>
                        <span className="text-lg text-gray-800">Projects</span>
                      </div>
                    </div>
                  </a>

                  <a href="" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-white border border-gray-800 rounded-2xl p-7 w-2xs transition-transform transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center gap-4">
                        <i className="fa-solid fa-certificate text-gray-700 text-xl"></i>
                        <span className="text-lg text-gray-800">
                          Certificates
                        </span>
                      </div>
                    </div>
                  </a>

                  <a href="" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-white border border-gray-800 rounded-2xl p-7 w-2xs transition-transform transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center gap-4">
                        <i className="fa-solid fa-blog text-gray-700 text-xl"></i>
                        <span className="text-lg text-gray-800">Blogs</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
