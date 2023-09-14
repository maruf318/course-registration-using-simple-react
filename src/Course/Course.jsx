import PropTypes from "prop-types";
const Course = ({ course }) => {
  // console.log(typeof course);
  return (
    <div>
      <div className="card h-[550px] bg-base-100 shadow-xl">
        <figure className="p-4 ">
          <img
            className="rounded-xl h-[180px] "
            src={course.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {course.course_name}
          </h2>
          <p className="text-[#1C1B1B99] text-base">{course.details}</p>
          <div className="flex justify-between text-[#1C1B1B99] text-base font-medium">
            <div>
              <p>Price{course.price}</p>
            </div>
            <div>
              <p>Credit:{course.credit}hr</p>
            </div>
          </div>
          <div className="card-actions ">
            <button className="btn text-white border-none btn-primary w-full bg-[#2F80ED] capitalize">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
};
export default Course;
