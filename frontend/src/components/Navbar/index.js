import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        const request = await fetch('http://localhost:8080/api/v1/auth/logout', {credentials:'include'});
        if (request.status === 204) {
          localStorage.removeItem('loggedIn');
          navigate('/login');
        }
      };


return (
	<>
	<Nav>
		<Bars />

		{
            localStorage.getItem("loggedIn") ? 

            <NavMenu>
            <NavLink to='/' activeStyle>
            <h3> Home</h3>
            </NavLink>
            <NavLink to='/support' activeStyle>
            <h5> Support</h5>
            </NavLink>
            {/* <NavLink to='/team' activeStyle>
            <h5> Team </h5>
            </NavLink> */}
            {/* <NavLink to='/challenge' activeStyle>
            <h5>Challenge</h5>
            </NavLink> */}
            <NavLink to='/challenges' activeStyle>
                <h5>Challenges</h5>
            </NavLink>
            <NavLink to='/teams' activeStyle>
                <h5>Teams</h5>
            </NavLink>
            {/* <NavLink to='/league' activeStyle>
            <h5> League</h5>
            </NavLink> */}
            <NavLink to='/leagues' activeStyle>
            <h5> Leagues</h5>
            </NavLink>
            <NavLink to='/news' activeStyle>
            <h5> News </h5>
            </NavLink>
            <NavBtn >
            <button onClick={logout} class="btn btn-danger">Logout</button>
            </NavBtn>
            </NavMenu>
            
            :

            <NavMenu>
            <NavLink to='/' activeStyle>
            <h3> Home</h3>
            </NavLink>
            <NavLink to='/login' activeStyle>
              <h5>  Login </h5>
            </NavLink>
            <NavLink to='/register' activeStyle>
                <h5>Register</h5>
            </NavLink>
            </NavMenu>
        }
	</Nav>
	</>
);
};

export default Navbar;
