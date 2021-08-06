import React from "react";



class Anime extends React.Component{

state={

   data:[{
        title:"",
        caps:"",
        poster:""       
       }]

}


componentDidMount(){

    this.fetchanime();

    console.log(this.state);

}

fetchanime = async () => (
   
        const res = await fetch("https://kitsu.io/api/edge/anime/1");
        const dat = await res.json();
    
        this.setState(
            {
            title: dat.data.attributes.titles.en,
            caps: dat.data.attributes.episodeCount,
            poster: dat.data.attributes.posterImage.small
            }
        ) 
 )


render(){

    return(<div>

            ANIME

         </div>)

}


}

export default Anime