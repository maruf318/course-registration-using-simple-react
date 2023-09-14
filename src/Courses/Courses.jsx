import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((src) => src.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-3">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h2>MY CART:</h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;
