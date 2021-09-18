
  
import { subTotal , addTotal } from "../actions/action-type";
    
    
    const initialState =0
    
    
    const TotalReducer=(state=initialState,action)=>{
    
    switch(action.type){
    case addTotal:  
      return (action.payload) ;
    
    case subTotal: return (action.payload)
    
    default: 
    return(state); 
    }
    }
    export default TotalReducer;; 