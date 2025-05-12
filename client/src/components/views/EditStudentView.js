import "../../App.css";
import { editStudentThunk } from "../../store/thunks";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";


/*

student: Object
    campus: Object
        address: "65-30 Kissena Blvd, Queens, NY 11367"
        createdAt: "2025-04-27T02:58:09.643Z"
        description: "This is a school in Queens, New York."
        id: 2
        name: "Queens College"
        campusId: 2
    firstname: "Mary"
    id: 2
    lastname: "Johnson"
*/
const EditStudentView = (props) => {
    const { student } = props;
    console.log("Student props)", props);

    // Initialize state with empty strings to prevent uncontrolled input warning
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [studentID, setStudentID] = useState("");
    const [campusID, setCampusID] = useState("");
    const [email, setEmail] = useState("");
    const [image_url, setImageURL] = useState("");
    const [gpa, setGPA] = useState(0.0);
     
    let [edited, Edit] = useState(false);

    // If student data is available, update state
    useEffect(() => {
        if (student) {
            setFirstName(student.firstname);
            setLastName(student.lastname);
            setStudentID(student.id);
            setCampusID(student.campusId);
            setEmail(student.email);
            setImageURL(student.image_url);
            setGPA(student.gpa);
        }
    }, [student]); // Only run when student changes

    // If student data hasn't been loaded, show loading message
    if (!student) {
        return <div>Loading student data...</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let id = studentID, campusId = campusID;
        // console.log("Information", { name, imageURL, address, description });
        if (gpa < 0 || gpa > 4.0) {
            alert("GPA must be within 0.0 to 4.0 scale! Please reenter");
            return;
        }
        console.log(await props.editstudent({ id, firstname, lastname, campusId, email, image_url, gpa }));
        Edit(true);
    };
    if (edited) {
        return <Redirect to = {`/student/${student.id}`} />;
    }
    return (
        <div id="editstudentview">
            <h2 id="editstudentviewtitle">{student.firstname + " " + student.lastname}</h2>
            <div id="editstudentviewbody">
                <form id="editstudentviewform" onSubmit={handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="College Name..."
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Image Link..."
                        />
                    </div>
                    <div>
                        <label>Campus ID: </label>
                        <input
                            type="number"
                            value={campusID}
                            onChange={(e) => setCampusID(e.target.value)}
                            placeholder="Campus ID..."
                        />
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMail address..."
                        />
                    </div>
                    <div>
                        <label>Image URL: </label>
                        <input
                            type="url"
                            value={image_url}
                            onChange={(e) => setImageURL(e.target.value)}
                            placeholder="Image URL..."
                        />
                    </div>
                    <div>
                        <label>GPA: </label>
                        <input
                            type="number"
                            value={gpa}
                            onChange={(e) => setGPA(e.target.value)}
                            placeholder="GPA..."
                        />
                    </div>
                        <button id="editstudentsubmit" type="submit">
                            Submit
                        </button>
                </form>
            </div>
        </div>
    );
};

const mapDispatch = (dispatch) => {
    return {
        editstudent: (student) => dispatch(editStudentThunk(student)),
    };
};

export default connect(null, mapDispatch)(EditStudentView);
