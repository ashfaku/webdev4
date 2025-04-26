import "../../App.css";
const EditCampusView = (props) => {
    let collegeName = "Hunter College"
    let imageURL = "udisbhfbhdg.jpg";
    let address = "123 Main St, New York, NY, 10002";
    let description = "dsuigfjdkoguidfjigou sdfy78udsfg dsuifh dsiuhf iudhf iudesfg iuscxgb dfhhg dfsg iudfhigu dfiug fuidhg iu";
    return <div id = "editcampusview">
        <h2 id = "editcampusviewtitle">{collegeName}</h2>
        <div id = "editcampusviewbody">
            <form id = "editcampusviewform">
                <div>
                    <label>Name: </label>
                    <input type = "text" value = {collegeName} placeholder="College Name..."></input>
                </div>
                <div>
                    <label>Image URL: </label>
                    <input type = "text" value = {imageURL} placeholder="Image Link..."></input>
                </div>
                <div>
                    <label>Address: </label>
                    <input type = "text" value = {address} placeholder="Address..."></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type = "text" value = {description} placeholder="Description..." id = "campusdescriptionedit"></input>
                </div>
                <button>Submit</button>
            </form>

        </div>
    </div>

}

export default EditCampusView;