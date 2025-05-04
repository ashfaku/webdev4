
import { Link } from "react-router-dom";
import "../../App.css";
const CampusTile = (props) => {
    const campus = props.campus;
    return <div className = "campustile" key={campus.id}>
        <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
        </Link>
        <div>Campus ID: {campus.id}</div>
        <img src={campus.image_url} alt="College Campus" width="50%"></img>
        <hr></hr>
    </div>
}

export default CampusTile;