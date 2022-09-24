import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import Card from '../components/Cardn'
import Challenge from "./Challenge";


const News = ()=>{
 const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/api/v1/news', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        
      
        
      });
      
      const json = await data.json();
  
      setNews(json);
    }
  
    fetchData();
  }, [])

        
return (
  
  <>
 
        
  <h1 style={{color:'white', textAlign:'center' , padding:'10px'}} >News</h1>
   

 

  

  <div style={{  opacity: 0.75, padding: '10px' }}>
    {
      news.map(e=>(
        <>
        <div style={{ padding: '10px', textAlign: 'center', display: 'inline-block'}} >
          {Card(e.topic,e.body,e.sources)}
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
      export default News; 
      