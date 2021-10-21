import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Barre from './components/Barre'
import React from 'react'
import {
        Button,
        Col,
        Container,
        Row,
        Form,
        Alert,
        Modal,
      } from 'react-bootstrap'

class  App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      key:'Storm',
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
                   <input type="search" className="form-control" value={this.state.key} onChange={this._handlekey}   placeholder="Cherche un film" />
                   
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
                <Form>
                   <Form.Control size="lg" type="search" value={this.state.key} onChange={this._handlekey}  className="barre" placeholder="Cherche un film" />
                   
                </Form>
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
       
   {/* <div  id="zf" > */}
    <Container>
      <Row className="justify-content-md-center">
        <Col md="11">
        
            {items.map(item =>(

             
                <div key={item.id} style={{display:'flex', flexDirection:'rows', margin:'3%', background:'#888e9b', padding:'3%'}}>

                    <Col >
                        {item.title}
                         <img src={"https://image.tmdb.org/t/p/w300"+item.poster_path} />
                         <br /><br />
                         <Button as={Col} md="10" variant="dark"> Detail </Button>
                    </Col>

                    
                    <div style={{padding:'3%',textAlign:'left'}}>
                      <Col xs={12} lg={11}>
                          {item.overview}
                      </Col>
                    </div>

                   <Col xs lg="2" style={{textAlign:'left'}}>
                     date de sortie: {item.release_date} <br />
                     titre original:  {item.original_title} <br />
                     nombre de vote: {item.vote_count} <br /> 
                     langue d'origine: {item.original_language} <br />
                    
                   </Col>
                   
                
                 
                  <br/><br/>
                </div>
               
            ))}

          </Col>
        </Row>
     </Container>
    {/* </div> */}
      </header>
    </div>
      )

    }
  }


}




export default App;
