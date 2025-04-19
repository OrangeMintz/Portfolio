import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";

const Project = () => {
  type Project = {
    _id: string;
    name: string;
    category: string;
    tags: string;
    date: string;
    description: string;
    subheading: string;
    images: string[];
    repository?: string;
    preview?: string;
  };

  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/${
            import.meta.env.VITE_API_PROJECT
          }/${id}`
        );
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return (
    <>
      <Sidebar />
      <main className="main">
        <section
          id="portfolio-details"
          className="portfolio-details section py-12"
        >
          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <div id="preloader-circle"></div>
                <p className="text-gray-600 text-sm m-0 leading-tight">
                  Might take a while during first load
                </p>
              </div>
            ) : error || !project ? (
              <div className="flex items-center justify-center h-[60vh]">
                <p className="text-red-500 text-2xl">Failed to load project.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <div className="swiper-wrapper flex gap-4 overflow-x-auto snap-x">
                    {project.images.map((img: string, i: number) => (
                      <div
                        key={i}
                        className="swiper-slide snap-center shrink-0 w-full"
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination mt-2"></div>
                </div>

                {/* Info Section */}
                <div>
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3 className="text-xl font-bold mb-3">
                      Project Information
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>
                        <strong>Project Name:</strong> {project.name}
                      </li>
                      <li>
                        <strong>Category:</strong> {project.category}
                      </li>
                      <li>
                        <strong>Tags:</strong> {project.tags}
                      </li>
                      <li>
                        <strong>Project date:</strong>{" "}
                        {new Date(project.date).toLocaleDateString()}
                      </li>

                      {project.repository && (
                        <li>
                          <strong>Git Repository:</strong>{" "}
                          <a
                            href={project.repository}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.repository}
                          </a>
                        </li>
                      )}

                      {project.preview && (
                        <li>
                          <strong>Project Preview:</strong>{" "}
                          <a
                            href={project.preview}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.preview}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2 className="text-2xl font-semibold mb-2">
                      {project.subheading}
                    </h2>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Project;
