import React from 'react'
import { Link } from 'react-router-dom';
import Img from '../img/Naganime.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Anime.css'

const Header = () => {

   return( 
        <div>            
            <div className="row colorHeader">
                <div className="col-xl">
                    <Link href={{ pathname: '/' }}>
                        <img className="img-title" src={Img} />
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default Header