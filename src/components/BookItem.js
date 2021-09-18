import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItem, SubTotal } from "./JS/actions/action";

function BookItem({title,price,id}){
    const Ordereds =useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const total =useSelector (state=>state.total)
    const[quantity,setquantity] = useState(1)

    const onchange =(e)=>{setquantity(e.target.value) ;console.log(quantity)}
    
    const remove=()=>{dispatch(RemoveItem(id,Ordereds));dispatch(SubTotal(total,price));}

return(

    <div className="cart-row">
                    <div className="cart-item cart-column">
                        
                    <span className="cart-item-title">{title}</span>
                    </div>
                    <span className="cart-price cart-column">{price}DT</span>
                    
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number"  value={quantity}  onChange={onchange}  />
                        
                        <button className="btn btn-danger"  type="button"  onClick={remove}>annuler</button>
                    </div>
                </div>
)


}
export default BookItem;