/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../App.css"

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  let [deleted, Delete] = useState(false);
  const unenrollStudent = () => {
    console.log("Unenrolling the kid...");
    
  }
  const deleteCampus = async () => {
    console.log("Attempting to delete");
    try {
      const response = await fetch(`http://localhost:3001/api/campuses/${campus.id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        console.log("Campus deleted successfully!");
        Delete(true);
      } 
      else {
        const error = await response.json();
        console.error("Delete failed:", error);
      }
    } 
    catch (err) {
      console.error("Error deleting campus:", err);
    }
  };
  if (deleted) {
    return <Redirect to = {"/campuses"} />;
  }
  return (
    <div>
      <h1>{campus.name}</h1>
      <div className = "campusviewbox">  
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="College Campus" width="50%"></img>

        <p>Address: {campus.address}</p>
        <p>Description: {campus.description}</p>
        <div>
          <Link to={`/editcampus/${campus.id}`}>
            <button id = "editcampus">Edit Campus Information</button>
          </Link>
          <button id = "deletecampus" onClick={() => deleteCampus()}>Delete Campus</button>
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
              <tr key = {student.id}>
                <th className = "tablecell">{name}</th>
                <th className = "tablecell"><button onClick={unenrollStudent}>Unenroll</button></th>
              </tr>
            );
          })}
        </table>
        <button id = "enrollnewstudent">Enroll New Student</button>
      </div>
    </div>
  );
};

export default CampusView;