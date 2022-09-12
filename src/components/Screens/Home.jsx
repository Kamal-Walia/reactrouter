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

            <Link to={`/home2/${4}/technology`} >GO TO HOME 1</Link>
            <br />
            <Link to={`/home2/${1}/travel`} >GO TO HOME 2</Link>
            <br />
            <Link to={`/home2/${2}/food`} >GO TO HOME 3</Link>
            <br />
            <Link to={`/home2/${3}/technology`} >GO TO HOME 4</Link>
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