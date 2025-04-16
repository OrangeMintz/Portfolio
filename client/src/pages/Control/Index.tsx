import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/FirebaseContext";
import Sidebar from "../../components/Sidebar/Sidebar";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      // easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main">
        <section className="section">
          <div className="container">
            <div
              className="text-center mt-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-lg mb-4">Email: {user?.email}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
