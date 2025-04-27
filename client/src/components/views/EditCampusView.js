import "../../App.css";
import { editCampusThunk } from "../../store/thunks";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const EditCampusView = (props) => {
    const { campus } = props;

    // Initialize state with empty strings to prevent uncontrolled input warning
    const [collegeName, setCollegeName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [id, setID] = useState("");

    // If campus data is available, update state
    useEffect(() => {
        if (campus) {
            setCollegeName(campus.name || "");
            setImageURL(campus.imageURL || "dsifbdsfds.jpg");
            setAddress(campus.address || "");
            setDescription(campus.description || "");
            setID(campus.id);
        }
    }, [campus]); // Only run when campus changes

    // If campus data hasn't been loaded, show loading message
    if (!campus) {
        return <div>Loading campus data...</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ collegeName, imageURL, address, description });
        console.log(await props.editCampus({ id, collegeName, address, description }));
        
    };

    return (
        <div id="editcampusview">
            <h2 id="editcampusviewtitle">{campus.name}</h2>
            <div id="editcampusviewbody">
                <form id="editcampusviewform" onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            value={collegeName}
                            onChange={(e) => setCollegeName(e.target.value)}
                            placeholder="College Name..."
                        />
                    </div>
                    <div>
                        <label>Image URL: </label>
                        <input
                            type="text"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            placeholder="Image Link..."
                        />
                    </div>
                    <div>
                        <label>Address: </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address..."
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description..."
                            id="campusdescriptionedit"
                        />
                    </div>
                    <button id="editcampussubmit" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapDispatch = (dispatch) => {
    return {
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
    };
};

export default connect(null, mapDispatch)(EditCampusView);
