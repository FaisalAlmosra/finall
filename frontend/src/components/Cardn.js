import Card from 'react-bootstrap/Card';

function MyCard(topic,body,sources,url='#') {
    return (
      <Card style={{ width: '82rem', backgroundImage: 'url(./n.jpg)', color:'white' }}>
        <Card.Body>
          <Card.Title style={{color:"black"}}>
            {topic}
            </Card.Title>
            <br></br>
          <Card.Text style={{color:"black"}}>
            {body}
            </Card.Text>
           
          <Card.Text style={{color:"black"}} > sources :
            {sources}
          </Card.Text>
          {/* <Card.Link href={url}>Click here!</Card.Link> to add link */}
        </Card.Body>
      </Card>
    );
  }
  export default MyCard;