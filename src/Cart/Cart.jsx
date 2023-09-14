import PropTypes from "prop-types";
const Cart = ({ selectedCourse, credit, remaining }) => {
  return (
    <div className="bg-white p-4 rounded">
      <h2>Credit Hour Remaining:{remaining} hr</h2>
      <hr />
      <p>length: {selectedCourse.length}</p>
      <h2>Course Name</h2>
      {selectedCourse.map((course, index) => (
        <ul key={index}>
          <li>
            {index + 1}. {course.course_name}
          </li>
        </ul>
      ))}
      <hr />
      <h4>Total Credit Hour:{credit} </h4>
    </div>
  );
};
Cart.propTypes = {
  selectedCourse: PropTypes.array,
};
export default Cart;
