import Card from 'react-bootstrap/Card';


function BookCard({image,rating,name}){

return(

    <Card style={{width:"250px" ,border: 'double' ,margin:'10px 10px' ,height:'500px'}}>
    <Card.Img variant="top"  src={image}   alt="ss" style={{ width: '200px', height:'300px' ,margin:'5px auto'}} />
    <Card.Body>
    <Card.Text   > {rating} </Card.Text>
      <Card.Title  style={{textAlign:"center" }} > {name} </Card.Title>
      
    </Card.Body>
  </Card>

    
);


}

export default BookCard;