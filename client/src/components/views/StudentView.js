/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;
  console.log("Student: ", student);
  if (student.campus == null) {
    return (
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h3>Doesn't belong to a campus.</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus.name}</h3>
    </div>
  );

};

export default StudentView;