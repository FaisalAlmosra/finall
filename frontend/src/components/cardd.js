import Card from 'react-bootstrap/Card';

function MyCard(nickName,nameUser,teamName,url='#') {
    return (
      <Card style={{ width: '18rem', backgroundImage: 'url(./2.jpeg)', color:'white' }}>
        <Card.Body>
          <Card.Title>{nickName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{nameUser}</Card.Subtitle>
          <Card.Text>teamName : 
            {teamName}
          </Card.Text>
          {/* <Card.Link href={url}>Click here!</Card.Link> to add link */}
        </Card.Body>
      </Card>
    );
  }
  export default MyCard;