import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Courses = () => {
  const notify = () => toast("Sorry! you cant take same course again");
  const notify1 = () =>
    toast("Credit Limit: Warning! You cant take more than 20 credits");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [credit, setCredit] = useState([0]);
  const [remaining, setRemaining] = useState([20]);
  useEffect(() => {
    fetch("data.json")
      .then((src) => src.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelect = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      return notify();

      // alert("Sorry! you cant take same course again");
    } else {
      let total = course.credit;
      let remain = 20 - course.credit;

      selectedCourse.forEach((element) => {
        total = total + element.credit;
        remain = remain - element.credit;
      });
      if (total > 20 || remain < 0) {
        notify1();
        // alert("Credit Limit Alert");
      } else {
        setCredit(total);
        setRemaining(remain);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    <div>
      <div className="flex gap-3 ">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-3">
            {courses.map((course) => (
              <Course
                handleSelect={handleSelect}
                key={course.id}
                course={course}
              ></Course>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <Cart
            remaining={remaining}
            credit={credit}
            selectedCourse={selectedCourse}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Courses;
