import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

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

  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredProjects = projects
    .filter((project) =>
      statusFilter === "all" ? true : project.status === statusFilter
    )
    .sort((a, b) => {
      const getPriority = (status: string) => {
        switch (status) {
          case "ongoing":
            return 4;
          case "featured":
            return 3;
          case "finished":
            return 2;
          case "dropped":
            return 1;
          default:
            return 0;
        }
      };

      const priorityDiff = getPriority(b.status) - getPriority(a.status);
      if (priorityDiff !== 0) return priorityDiff;

      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  const handleDeleteProject = async () => {
    if (!selectedProjectId) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/${
          import.meta.env.VITE_API_PROJECT
        }/${selectedProjectId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setProjects((prev) =>
          prev.filter((proj) => proj._id !== selectedProjectId)
        );
        toast.success("Project deleted successfully.");
      } else {
        toast.error("Failed to delete the project.");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("An error occurred while deleting the project.");
    } finally {
      setShowDeleteModal(false);
      setSelectedProjectId(null);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <main className="main flex-grow">
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
              {/* SORT */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-2 mt-6 lg:mr-6 px-4 md:px-8">
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 min-w-[120px] transition transform duration-300 ease-in-out hover:shadow-lg"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="featured">Featured</option>
                  <option value="finished">Finished</option>
                  <option value="dropped">Dropped</option>
                </select>

                <select
                  className="border border-gray-300 rounded-md px-3 py-2 min-w-[120px] transition transform duration-300 ease-in-out hover:shadow-lg"
                  value={sortOrder}
                  onChange={(e) =>
                    setSortOrder(e.target.value as "asc" | "desc")
                  }
                >
                  <option value="desc">Newest</option>
                  <option value="asc">Oldest</option>
                </select>
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
                    {filteredProjects.map((project, index) => (
                      <a href={`project/${project._id}`}>
                        <div
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div
                            key={project._id}
                            className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
                                 transition transform duration-300 ease-in-out 
                                 hover:scale-105 hover:shadow-lg"
                          >
                            {isLoggedIn && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setSelectedProjectId(project._id);
                                  setShowDeleteModal(true);
                                }}
                                className="absolute right-1 text-red-500 hover:text-red-700  p-3"
                                title="Delete project"
                              >
                                <i className="fa-solid fa-trash text-xl"></i>
                              </button>
                            )}
                            <div className="h-48 w-full overflow-hidden rounded-t-lg">
                              <img
                                className="h-full w-full object-cover"
                                src={project.images[0]}
                                alt={project.name}
                              />
                              <span
                                className={`absolute top-2 left-2 capitalize text-xs px-2 py-1 rounded-md shadow ${
                                  project.status === "featured"
                                    ? "bg-indigo-600 text-white"
                                    : project.status === "ongoing"
                                    ? "bg-yellow-400 text-black"
                                    : project.status === "dropped"
                                    ? "bg-red-600 text-white"
                                    : project.status === "finished"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-300 text-black"
                                }`}
                              >
                                {project.status}
                              </span>
                            </div>
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
                                    Code{" "}
                                    <i className="fa-brands fa-github ml-2"></i>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />

        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md h-auto">
              <div className="relative p-6 sm:p-5 text-center bg-white rounded-lg shadow">
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <img
                  className="w-13 mb-3.5 mx-auto"
                  src="/portfolio/assets/img/trash.gif"
                  alt="Delete Icon"
                />

                <p className="mb-4 text-gray-500 text-base">
                  Are you sure you want to delete this project?
                </p>

                <div className="flex justify-center items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(false)}
                    className="py-2 px-4 text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 hover:text-gray-900"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    No, cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteProject}
                    className="py-2 px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
