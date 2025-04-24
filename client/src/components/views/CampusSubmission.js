import "../../App.css";

const CampusSubmission = () => {

    const uploadToDatabase = async (name, address, description) => {
        console.log("Uploading?");
        try {
            const response = await fetch("http://localhost:3001/api/campuses", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name,
                address,
                description,
                }),
            });
            const responseData = await response.json();
            console.log("Response from backend:", responseData);
        } 
        catch (error) {
            console.error("Error sending data:", error);
        };
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
        const address = data.buildingnum + " " + data.street + ", " + data.city + ", " + data.state + ", " + data.zipcode;
        const description = data.description;
        const name = data.name;
        console.log(name, address, description);
        uploadToDatabase(name, address, description);
    }
    return <div>
        <form id = "campussubmit" onSubmit={handleSubmit}>
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