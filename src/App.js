import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Barre from './components/Barre'
import React from 'react'

class  App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      key:'Naruto',
      error:null,
            isLoaded:false,
            items:[]
    }

    this._handlekey = this._handlekey.bind(this)
    this._handleSubmite = this._handleSubmite(this)
   
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/search/movie?api_key=2b862b5f9f984f333401b077f89eeda3&language=fr&query="+this.state.key+"&page=1")
    .then(res => res.json())
    .then(
        (result)=>{
            this.setState({
                isLoaded:true,
                items:result.results
            });
        },
        (error)=>{
            this.setState({
                isLoaded:true,
                error
            });
        }
    )
}



  _handlekey(event){
    this.setState({key:event.target.value});

    if(this.state.key != ''){

       this.componentDidMount()

    }


  }

  _handleSubmite(event){
    
    let h = new Home(this.state.key)
    
  }

  

  



  render(){
    const {error,isLoaded,items} = this.state;
 
  if(error){


    return (
      <div className="App">
        <Header />
        <div className="z">
               <br /><br /><br />
                <form>
                   <input type="search" value={this.state.key} onChange={this._handlekey}  className="barre" placeholder="Cherche un film" />
                   
                </form>
       </div>
         <header className="App-header">
           Erreur: {error.message}
          </header>
      </div>
        );


}else if(!isLoaded){


    return (
      <div className="App">
        <Header />
        <div className="z">
               <br /><br /><br />
                <form>
                   <input type="search" value={this.state.key} onChange={this._handlekey}  className="barre" placeholder="Cherche un film" />
                   
                </form>
       </div>
         <header className="App-header">

            <img src="loader6.gif" />
         </header>
      </div>
      
      )

}else{

return (
  <div className="App">
  <Header />
  <div className="z">
         <br /><br /><br />
          <form>
             <input type="search" value={this.state.key} onChange={this._handlekey}  className="barre" placeholder="Cherche un film" />
            
          </form>
 </div>
 
   <header className="App-header">
   <kbd>Nombre de pages: {items.total_pages}</kbd>
       
   <div  id="zf" >
            {items.map(item =>(
              
                <div key={item.id}>
                   {item.title}
                  <div id="in">
                    <br />
                   <p id="des">
                     {item.overview}
                     <hr />
                     date de sortie: {item.release_date} <br />
                     titre original:  {item.original_title} <br />
                     nombre de vote: {item.vote_count} <br /> 
                     langue d'origine: {item.original_language}
                   </p>
                    <img src={"https://image.tmdb.org/t/p/w300"+item.poster_path} />
                  </div>
                  <br/><br/>
                </div>
               
            ))}
    </div>
      </header>
    </div>
      )

    }
  }


}




export default App;
