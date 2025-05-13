import Header from "./Header";
import EditStudentView from "../views/EditStudentView";
import { fetchStudentThunk } from "../../store/thunks";
import { connect } from "react-redux";
import { Component } from "react";

class EditStudentContainer extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;  // Getting the id from the route params
        this.props.fetchStudent(id);  // Fetch student data when component mounts
    }

    render() {
        // If student data is still loading, show a loading message
        if (!this.props.student || Object.keys(this.props.student).length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Header />
                <EditStudentView student={this.props.student} />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        student: state.student,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
