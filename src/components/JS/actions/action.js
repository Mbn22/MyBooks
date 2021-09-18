import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListBooks from "../../ListBooks";
import { GetBooks ,filterBooks,addToCart,removeItem,addTotal,subTotal, updateQuantity} from "./action-type";

export const LISTOFBOOKS=()=>{

 
    const [listOfBook , setlistOfBooks ] = useState([]);
    useEffect(()=>{axios.get('http://localhost:8000/Books').then(res=>setlistOfBooks(res.data))},[])
    
    return(
        {type:GetBooks ,
        payload: listOfBook
         }
    );}
    
    export const FilterBOOKS=(filterText)=>{
        const [listOfBook , setlistOfBooks ] = useState([]);
        useEffect(()=>{axios.get('http://localhost:8000/Books').then(res=>setlistOfBooks(res.data? res.data.filter(book=>book.type===filterText):null))},[])
        return(
            {type:filterBooks ,
            payload: listOfBook 
             });

    }

    export const AddToCart=(addtitle,addprice,addID)=>{
     
           

        return(
            {type:addToCart ,
            payload:  {id:addID,title:addtitle , price: addprice,quantity:1}
             }
        )}
  
    export const RemoveItem =(id,tab)=>{
        const tab2 =(tab)? tab.filter(el=> el.id !== id):tab
        console.log(tab2)
        return(
            {type:removeItem ,
            payload:  tab2
             });
          }


    
    export const AddTotal = (total,price)=>  {   return ({type:addTotal,payload : total+price})}
    export const SubTotal = (total,price)=>  {return ({type:subTotal,payload : total-price})}
  
    
  export const Validation= (Ordereds) => {  
    
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
     
        axios.post('https://reqres.in/api/articles', Ordereds)
            .then(response => setArticleId(response.data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

        alert("ok")
        return null;


}
