import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagiantion';
import Anime from '../components/Anime'


class PagListAnime extends React.Component{

   state={

     form:[],
     currentPag:1

   }

   
   componentDidMount(){

    this.fetchanime();

}

async fetchanime(){

        const res = await fetch(`${URL}/?page[limit]=10&page[offset]=${this.state.currentPag * 10}`)
        const d = await res.json()
        const form = d.data
    
        console.log(form)    

        this.setState({        
            form                
        })

       //console.log(this.state.datos);
}

    
    handleSubmit = (state) => {
       return(
           this.setState(this.state)({
           currentPag: state.currentPag + 1
    }))}
 
  

 


   render(){


        return(

            <div>

                <Anime  />
                <Pagination 
                 onClick = {this.handleSubmit}                   
                 />   

            </div>
        )

    }


}


export default PagListAnime;