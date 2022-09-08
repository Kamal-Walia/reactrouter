import { Outlet } from "react-router-dom";

const EditProfile = () => {
    return (
        <div style={{backgroundColor:'red'}}>Edit Profile Component
        <Outlet />
        </div>
    )
}

export default EditProfile;