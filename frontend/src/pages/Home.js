import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
const Home = () => {
    return (
      
        localStorage.getItem("loggedIn") ? 
        <div >
          {/* <div class="text-right">
          <Link to ='./challenge'>
          <img src="cha.jpg" alt="HTML tutorial" width="200" height="200" float= 'right'></img>
          </Link></div> */}
         <div class="col-md-12 text-center" >
          <br></br>
          <img src="logo.jpeg" alt="HTML tutorial" width="150" height="200" align="center"></img>
          <br></br>
          <br></br>
        <h1 style={{ color: "white" }} align="center" >Welcome to Pro Time!</h1>
        <br></br>
<br></br>

<h4 style={{ color: "white" }} align="center" >The most powerful esports competitions on the Pro Time platform</h4>
{/*<Link to ='./Register'>
<button  className='btn btn-primary w-100'>
          Register
        </button>
        </Link>*/}
        <br></br>
        <br></br>
        <br></br>
        
        <h6 style={{color: "white"}}> Pro Time Network specializes in demarcating clans and organizing daily challenges and tournaments</h6>
       <br></br>
        <img src="games.png" alt="HTML tutorial" width="55" height="55" align="center"></img>
        <img src="instagram.png" alt="HTML tutorial" width="55" height="55" align="center"></img>
        <img src="twitter.png" alt="HTML tutorial" width="55" height="55" align="center"></img>
        </div>
        
        <div >
          </div>
        </div>
        :
        <div class="col-md-12 text-center" >
        <br></br>
        
        <img src="logo.jpeg" alt="HTML tutorial" width="150" height="200" align="center"></img>
        <br></br>
<br></br>
      <h1 style={{ color: "white" }} align="center" >Welcome to Pro Time!</h1>
      <br></br>
<br></br>

<h4 style={{ color: "white" }} align="center" >The most powerful esports competitions on the Pro Time platform</h4>
<br></br>
<Link to ='./Register'>
<button  className='btn btn-primary w-300' align="center">
        Register Now !
        </button>
        </Link>
        <br></br>
        `
        <br></br>
        <h6 style={{color: "white"}}> Pro Time Network specializes in demarcating clans and organizing daily challenges and tournaments</h6>
        <br></br>
               <img src="games.png" alt="HTML tutorial" width="50" height="45" align="center"></img>
        <img src="instagram.png" alt="HTML tutorial" width="50" height="45" align="center"></img>
        <img src="twitter.png" alt="HTML tutorial" width="50" height="45" align="center"></img>
        </div>



    

    );
}

export default Home;