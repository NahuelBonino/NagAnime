import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Pagination.css'


const Pagination = (props) => {
    const { onClickBefore, onClickNext, onClickNumber, currentPag } = props
    return (
        <div className="row">
            <div className="col-sm">
                <nav aria-label="Page navigation">
                <ul className="pagination2 pagination">
                    <li className="page-item"><button className="page-link" onClick={onClickBefore} >Previous</button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(1)}}>              First                </button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(currentPag)}}>    {currentPag}      </button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(currentPag+1)}}>  {currentPag + 1}  </button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(currentPag+2)}}>  {currentPag + 2}  </button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(currentPag+3)}}>  {currentPag + 3}  </button></li>
                    <li className="page-item"><button className="page-link" onClick={(e)=>{onClickNumber(currentPag+4)}}>  {currentPag + 4}  </button></li>
                    <li className="page-item"><button className="page-link" onClick={onClickNext} >Next</button></li>
                </ul>
                </nav>

            </div>

        </div>

    )

}


export default Pagination;