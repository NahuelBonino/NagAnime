import React from 'react'
import './css/Anime.css'
import Button from './Button'



const ListaAnime = ({title,img,caps,synopsis,imgMd,idvideo,startDate,endDate}) => {
	const anime = {title,img,caps,synopsis,imgMd,idvideo,startDate,endDate}
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
						<Button
							name="Ver más"
							destiny="/animeinfo"
							anime = {anime}
						/>
					</div>
			</div>
		</div>
	)

}


export default ListaAnime