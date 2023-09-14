import PropTypes from "prop-types";
const Course = ({ course }) => {
  // console.log(typeof course);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={course.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.course_name}</h2>
          <p>{course.details}</p>
          <div className="flex justify-between">
            <div>
              <p>Price{course.price}</p>
            </div>
            <div>
              <p>Credit:{course.credit}</p>
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
