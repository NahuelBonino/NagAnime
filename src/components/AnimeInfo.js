import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeInfo = ({title,img,caps,synopsis,imgMd,idvideo,startDate,endDate}) => {
    //console.log(endDate)
    return(

        <div className="container-md">
            <div className="row pt-5" >
                <div className="col-6">
                    <img className="" src={imgMd.imgMd}></img>
                </div>
                <div className="col-6">
                    <h4 align="left">Título: {title.title} </h4>
                    <h4 align="left">Capítulos: {caps.caps} </h4>
                    <h4 align="left">Fecha de inicio: {startDate.startDate} </h4>
                    <h4 align="left">Fecha de finalización: {endDate.endDate} </h4>   
                    <h4 align="left">Sinopsis: </h4><p>{synopsis.synopsis}</p>
                </div>                
            </div>
            <div className="row video-youtube">
              <div className="col">
                    <iframe width="700" height="415" 
                    src = {`https://www.youtube.com/embed/${idvideo.idvideo}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>                  
                    </iframe>
              </div>
            </div>
        </div>

    )

}

export default AnimeInfo;