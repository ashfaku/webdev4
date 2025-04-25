
import { Link } from "react-router-dom";
import "../../App.css";
const CampusTile = (props) => {
    const campus = props.campus;
    return <div class = "campustile" key={campus.id}>
        <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
        </Link>
        <div>Campus ID: {campus.id}</div>
        {/* <p>{campus.address}</p>
        <p>{campus.description}</p> */}
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="College Campus" width="50%"></img>
        <hr></hr>
    </div>
}

export default CampusTile;