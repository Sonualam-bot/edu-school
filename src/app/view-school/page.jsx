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
    <div>
      <h2>MySql Test</h2>
      {schoolData ? (
        <ul>
          {schoolData.map((school) => (
            <li key={school.school_id}>{school.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewSchools;
