import { Outlet, Link } from "react-router-dom";

const Profile = () => {
    return (
        <div style={{backgroundColor:'yellow'}}>Profile Component
        <br/>
            <Link to={'/Profile/edit'} >GO TO Profile Edit Screen</Link>
            <br/>
            <Link to={'/Profile/edit/about'} >GO TO Profile Edit about Screen</Link>
            <br/>
            <Link to={'/Profile/about'} >GO TO Profile about Screen</Link>
            <Outlet />
        </div>
    )
}

export default Profile;