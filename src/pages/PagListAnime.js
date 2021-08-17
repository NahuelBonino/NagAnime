import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagiantion';
import Anime from '../components/Anime'
import URL from '../config'


class PagListAnime extends React.Component{

   state={

     form:[],
     currentPag:0

   }

    componentDidMount(){

     this.fetchanime();

    }

    async fetchanime(){
    
        const route = `${URL}/?page[limit]=10&page[offset]=${(this.state.currentPag) * 10}`
        //console.log(route) 
        const res = await fetch(route)
        const d = await res.json()
        const form = d.data
   
        this.setState({        
            form,            
        })

    }

    //user click a pagination next
    handleClickNext = async (e) => {

        //e.preventDefault()
        const route = `${URL}/?page[limit]=10&page[offset]=${(this.state.currentPag + 1) * 10}`
        //console.log(route) 
        const res = await fetch(route)
        const d = await res.json()
        const form = d.data
    
        console.log(form)    

        this.setState({
           form,
           currentPag: this.state.currentPag + 1
        })

        //console.log(this.state)
    }
  
    //user click a pagination before
    handleClickBefore = async (e) => {

        //e.preventDefault()

        const route = `${URL}/?page[limit]=10&page[offset]=${(this.state.currentPag - 1) * 10}`
        //console.log(route) 
        const res = await fetch(route)
        const d = await res.json()
        const form = d.data
    
        console.log(form)    

        this.setState({
           form,
           currentPag: this.state.currentPag - 1

        })

        //console.log(this.state)
    }

    //user click a pagination number
    handleClickNumber = async (number) => {

        //e.preventDefault()
        const route = `${URL}/?page[limit]=10&page[offset]=${(number) * 10}` 
        const res = await fetch(route)
        const d = await res.json()
        const form = d.data
    
        console.log(number)    

        this.setState({
           form,
           currentPag: number,
        })

        //console.log(this.state)
    }
 


   render(){


        return(

            <div>

                <Anime 
                
                 datos = {this.state.form}    

                />
                <Pagination 
                    onClickNext = {this.handleClickNext}  
                    onClickBefore = {this.handleClickBefore}
                    onClickNumber = {this.handleClickNumber}  
                    currentPag = {this.state.currentPag}                         
                />   
            </div>
        )

    }


}


export default PagListAnime;