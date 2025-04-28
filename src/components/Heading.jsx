import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="w-full h-[600px] bg-[#3C3C3C] p-2 flex justify-around">
        <div className="w-[40%] h-full flex items-center">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-6xl font-bold text-emerald-500">
                Be Yourself
              </h2>
            </div>
            <div>
              <h3 className="text-3xl text-white">
                Discover and Book Beauty, wellness near you
              </h3>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border text-white border-amber-50 placeholder:text-white focus:outline-none"
                placeholder="Search salon by city"
              />
            </div>
          </div>
        </div>
        <div className="w-[55%] h-full border border-gray-400 rounded-[1rem] flex justify-center items-center">
          <img width={800} height={500} src="/hair_cutting.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
