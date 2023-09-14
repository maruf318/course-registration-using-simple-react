import PropTypes from "prop-types";
const Cart = ({ selectedCourse, credit, remaining }) => {
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-[#2F80ED] text-base font-bold p-2">
        Credit Hour Remaining: {remaining} hr
      </h2>
      <hr />

      <h2 className="text-lg font-bold p-2">Course Name</h2>
      {selectedCourse.map((course, index) => (
        <ul key={index}>
          <li className="text-[#1C1B1B99] p-2 text-sm font-normal">
            {index + 1}. {course.course_name}
          </li>
        </ul>
      ))}
      <hr />
      <h4 className="text-base font-medium p-2">Total Credit Hour:{credit} </h4>
      <hr />
    </div>
  );
};
Cart.propTypes = {
  selectedCourse: PropTypes.array,
  credit: PropTypes.array,
  remaining: PropTypes.array,
};
export default Cart;
