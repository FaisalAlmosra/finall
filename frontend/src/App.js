import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './components/AuthRoute';
import Admin from './pages/Admin';
import Support from './pages/Support';
import Challenge from './pages/Challenge';
import Challenges from './pages/Challenges';
import Teams from './pages/Teams';
import Team from './pages/Team';
import League from './pages/League';
import Leagues from './pages/Leagues';
import { useState } from 'react';
import Navbar from './components/Navbar/';
import Home from './pages/Home';
import Teamu from './pages/Teamu';
import News from './pages/News';
import Teamj from './pages/Teamj';


const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>

    <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("/pro.jpg")',height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
          
    <Navbar/>
    <challenges></challenges>
      <Routes>
      
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AuthRoute setUser={setUser} />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Admin user={user} />} />
          <Route path='/support' element={<Support/>} />
          <Route path='/challenge' element={<Challenge/>} />
          <Route path='/challenges' element={<Challenges/>} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/teamu' element={<Teamu/>} />
          <Route path='/league' element={<League/>} />
          <Route path='/leagues' element={<Leagues/>} />
          <Route path='team' element={<Team/>} />
          <Route path='teamj' element={<Teamj/>} />
          <Route path='news' element={<News/>} />

          
          
        </Route>
       
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;
