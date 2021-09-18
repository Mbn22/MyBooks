import { filterBooks, GetBooks  } from "../actions/action-type";


const initialState =[  {
    id:10 ,
    title: "Histoire de la Tunisie" ,
    price: 37   ,
    stock: 77    ,
    description : ""
    ,rating: "⭐⭐⭐⭐",
   image: "/images/0010.jpg"  ,
    type: "Livre Tunisien"
    }]


const BookReducer=(state=initialState,action)=>{

switch(action.type){
case GetBooks: 
return(action.payload)  ;
case filterBooks:
return(action.payload)  ;
default: 
return(state); 
}
}
export default BookReducer;