
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Graphico from './Cards/Graphico';
import Plumber from './Cards/Plumber';
import Pokedon from './Cards/Pokedon';
import Frenchys from './Cards/Frenchys';
import CardTest from './Cards/CardTest';
import Home from './Home'
import ExistingClients from './ExistingClients';
import ErrorPage from './ErrorPage';
import NewCard from './NewCard';
import Card from './Card';
import LogoUpload from './LogoUpload';
import Login from './Login';
import SignUp from './SignUp';
import SirensAndSprites from './Cards/SirensAndSprites.js';

function App() {
  return (
    <div className="App">

<Routes>
    <Route path='/' element={ <Home />} />
    <Route path='clients' element={ <ExistingClients/> } />
    <Route path='/new-card' element={ <NewCard/>} />
    <Route path='/graphico' element={ <Graphico/> } />
    <Route path='/1800plumber' element={ <Plumber/> } />
    <Route path='/pokedon' element={<Pokedon/>} />
    <Route path='/frenchys' element={<Frenchys/>} />
    <Route path='/card/:organization' element={<Card/>} />
    <Route path='/card-test' element={<CardTest/>} />
    <Route path='/logo-upload/:organization' element={<LogoUpload/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/Sirens-&-Sprites' element={<SirensAndSprites/>} />
    <Route path='*' element={<ErrorPage/>} />
  </Routes>
    </div>
  );
}

export default App;
