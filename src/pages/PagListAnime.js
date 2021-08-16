import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagiantion';
import Anime from '../components/Anime'
import URL from '../config'


class PagListAnime extends React.Component{

   state={

     form:[],
     route:"",
     currentPag:1

   }

   
    componentDidMount(){

     this.fetchanime();

    }

    async fetchanime(){
    
        const route = `${URL}/?page[limit]=10&page[offset]=${(this.state.currentPag - 1) * 10}`
        //console.log(route) 
        const res = await fetch(route)
        const d = await res.json()
        const form = d.data
    
        console.log(form)    

        this.setState({        
            form                
        })

       //console.log(this.state.datos);
    }

    
    handleSubmitNext = (e) => {

        //e.preventDefault()
        this.setState({
            
         currentPag: this.state.currentPag + 1
        })
        console.log(this.state)
        this.forceUpdate()
    }
 

   render(){


        return(

            <div>

                <Anime 
                
                 datos = {this.state.form}    

                />
                <Pagination 

                 onClick = {this.handleSubmit}  
                                  
                 />   

            </div>
        )

    }


}


export default PagListAnime;