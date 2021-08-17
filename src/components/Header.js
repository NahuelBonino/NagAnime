import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../img/naganime.png'
import './css/Anime.css'

const Header = () => {

   return( 
        <div> 
            <div className="row">
                <div className="col-xl">
                    <img className="img-title" src={Img} />
                </div>
            </div>
        </div>
        )

}

export default Header