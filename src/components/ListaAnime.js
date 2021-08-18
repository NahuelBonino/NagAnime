import React from 'react'
import './css/Anime.css'
import {Link} from 'react-router-dom'


const ListaAnime = ({title,img,caps,synopsis,imgMd,idvideo,startDate,endDate}) => {
    //console.log(startDate)
    return(
        <div className="col-sm showAnimes">
        <div className="card wdt-card" >
            <img className="card-img-top " src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>  
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Capitulos: {caps}</li>
            </ul>
            <div className="card-body">
                <Link to={{
                            pathname: "/animeList/animeinfo",
                            state: { 
                                title: {title},
                                img: {img} ,
                                caps: {caps},
                                synopsis: {synopsis},
                                imgMd: {imgMd},
                                idvideo: {idvideo},
                                startDate: {startDate},
                                endDate: {endDate}
                            }
                        }} className="card-link">Ver más</Link>
            </div>
        </div>
        </div>
    )

}


export default ListaAnime