import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import Card from '../components/Card'
import Challenge from "./Challenge";


const Challenges = ()=>{
 const [challenge, setChalleng] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/Api/v1/chl/get', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        
      
        
      });
      
      const json = await data.json();
  
      setChalleng(json);
    }
  
    fetchData();
  }, [])

        
return (
  
  <>
 
        
  <h1 style={{color:'white', textAlign:'center' , padding:'10px'}} >Challenges</h1>
   

  <div>
    <Link to ='/Challenge'>
    <div class="col-md-12 text-center">
<button className='btn btn-primary text-center'>
        Add New Challenge!
        </button>
        </div>
        </Link>
        </div>

  

  <div style={{  opacity: 0.75, padding: '10px' }}>
    {
      challenge.map(e=>(
        <>
        <div style={{ padding: '10px', textAlign: 'center', display: 'inline-block'}} >
          {Card(e.game,e.userName,e.description)}
          {/* { e.RegisterLink ?  Card(e.game,e.userName,e.description,e.RegisterLink) : Card(e.game,e.userName,e.description) }  */}
          {/* to add link make , "link" */}
        </div>
        </>
      ))
    }
  </div>
  </>
)
    }
      export default Challenges; 
      