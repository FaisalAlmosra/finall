import React, { useEffect ,useState } from "react";
import Card from '../components/Cards'
import { Link, Navigate, useNavigate } from "react-router-dom";


const Teams = ()=>{
 const [team, setTeam] = useState([])
    const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/Api/v1/Team', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      
        
      });
      const json = await data.json();
  
      setTeam(json);
    }
    fetchData();
  }, [])

    const goToTeam = (link) =>{
        navigate(`/teamu?teamName=${link}`)
    }
return (
  <>
  <div>

  <h1 style={{color:'white', textAlign:'center', padding:'10px'}} >Teams</h1>
  </div>
  <div>
    <Link to ='/Team'>
    <div class="col-md-12 text-center">
<button className='btn btn-primary text-center'>
        Make New Team!
        </button>
        </div>
        </Link>
        </div>
        <br></br>
        <div>
    <Link to ='/Teamj'>
    <div class="col-md-12 text-center">
<button className='btn btn-primary text-center'>
        Join To Team!
        </button>
        </div>
        </Link>
        </div>
  <div style={{  opacity: 0.75, padding: '10px' }}>
    {
      team.map(e=>(
        <>
        <div style={{ padding: '10px', textAlign: 'center', display: 'inline-block'}} >
          {Card(e.name,e.nickName,e.teamGame)}
          <button onClick={()=>{goToTeam(e.name)}}>Go to team page!</button>
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
      export default Teams; 
      