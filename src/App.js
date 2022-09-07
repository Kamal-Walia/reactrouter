import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Screens/Home';
import About from './components/Screens/About';
import Error from './components/Screens/Error';
import Login from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Home2 from './components/Screens/Home2';
import NewLogin from './components/Screens/NewLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Login/:user' element={<Login />} />
        <Route path='/Signup' element={<Signup fname={'ksks'}/>}/>
        <Route path='/home2/:userName/:lastName' element={<Home2 />} />
        <Route path='/NewLogin' element={<NewLogin />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
