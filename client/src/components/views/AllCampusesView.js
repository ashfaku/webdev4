/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NewCampusView from "./NewCampusView.js";
import CampusTile from "./CampusTile.js";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  // console.log(props.allCampuses);
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }
  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <CampusTile campus = {campus} />
      ))}
      <br/>
        <button>Add New Campus</button>
          <NewCampusView />
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;