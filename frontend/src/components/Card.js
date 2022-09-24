import Card from 'react-bootstrap/Card';

function MyCard(game,userName,description,url='#') {
  return (
    <Card style={{ width: '18rem', backgroundImage: 'url(./2.jpeg)', color:'white' }}>
      <Card.Body>
        <Card.Title>{game}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userName}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Card.Link href={url}>Click here!</Card.Link> to add link */}
      </Card.Body>
    </Card>
  );
}

export default MyCard;