import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "aos/dist/aos.css";

const AddProj = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="section">
          <div className="px-5 md:px-8">
            <div className=" mt-2 mb-5" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-semibold mb-1">Project</h2>
              <p className="text-gray-600">
                Add new or existing project on your library.
              </p>
            </div>

            <div>
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                      placeholder="Portfolio-OrangeMint"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    >
                      <option value="" disabled selected>
                        Select...
                      </option>
                      <option value="unspecified">Unspecified</option>
                      <option value="web app">Web App</option>
                      <option value="game">Game</option>
                      <option value="tools/utilities">Tools/Utilities</option>
                    </select>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="repository"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Git Repository
                    </label>
                    <input
                      type="url"
                      id="repository"
                      name="repository"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="https://github.com/OrangeMintz/orangemintz.git"
                      required
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="status"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="featured">Featured</option>
                      <option value="finished">Finished</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="dropped">Dropped</option>
                    </select>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Images
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                      multiple
                      required
                    />
                  </div>
                </div>

                <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                  <label
                    htmlFor="sub_heading"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Sub Heading
                  </label>
                  <input
                    type="text"
                    id="sub_heading"
                    name="sub_heading"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="MERN + Firebase Authentication"
                    required
                  />
                </div>

                <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  resize-none h-[12rem]"
                    required
                  />
                </div>

                <div
                  className="flex justify-end"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <button
                    type="submit"
                    className="text-white bg-[#149ddd] hover:bg-[#1290ca]   focus:ring-4 focus:outline-none focus:ring-[#1290ca] font-medium text-sm w-full sm:w-auto px-[18px] py-2.5 text-center duration-150"
                    style={{ borderRadius: "8px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AddProj;
