import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player } from 'video-react';


const AnimeInfo = ({title,caps,synopsis,imgMd,idvideo,startDate,endDate}) => {
    return(

        <div className="container-md">
            <div className="row pt-5" >
                <div className="col-6">
                    <img className="" src={imgMd}></img>
                </div>
                <div className="col-6">
                    <h4 align="left">Título: {title} </h4>
                    <h4 align="left">Capítulos: {caps} </h4>
                    <h4 align="left">Fecha de inicio: {startDate} </h4>
                    <h4 align="left">Fecha de finalización: {endDate} </h4>   
                    <h4 align="left">Sinopsis: </h4><p>{synopsis}</p>
                </div>
            </div>
            <div className="row video-youtube">
              <h2>TRAILER</h2>
              <div className="col">
                    <iframe width="700" height="415" 
                    src = {`https://www.youtube.com/embed/${idvideo}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>                  
                    </iframe>
              </div>
            </div>
            <div>
                <h2>Mejores partes</h2>
                <Player
                playsInline
                poster="/assets/poster.png"
                src="/videos/sasukevsmadara.mp4"
                />
            </div>
        </div>

    )

}

export default AnimeInfo;