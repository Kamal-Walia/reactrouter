import { useParams } from 'react-router-dom';
import mockData from '../MockData';

const Home2 = () => {
    const URLParams = useParams();
    const currentBlog = mockData.find(item => item.id === Number(URLParams.userName))
    console.log('KW102', URLParams )
    return(
        <div>Hello {URLParams.userName} {URLParams.lastName}
        <p>{currentBlog.title}</p>
        <p>{currentBlog.data}</p>
        </div>

    )
}

export default Home2