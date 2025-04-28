import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="bg-[#2e2e2e] text-white h-[80px] flex justify-between items-center p-5 border-b border-b-emerald-500">
        <div className="flex space-x-1 items-center">
          <div>
            <h2 className="text-2xl font-bold">Salon Service</h2>
          </div>
          <div className="ml-10">
            <ul className="flex space-x-5 text-lg">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className="border border-emerald-500 py-1 px-3 text-green-600">BECOME PARTNER</li>
            <li>
              <MdNotificationsActive size={30} color="green" />
            </li>
            <li>
              <FaUserCircle size={30} color="green" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
