import NewCampusView from '../views/NewCampusView';
import Header from './Header';

import { addCampusThunk } from '../../store/thunks';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewCampusContainer = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [redirectID, setRedirectID] = useState(null);
    // const uploadToDatabase = async (name, address, description) => {
    //     console.log("Uploading?");
    //     try {
    //         const response = await fetch("http://localhost:3001/api/campuses", {
    //             method: "POST",
    //             headers: {
    //             "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 address,
    //                 description,
    //             }),
    //         });
    //         const responseData = await response.json();
    //         console.log("Response from backend:", responseData);
    //     } 
    //     catch (error) {
    //         console.error("Error sending data:", error);
    //     };
    // }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log(event.target);
        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData.entries());
        const address = data.buildingnum + " " + data.street + ", " + data.city + ", " + data.usState + ", " + data.zipcode;
        const description = data.description;
        const name = data.name;
        console.log(name, address, description);
        // uploadToDatabase(name, address, description);
        let newCampus = await props.addCampus({
            name: name,
            address: address,
            description: description
        });
        // console.log("----------");
        // console.log(newCampus);
        // console.log("----------");
        setRedirectID(newCampus.id);
        setRedirect(true);
        
    }
    if (redirect) {
        return <Redirect to={`/campus/${redirectID}`} />
    }
    return <div>
        <Header />
        <NewCampusView handleSubmit={handleSubmit} />
    </div>
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);
