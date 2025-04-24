import "../../App.css";

const CampusSubmission = () => {

    return <div>
        <form id = "campussubmit">
            <input type="text" id="name" name="name" placeholder="College Name..." required />
            <br />
            <input type="text" id="address" name="address" placeholder="Address..." required />
            <br />
            <input type="text" id="description" name="description" placeholder="Description..." />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}


export default CampusSubmission;