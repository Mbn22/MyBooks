import BookCard from "./BookCard";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FilterBOOKS } from "./JS/actions/action";

function FilterList({filterText}){
   
   const dispatch=useDispatch();
   dispatch(FilterBOOKS(filterText))
   
   const listOfBooks = useSelector(state =>state.book);
   
    return(
    
       <div>
          <h1 style={{textAlign:'center'}}>{filterText}</h1>

          <div className="ListBooks">
            { (listOfBooks)? listOfBooks.map((book)=>{return(
            <Link  to={`/ListBooks/${book.id}`} key={book.id} className="Listlink"  >
               <BookCard className="ListBooks"  image={book.image} name={book.title} rating={book.rating} />
            </Link>)}):null}
       </div>
       </div>
    
        
    );
    
    
    }
    
    export default FilterList;


