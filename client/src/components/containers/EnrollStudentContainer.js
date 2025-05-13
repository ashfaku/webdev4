import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EnrollStudentView from '../views/EnrollStudentView';
import { addStudentThunk } from '../../store/thunks';
import { useLocation } from 'react-router-dom';

const EnrollStudentContainer = (props) => {
  // Initialize state
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [campusId, setCampusId] = useState(null);
  const [email, setEmail] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [gpa, setGpa] = useState(0.0);
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState(null);

  // Get campusId from location state
  const location = useLocation();
  const campusIDToFillIn = location.state.id;

  useEffect(() => {
    if (campusIDToFillIn) {
      setCampusId(campusIDToFillIn);
    }
  }, [campusIDToFillIn]);

  const dispatch = useDispatch();

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'image_url':
        setImageUrl(value);
        break;
      case 'gpa':
        setGpa(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent page reload on submit
    if (gpa < 0 || gpa > 4.0) {
      alert("GPA is required to adhere to a 4.0 scale! Please reenter.");
      return;
    }
    const student = {
      firstname,
      lastname,
      campusId,
      email,
      image_url,
      gpa,
    };

    // Dispatch action to add the student via the Redux Thunk
    const newStudent = await dispatch(addStudentThunk(student));

    if (newStudent) {
      // Update state for redirect after successful addition
      setRedirect(true);
      setRedirectId(newStudent.id);
      console.log(newStudent);
      console.log("Redirect?", newStudent.id);
    }
  };

  // Redirect to the new student's page
  if (redirect && redirectId) {
    return <Redirect to={`/student/${redirectId}`} />;
  }

  return (
    <div>
      <Header />
      <EnrollStudentView 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        firstname={firstname}
        lastname={lastname}
        email={email}
        image_url={image_url}
        gpa={gpa}
        campusId={campusId}
      />
    </div>
  );
};

export default EnrollStudentContainer;
