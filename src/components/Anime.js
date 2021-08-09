import React from "react";



class Anime extends React.Component{

    state={
  
        nombre: ""

    }


    componentDidMount(){

        this.fetchanime();

        

    }

    async fetchanime(){
    
            const res = await fetch("https://kitsu.io/api/edge/anime/1")
            const dat = await res.json()
        
            console.log(dat)    
            
            this.setState({
                nombre: dat.data.attributes.canonicalTitle 
            })

            console.log(this.state);
    }


    render(){

        return(<div>

                ANIME

            </div>)

    }


}

export default Anime