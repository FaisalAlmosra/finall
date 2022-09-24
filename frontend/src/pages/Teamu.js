import React, { useEffect ,useState } from "react";
import Card from '../components/cardu'
import { Link } from "react-router-dom";
import {useSearchParams} from 'react-router-dom'


const Teamu = ()=>{
 const [team, setTeam] = useState([])
 const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:8080/Api/v1/TeamDeatils/teams-user?teamsl=${searchParams.get('teamName')}`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      
        
      });
      const json = await data.json();
      console.log(data);
      console.log(team);
      setTeam(json);
    }
    fetchData();
  }, [])
 
return (
  <>




  <div>

  <h1 style={{color:'white', textAlign:'center', padding:'10px'}} >{searchParams.get('teamName')}</h1>
  </div>
  <div style={{  opacity: 0.75, padding: '10px' }}>
    {
      team.map(e=>(
        <>
        <div className='mb-3'>

</div>

<div className='mb-3'>
        </div>

        <div style={{ padding: '10px', textAlign: 'center', display: 'inline-block'}} >
          {Card(e.nameUser,e.nickName,e.teamGame)}
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
      export default Teamu; 
      