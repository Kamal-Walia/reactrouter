import { useParams } from "react-router-dom";

const Login = (props) => {
    const params = useParams()
    console.log('KW101', params)
    return(
        <div>Login {params.user}</div>
        
    )
}

export default Login