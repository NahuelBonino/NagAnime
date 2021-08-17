import React from 'react'
import './css/Anime.css'


const ListaAnime = ({title,img,caps}) => {

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
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
        </div>
    )

}


export default ListaAnime