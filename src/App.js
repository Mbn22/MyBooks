import './App.css';
import HeaderNav   from './components/HeaderNav'
import Home from './components/Home';
import ListBooks from './components/ListBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Bookdescription from './components/Bookdescription';
import FilterList from './components/FilterList';
import Shop from './components/Shop';





function App() {






  return (
   
    <BrowserRouter>
     <HeaderNav />
    <Switch>
    <Route exact path="/" component={()=><Home />} />
    <Route  exact path="/ListBooks"   > <ListBooks filterText=""  />  </Route>
    <Route  path="/ListBooks/:id"  > <Bookdescription  /> </Route> 
    <Route path="/ListBook/Jeunesse" ><FilterList filterText="Jeunesse"  /></Route>
    <Route path="/ListBook/Fiction_Littérature" ><FilterList filterText="Fiction/Littérature"  /></Route>
    <Route path="/ListBook/Livre_Tunisien" ><FilterList filterText="Livre Tunisien"  /></Route>
    </Switch>
    <Shop   />
    </BrowserRouter>
       
  );
}

export default App;
