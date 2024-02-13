"use client";
import { useEffect, useState } from "react";

const ViewSchools = () => {
  const [schoolData, setSchoolData] = useState(null);
  const BASE_URL = "http://localhost:3000";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${BASE_URL}/api/schools`);
        const data = await result.json();
        setSchoolData(data.schools);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" mb-3 ">
      <h1 className="text-5xl text-center underline mb-5 mt-2 ">Schools</h1>
      {schoolData ? (
        <div className="flex items-center justify-center gap-4 flex-wrap  ">
          {schoolData?.map((school) => {
            return (
              <div
                key={school.school_id}
                className="flex flex-col items-start overflow-hidden bg-slate-100 rounded-lg w-[200px]  "
              >
                <img
                  src={school?.image}
                  alt="/school"
                  className=" w-[200px] h-[150px] object-cover  "
                />
                <div className="flex flex-col gap-2  px-4 pb-3 ">
                  <p className="text-sm text-#0ea5e9] z-10 ">
                    {" "}
                    {school?.state}{" "}
                  </p>
                  <h2 className="font-medium text-black break-words ">
                    {" "}
                    {school?.name}{" "}
                  </h2>
                  <h4 className="font-semibold text-slate-500">
                    {" "}
                    {school?.city}{" "}
                  </h4>
                </div>
                <button className="w-full p-2 text-white bg-green-600 ">
                  Apply
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewSchools;
