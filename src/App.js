import React from "react";
import PagListAnime from "./pages/PagListAnime";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DetalleAnime from "./pages/DetalleAnime";


function App() {
  return (
    <BrowserRouter>  
     <Switch>     
       <Route exact path="/" component={PagListAnime}/> 
       <Route exact path="/animeinfo" component={DetalleAnime}/> 
     </Switch>
    </BrowserRouter>
  );
}

export default App;
