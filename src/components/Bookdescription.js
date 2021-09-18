
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import React, { useEffect, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddTotal } from './JS/actions/action';

function Bookdescription( ){
  const listOfBooks = useSelector(state => state.book);
  const Ordereds=useSelector (state=>state.cart)
  const total =useSelector (state=>state.total)
  const dispatch=useDispatch()
  const {id} = useParams();
  const [item,setItem] = useState()
  useEffect(()=>setItem(listOfBooks? listOfBooks.find(book=>book.id == id):""),[]);
 console.log(Ordereds)
 const addcart = ()=>{ 
  if(item.stock<=0)
  alert("livre indisponible");
  else{
    if((Ordereds)&&(Ordereds.find(el=> el.id ===item.id )))
  alert("vous avez déja ajouter ce livre")
  else {  dispatch(AddToCart(item.title,item.price,item.id))
     dispatch(AddTotal(total,item.price))}

} 
  
  } 
  
if(!item)
return(<h1>err</h1>)
else
{ 
const stock= ()=>{
    if (item.stock>0)
    return(<h3 style={{color:'green'}}>Dispnible</h3>)
    else
    return(<h3 style={{color:'red'}}>Non Dispnible</h3>)
}


 return(<div  style={{width:"800px",margin:'10px auto'}} >
<Card style={{margin:'20px 20px'}}>
  
  <Card.Title  style={{textAlign:"center" , margin:'20px 20px'}} > {item.title} </Card.Title>
  
  <div className="prix">
  <div>
  <Card.Img variant="top"  src={item.image}   alt="ss"  style={{width:"300px",height:"500px" , margin:'10px'}}/>
  <Card.Text  style={{paddingLeft:'30px'}} > { item.rating} </Card.Text> 
  </div>

  <div style={{PaddingTop:'50px'}} >
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
<Tab eventKey="home" title="Description">
{item.description}
</Tab>
</Tabs>
  <h1>{item.price}DT</h1>
  <div>
  <Button variant="primary" style={{width:'100px'}} onClick={addcart}  >Ajouter</Button> 
<strong>{stock()}</strong>
  </div>
  </div>     
  
  </div>

  <Card.Body>
  
    
    
  </Card.Body>
</Card>
</div>);   
}}

export default Bookdescription;