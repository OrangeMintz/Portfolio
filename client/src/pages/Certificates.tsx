import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import "aos/dist/aos.css";

function Certificates() {
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
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div data-aos="fade-up" data-aos-delay={100 * 50}>
                    <a href="#">
                      <div className="w-full h-full  max-w-md object-cover bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <img
                          className="p-2 rounded-t-lg rounded-lg"
                          src="portfolio/assets/img/CertTemp.jpg"
                          alt="certificate"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Certificates;
