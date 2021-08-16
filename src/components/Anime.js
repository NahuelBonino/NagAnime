import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaAnime from "./ListaAnime";
import URL from "../config"


class Anime extends React.Component{


    render(){

         return(
            <div>     
                {                 
                    this.props.datos.map((dat) => {
                            return(
                                
                                    <ListaAnime 
                                        key = {dat.id}
                                        title = {dat.attributes.canonicalTitle}
                                        img = {dat.attributes.posterImage.small}
                                        caps = {dat.attributes.episodeCount}
                                    />
                               
                            )
                        }) 
                } 
                
             </div>               
         )
    }


}

export default Anime