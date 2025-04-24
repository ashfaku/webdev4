import "../../App.css";

const CampusSubmission = () => {

    return <div>
        <form id = "campussubmit">
            <input type="text" id="name" name="name" placeholder="College Name..." required />
            <br />
            <div>
                <input type="text" id="buildingnum" name="buildingnum" placeholder="Building Number..." required />
                <input type="text" id="street" name="street" placeholder="Street..." required />
                <input type="text" id="city" name="city" placeholder="City..." required />
                <input type="text" id="state" name="state" placeholder="State..." required />
                <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code..." required />
            </div>
            <br />
            <input type="text" id="description" name="description" placeholder="Description..." />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}


export default CampusSubmission;