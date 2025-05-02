/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { editStudentThunk, fetchCampusThunk } from "../../store/thunks";
import { connect } from 'react-redux';
import "../../App.css"

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  let [deleted, Delete] = useState(false);
  const unenrollStudent = async (student) => {
    await props.editstudent({
      id: student.id,
      firstname: student.firstname,
      lastname: student.lastname,
      campusId: null,
      email: student.email,
      image_url: student.image_url,
      gpa: student.gpa
    });
    await props.fetchcampus(campus.id); 
  }
  //
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
        <p>Image URL: {campus.image_url}</p>
        <div>
          <Link to={`/editcampus/${campus.id}`}>
            <button id = "editcampus">Edit Campus Information</button>
          </Link>
          <button id = "deletecampus" onClick={() => deleteCampus()}>Delete Campus</button>
        </div>
        <h2>Total Students: {campus.students.length}</h2>
        {campus.students.length === 0 ?
          <div>There are no students.</div> 
          : 
          <div>
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
                  <th className = "tablecell"><button onClick={() => unenrollStudent(student)}>Unenroll</button></th>
                </tr>
              );
            })}
            </table>
          </div>
        }
        <Link to = {"/newstudent"} state={{ id: campus.id}}>
         <button id = "enrollnewstudent">Enroll New Student</button>
        </Link>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
      editstudent: (student) => dispatch(editStudentThunk(student)),
      fetchcampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(null, mapDispatch)(CampusView);
