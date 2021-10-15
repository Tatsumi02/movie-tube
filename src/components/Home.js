import React from 'react'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        };

    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/search/movie?api_key=2b862b5f9f984f333401b077f89eeda3&language=fr&query="+this.props.keys+"&page=1")
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


    render(){
        const {error,isLoaded,items} = this.state;

        if(error){
            return <div>Erreur: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Chargement...</div>
        }else{

        return (
            <div>
               
                <ul>
                    {items.map(item =>(
                        <li key={item.id}>
                            {item.original_title}
                            <br />
                            <img src={"https://image.tmdb.org/t/p/w500"+item.backdrop_path} />
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        )

      }
    }

}

export default Home;