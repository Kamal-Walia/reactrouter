import {Link} from 'react-router-dom'

const Home = () => {

    const name = 'Kamal'
    return(
        <div>Home Page
            {/* <Link to={
                {
                    pathname:'/about',
                    search: '?my=1&my1=2'
                }
            }> Go To About Page </Link>
            <br/>
            <Link to={
                {
                    pathname:'/signup',
                    search: '?my=1&my1=2'
                }
            }> Go To SignUp Page </Link> */}

            <Link to={`/home2/${name}/walia`} >GO TO HOME 2</Link>
            <br />
            <Link to={{
                pathname:'/NewLogin',
                search: '?name=Kamal&midName=walia'
            }}>Go to New Login</Link>
<br />
        <Link to={'/Profile'} >GO TO Profile Screen</Link>
        </div>
        
    )
}


export default Home