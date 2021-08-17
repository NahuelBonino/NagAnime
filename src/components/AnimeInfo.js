import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimeInfo = ({title,img,caps,synopsis,imgMd}) => {

    return(

        <div className="container-md">
            <div className="row pt-5" >
                <div className="col-6">
                    <img className="" src={imgMd.imgMd}></img>
                </div>
                <div className="col-6">
                    <h4 align="left">Título: {title.title} </h4>
                    <h4 align="left">Capítulos: {caps.caps} </h4>   
                    <h4 align="left">Sinopsis: </h4><p>{synopsis.synopsis}</p>
                </div>
            </div>
        </div>

    )

}

export default AnimeInfo;