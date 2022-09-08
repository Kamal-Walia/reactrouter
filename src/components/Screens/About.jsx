import {NavLink} from 'react-router-dom'
// import { useLocation } from "react-router-dom";

const About = () => {
    // const location = useLocation()
    // const search = new URLSearchParams(location.search);
    // console.log("KW101", search.get('my'), search.get('my1'))
    return(
        <div style={{backgroundColor: 'green'}}>About Page
            <p>
            psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
            <NavLink to={'/login/kamal'}> Go To Login Page </NavLink>
                </p>
             
        </div>
    )
}


export default About