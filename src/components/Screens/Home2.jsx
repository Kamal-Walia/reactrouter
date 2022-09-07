import { useParams } from 'react-router-dom';

const Home2 = () => {
    const URLParams = useParams();
    console.log('KW102', URLParams )
    return(
        <div>Hello {URLParams.userName} {URLParams.lastName}</div>
    )
}

export default Home2