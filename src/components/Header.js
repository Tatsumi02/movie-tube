import React from 'react'
import '../style/Header.css'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return(
            <div id="hd"> 
                <div className="logo">
                    <span className="l1"><b>Movie</b></span>
                    <span className="l2">Tube</span>
                </div>
                {/* <div className="menu">
                    by <span className="green">Green consolidis</span>
                </div> */}
             </div>
        )
    }

}

export default Header;