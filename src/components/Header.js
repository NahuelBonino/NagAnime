import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../img/naganime.png'

const Header = () => {

   return( 
        <div> 
            <div className="row">
                <div className="col-xl">
                    <img src={Img} />
                </div>
            </div>
        </div>
        )

}

export default Header