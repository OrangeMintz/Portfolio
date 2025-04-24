import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import "aos/dist/aos.css";

import { useState } from "react";
import axios from "axios";

const AddProj = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    repository: "",
    preview: "",
    tags: "",
    date: "",
    status: "",
    subheading: "",
    description: "",
  });

  const [images, setImages] = useState<FileList | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!images || images.length === 0)
      return toast.warn("Please select images.");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    Array.from(images).forEach((file) => data.append("image", file));

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/${
          import.meta.env.VITE_API_PROJECT
        }`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("✅ Upload success:", res.data);
      toast.success("Project uploaded successfully! 🎉");

      // Clear form
      setFormData({
        name: "",
        category: "",
        repository: "",
        preview: "",
        tags: "",
        date: "",
        status: "",
        subheading: "",
        description: "",
      });
      setImages(null);

      // Optionally reset the file input (if needed)
      const fileInput = document.getElementById("image") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (err) {
      console.error("❌ Upload failed:", err);
      toast.error("Something went wrong while uploading. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <main className="main flex-grow">
          <section className="section">
            <div className="px-5 md:px-8">
              <div
                className="mt-2 mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="text-2xl font-semibold mb-1">Project</h2>
                <p className="text-gray-600">
                  Add new or existing project on your library.
                </p>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        <option value="Unspecified">Unspecified</option>
                        <option value="Web App">Web App</option>
                        <option value="Game">Game</option>
                        <option value="Tools/Utilities">Tools/Utilities</option>
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
                        value={formData.repository}
                        onChange={handleChange}
                      />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                      <label
                        htmlFor="preview"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Preview Link
                      </label>
                      <input
                        type="url"
                        id="preview"
                        name="preview"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="https://orangemint-portfolio.vercel.app"
                        value={formData.preview}
                        onChange={handleChange}
                      />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                      <label
                        htmlFor="repository"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Tags
                      </label>
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="ReactJS, Vite, NodeJS, Firebase"
                        required
                        value={formData.tags}
                        onChange={handleChange}
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
                        name="date"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={formData.date}
                        onChange={handleChange}
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
                        value={formData.status}
                        onChange={handleChange}
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
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                        multiple
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="subheading"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Sub Heading
                    </label>
                    <input
                      type="text"
                      id="subheading"
                      name="subheading"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="MERN + Firebase Authentication"
                      required
                      value={formData.subheading}
                      onChange={handleChange}
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
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full resize-none h-[12rem]"
                      required
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div
                    className="flex justify-end"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <button
                      type="submit"
                      className="text-white bg-[#149ddd] hover:bg-[#1290ca] focus:ring-4 focus:outline-none focus:ring-[#1290ca] font-medium text-sm w-full sm:w-auto px-[18px] py-2.5 text-center duration-150"
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
      </div>
    </>
  );
};

export default AddProj;
