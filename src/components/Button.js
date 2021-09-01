import React from 'react'
import {Link} from 'react-router-dom'
import './css/button.css'


const Button = ({name,destiny,anime}) => {
    const {title,img,caps,synopsis,imgMd,idvideo,startDate,endDate} = anime;
    return(
        <Link to={{
            pathname: destiny,
            state: { 
                    title: title,
                    img: img ,
                    caps: caps,
                    synopsis: synopsis,
                    imgMd: imgMd,
                    idvideo: idvideo,
                    startDate: startDate,
                    endDate: endDate
            }
        }} className="button">
        {name}	
        </Link>
    )
}
export default Button;