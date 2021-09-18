
import { addToCart, removeItem } from "../actions/action-type";


const initialState =[]


const CartReducer=(state=initialState,action)=>{

switch(action.type){
case addToCart:  
  { return([...state, action.payload]);}

case removeItem:{} return action.payload

default: 
return(state); 
}
}
export default CartReducer;