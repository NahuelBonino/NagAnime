import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaAnime from "../pages/ListaAnime";


class Anime extends React.Component{

    state={
        form:[]
    }


    componentDidMount(){

        this.fetchanime();

    }

    async fetchanime(){
    
            const res = await fetch("https://kitsu.io/api/edge/anime/")
            const d = await res.json()
            const form = d.data
        
          //  console.log(form)    

            this.setState({        
                form                
            })

           //console.log(this.state.datos);
    }


    render(){

         return(
             <div>      
                {                 
                       this.state.form.map((dat) => {
                            return(
                            <ListaAnime 
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