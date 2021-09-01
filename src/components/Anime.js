import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaAnime from "./ListaAnime";

const Anime = (props) => {
   
    return(
        <div>     
            {                 
               props.datos.map((dat) => {
                        return(
                            
                                <ListaAnime 
                                    key = {dat.id}
                                    title = {dat.attributes.canonicalTitle}
                                    img = {dat.attributes.posterImage.small}
                                    caps = {dat.attributes.episodeCount}  
                                    synopsis = {dat.attributes.synopsis}  
                                    imgMd = {dat.attributes.posterImage.medium}  
                                    idvideo = {dat.attributes.youtubeVideoId}   
                                    startDate = {dat.attributes.startDate}      
                                    endDate = {dat.attributes.endDate}                                  
                                />
                           
                        )
                    }) 
            } 
            
         </div>               
     )


 }



/*class Anime extends React.Component{


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
                                        synopsis = {dat.attributes.synopsis}  
                                        imgMd = {dat.attributes.posterImage.medium}  
                                        idvideo = {dat.attributes.youtubeVideoId}   
                                        startDate = {dat.attributes.startDate}      
                                        endDate = {dat.attributes.endDate}                                  
                                    />
                               
                            )
                        }) 
                } 
                
             </div>               
         )
    }


}*/

export default Anime