/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import "../../App.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
  deleteStudentThunk
} from '../../store/thunks';

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  console.log("Student: ", student);
  return (
    <div>
      <h1 id = "studentviewtitle">{student.firstname + " " + student.lastname}</h1>
      {/* <h3>{student.campus.name}</h3> */}
      <div id = "studentviewbody">
        <img alt = "collegepic" id = "studentviewimg" src = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" />
        <div>First Name: {student.firstname}</div>
        <div>Last Name: {student.lastname}</div>
        <div>Email: abc@gmail.com</div> 
        <div>GPA: 3.90</div>{/* what? Database doesn't have gpa or email fields */}
        {student.campus == null  ? <div></div> : <div>Attends: </div>}
        {student.campus == null  ? <div>Doesn't belong to a campus.</div> : <div><Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></div>}
        {/* <div><Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></div> */}
        <div>
          <Link to={`/editstudent/${student.id}`}>
            <button id = "editstudent">Edit Student Information</button>
          </Link>
          <Link to={`/students`}>
            <button id = "deletestudent" onClick={() => deleteStudent(student.id)}>Delete Student</button>
          </Link>
        </div>
      </div>
    </div>
  );

};

const mapDispatch = (dispatch) => {
  return {
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};



export default connect(null, mapDispatch)(StudentView);
