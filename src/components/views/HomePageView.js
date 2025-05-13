/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import "../../App.css";
import { Link } from 'react-router-dom';

const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <h1 id = "homepagetitle">Home Page</h1>
      <div id = "homepagegrid">
        <div className="box">
          View Campuses
          <div>
            <Link to={'/campuses'} >
              <button className="homepagebutton">Click Here!</button>
            </Link>
          </div>
          <div>
            <img className="homepageimg" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Campus" />
          </div>
        </div>
        <div className="box">
          View Students
          <div> 
            <Link to={'/students'} >
              <button className="homepagebutton">Click Here!</button>
            </Link>
          </div>
          <div>
            <img className="homepageimg" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt = "Students" />
          </div>
        </div>
      </div>
    </div>
  );    
}

export default HomePageView;