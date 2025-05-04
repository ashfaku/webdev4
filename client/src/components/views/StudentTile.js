
import { Link } from "react-router-dom";
import "../../App.css";
const StudentTile = (props) => {
    const student = props.student;
    return <div className = "studenttile" key={student.id}>
        <Link to={`/student/${student.id}`}>
            <h2>{student.firstname + " " + student.lastname}</h2>
        </Link>
        <div>Student ID: {student.id}</div>
        <img src={student.image_url} alt=""></img>
        <hr></hr>
    </div>
}

export default StudentTile;