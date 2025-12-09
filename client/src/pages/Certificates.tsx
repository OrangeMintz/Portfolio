import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

type Certificate = {
  _id: string;
  event: string;
  certificate: string;
  date: string;
  preview?: string;
};

function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCertificateId, setSelectedCertificateId] = useState<
    string | null
  >(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${
        import.meta.env.VITE_API_CERTIFICATE
      }/`
    )
      .then((res) => res.json())
      .then((data: Certificate[]) => {
        setCertificates(
          data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch certificates:", err);
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleDeleteProject = async () => {
    if (!selectedCertificateId) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/${
          import.meta.env.VITE_API_CERTIFICATE
        }/${selectedCertificateId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setCertificates((prev) =>
          prev.filter((cert) => cert._id !== selectedCertificateId)
        );
        toast.success("Certficate deleted successfully.");
      } else {
        toast.error("Failed to delete the certificate.");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("An error occurred while deleting the certificate.");
    } finally {
      setShowDeleteModal(false);
      setSelectedCertificateId(null);
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
                  CERTIFICATES OVERVIEW
                </h2>
                <p className="text-center md:text-center lg:text-left text-gray-700">
                  This page explores a collection of my certificates, detailing
                  my academic and professional contributions.
                </p>
              </div>

              <div className="flex justify-center px-4 md:px-8">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                    <div id="preloader-circle"></div>
                    <p className="text-gray-600 text-sm m-0 leading-tight">
                      This might take a while during first load.
                    </p>
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-gray-600 text-xl">
                      Failed to load certificates.
                    </p>
                  </div>
                ) : (
                  <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate, index) => (
                      <a
                        href={certificate.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div className="text-center">
                            <p className="text-lg font-[Raleway] text-gray-800 hover:text-blue-400 transition duration-200">
                              {certificate.event}
                            </p>
                          </div>
                          <div className="text-right mt-[-12px] mb-3">
                            <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                              <p className="m-0">
                                {new Date(certificate.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="relative w-full max-w-md rounded-lg shadow-sm transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                            {isLoggedIn && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setSelectedCertificateId(certificate._id);
                                  setShowDeleteModal(true);
                                }}
                                className="absolute right-1 text-red-500 hover:text-red-700  p-3"
                                title="Delete project"
                              >
                                <i className="fa-solid fa-trash text-xl"></i>
                              </button>
                            )}
                            <img
                              className="block w-full rounded-t-lg rounded-lg"
                              src={certificate.certificate}
                              alt="certificate"
                            />
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
                  Are you sure you want to delete this certificate?
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
}
export default Certificates;
