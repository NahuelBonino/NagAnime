import React from 'react'
import AnimeInfo from '../components/AnimeInfo';
import Header from '../components/Header';

class DetalleAnime extends React.Component{

    render(){

        const {title,img,caps,synopsis,imgMd} = this.props.location.state

        return(
               
             <div align="center" className="container-md"> 
                
                <Header />

                <AnimeInfo 
                
                    title = {title} 
                    img = {img}
                    caps = {caps}
                    synopsis = {synopsis}
                    imgMd = {imgMd}
  
                />
      
            </div>
        )
            
    }

}

export default DetalleAnime;