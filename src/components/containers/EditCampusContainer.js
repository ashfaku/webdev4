import Header from "./Header";
import EditCampusView from "../views/EditCampusView";
import { fetchCampusThunk } from "../../store/thunks";
import { connect } from "react-redux";
import { Component } from "react";

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;  // Getting the id from the route params
        this.props.fetchCampus(id);  // Fetch campus data when component mounts
    }

    render() {
        // If campus data is still loading, show a loading message
        if (!this.props.campus || Object.keys(this.props.campus).length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Header />
                <EditCampusView campus={this.props.campus} />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        campus: state.campus,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
