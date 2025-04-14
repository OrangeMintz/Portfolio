import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase";
import { useAuth } from "../../context/FirebaseContext";

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

  return (
    <div className="text-center mt-10">
      <p className="text-lg mb-4">Email: {user?.email}</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Index;
