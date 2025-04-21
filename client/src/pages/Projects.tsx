import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

type Project = {
  _id: string;
  name: string;
  category: string;
  tags: string;
  repository?: string;
  preview?: string;
  status: string;
  date: string;
  subheading: string;
  description: string;
  images: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_API_PROJECT}/`
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="section">
          <div className="container">
            <div className="px-4 md:px-8">
              <h2 className="text-center font-extrabold mb-3">
                PROJECTS OVERVIEW
              </h2>
              <p className="text-center md:text-center lg:text-left text-gray-700">
                This page explores a collection of projects that highlight my
                skills in design, development, and problem-solving.
              </p>
            </div>

            <div className="flex justify-center px-4 md:px-8">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                  <div id="preloader-circle"></div>
                  <p className="text-gray-600 text-sm m-0 leading-tight">
                    This might take a while during first load
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-[60vh]">
                  <p className="text-red-500 text-2xl">
                    Failed to load projects.
                  </p>
                </div>
              ) : (
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div
                      key={project._id}
                      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                      data-aos="fade-up"
                      data-aos-delay={100 + index * 50}
                    >
                      <a href={`project/${project._id}`}>
                        <div className="h-48 w-full overflow-hidden rounded-t-lg">
                          <img
                            className="h-full w-full object-cover"
                            src={project.images[0]}
                            alt={project.name}
                          />
                        </div>
                      </a>
                      <div className="p-4">
                        <a href={`project/${project._id}`}>
                          <p className="text-2xl font-medium tracking-tight text-gray-700 line-clamp-2 h-8 overflow-hidden">
                            {project.name}
                          </p>
                        </a>
                        <p className="mb-4 text-gray-600 line-clamp-3 overflow-hidden">
                          <strong>Tags: </strong>
                          {project.tags}
                        </p>
                        <p className=" text-gray-400 line-clamp-3 h-20 overflow-hidden">
                          {project.description}
                        </p>
                        <div className="space-x-1">
                          {project.preview && (
                            <a
                              href={project.preview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-[10px] text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Live{" "}
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                            </a>
                          )}
                          {project.repository && (
                            <a
                              href={project.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-[10px] text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Code <i className="fa-brands fa-github ml-2"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
