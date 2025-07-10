import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import "aos/dist/aos.css";

import { useState } from "react";
import axios from "axios";

function AddCert() {
  const [formData, setFormData] = useState({
    event: "",
    date: "",
  });

  const [certificate, setCertificate] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificate(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificate) return toast.warn("Please select an image.");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("certificate", certificate);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/${
          import.meta.env.VITE_API_CERTIFICATE
        }`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("✅ Upload success:", res.data);
      toast.success("Certificate uploaded successfully! 🎉");

      // Clear form
      setFormData({
        event: "",
        date: "",
      });
      setCertificate(null);

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
                <h2 className="text-2xl font-semibold mb-1">Certificate</h2>
                <p className="text-gray-600">
                  Add a new or existing certificate to your collection.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div data-aos="fade-up" data-aos-delay="100">
                      <label
                        htmlFor="event"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Event Title
                      </label>
                      <input
                        type="text"
                        id="event"
                        name="event"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        placeholder="Name of the Event"
                        value={formData.event}
                        onChange={handleChange}
                      />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Date of Event
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
                  </div>
                  <div className="grid gap-6 mb-6">
                    <div data-aos="fade-up" data-aos-delay="100">
                      <label
                        htmlFor="certificate"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Certificate
                      </label>
                      <input
                        type="file"
                        id="certificate"
                        name="certificate"
                        accept="image/*"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                        onChange={handleFileChange}
                      />
                    </div>
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
}
export default AddCert;
