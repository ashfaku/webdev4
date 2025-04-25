/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import "../../App.css"

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <div class = "campusviewbox">  
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="College Campus" width="50%"></img>

        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        <div>
          <button id = "editcampus">Edit Campus Information</button>
          <button id = "deletecampus">Delete Campus</button>
        </div>
        <h2>Total Students: {campus.students.length}</h2>
        <table id = "campusstudentlisttable">
          <tr>
            <th>Student Name</th>
            <th></th>
          </tr>
          {campus.students.map( student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <tr>
                <th class = "tablecell">{name}</th>
                <th class = "tablecell"><button>Unenroll</button></th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CampusView;