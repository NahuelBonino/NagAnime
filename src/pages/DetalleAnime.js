import React from 'react'
import AnimeInfo from '../components/AnimeInfo';
import Header from '../components/Header';
import '../components/css/Anime.css'
//import 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js'


const DetalleAnime = (props) => {

        const {title,img,caps,synopsis,imgMd,idvideo,startDate,endDate} = props.location.state

        return(
               
             <div align="center" className="container-md"> 
                
                <Header />

                <AnimeInfo 
                
                    title = {title} 
                    img = {img}
                    caps = {caps}
                    synopsis = {synopsis}
                    imgMd = {imgMd}
                    idvideo = {idvideo}
                    startDate= {startDate}
                    endDate = {endDate}
                />
      
            </div>
        )
    

}


export default DetalleAnime;