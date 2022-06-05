import style from './App.css';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home.jsx';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Card from './components/Card/Card.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
function App() {
  const loading = useSelector(state => state.app)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        {loading && (<div className={style.progressLine}></div>)}
        <Route path='/Dogs' element={<Home /> }/>
        <Route path='Dogs/:id' element={< Detail />}/>
        <Route path='/create' element={< Form />}/>
      </Routes>
    </div>
  );
}

export default App;
