import axios from "axios";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { Validation } from "./JS/actions/action";





function Shop(){
    const Ordereds=useSelector (state=>state.cart)
  
    const total =useSelector (state=>state.total)
    
    const add=()=>{
        if(Ordereds.length==0)
        alert("liste  vide")
        else
        { Validation(Ordereds)
            
        
            }
    }


return(
   
<div className="container content-section">
           
           <div className="cart-row">
               <span className="cart-item cart-header cart-column">Livre</span>
               <span className="cart-price cart-header cart-column">Prix</span>
               <span class="cart-quantity cart-header cart-column">QUANTITY</span>
           </div>
                 
           { (Ordereds)? Ordereds.map(el=>{return(<BookItem title={el.title} price={el.price} quantity={el.quantity} key={el.id} id={el.id}/>)}) :null }


           <div className="cart-total">
               <strong className="cart-total-title">Total:</strong>
               <span className="cart-total-price">{total}DT</span>
           </div>
           <button className="btn btn-primary btn-purchase" type="button" style={{backgroundColor:"black"}} onClick={add} > Valider</button>
</div>


);
}
export default Shop;