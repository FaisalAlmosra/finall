import React, { useEffect ,useState } from "react";
import Card from '../components/cardss'
import { Link } from "react-router-dom";


const Leagues = ()=>{
 const [league, setLeague] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/Api/v1/league', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      
        
      });
      const json = await data.json();
  
      setLeague(json);
    }
    fetchData();
  }, [])

        
return (
  <>
  <div>

  <h1 style={{color:'white', textAlign:'center', padding:'10px'}} >Leagues</h1>
  </div>
  <div>
    <Link to ='/League'>
    <div class="col-md-12 text-center">
<button className='btn btn-primary text-center'>
       Make New League!
        </button>
        </div>
        </Link>
        </div>
  <div style={{  opacity: 0.75, padding: '10px' }}>
    {
      league.map(e=>(
        <>
        <div style={{ padding: '10px', textAlign: 'center', display: 'inline-block'}} >
          {Card(e.name,e.details,e.registerLink,e.registerLink)}
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
      export default Leagues; 
      