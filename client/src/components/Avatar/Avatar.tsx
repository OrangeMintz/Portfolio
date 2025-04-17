import { useEffect } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import { Dropdown } from "flowbite";

const Avatar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const $triggerEl = document.getElementById("avatarButton");
    const $dropdownEl = document.getElementById("userDropdown");

    if ($triggerEl && $dropdownEl) {
      new Dropdown($dropdownEl, $triggerEl);
    }
  }, []);

  return (
    <>
      <img
        id="avatarButton"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="/portfolio/assets/img/profile.jpg"
        alt="User dropdown"
      />
      <div
        id="userDropdown"
        className="z-10 hidden bg-white divide-y divide-gray-600 rounded-lg shadow-sm w-44"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="text-gray-900 truncate">
            Djeikuje Nickolai C. Gacus
          </div>
          <div className="font-medium text-gray-900 truncate">
            nickzgacus@gmail.com
          </div>
        </div>
        <div className="py-1">
          <a
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-red-500 hover:bg-red-500 hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};

export default Avatar;
