import BookCard from "./BookCard";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LISTOFBOOKS } from "./JS/actions/action";



function ListBooks(){
  const listOfBooks = useSelector(state =>state.book);
  const dispatch=useDispatch();
  if(listOfBooks)
  dispatch(LISTOFBOOKS()) 
  
  
  
  console.log(listOfBooks) 
  
    return(
    
       
       <div className="ListBooks">
            { (listOfBooks)? listOfBooks.map((book)=>{return(
            <Link  to={`/ListBooks/${book.id}`} key={book.id} className="Listlink"  >
               <BookCard className="ListBooks"  image={book.image} name={book.title} rating={book.rating} />
            </Link>)}):null}
       </div>
    
        
    );
    
    
    }
    
    export default ListBooks;