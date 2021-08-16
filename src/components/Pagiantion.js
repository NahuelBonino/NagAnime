import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Pagination.css'


const Pagination = ({onClick}) => {


    return (

        <div className="row">
            <div className="col-sm">
                <nav aria-label="Page navigation">
                <ul className="pagination2 pagination">
                    <li className="page-item"><a className="page-link" >Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" onClick={onClick} >Next</a></li>
                </ul>
                </nav>

            </div>

        </div>

    )

}


export default Pagination;