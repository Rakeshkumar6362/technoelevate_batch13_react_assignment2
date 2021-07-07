import React, { Component } from 'react'
import './style.css'
import withCounter from './withCounter';
 class Home extends Component {
    
    
    myfunction= ()=> {
    document.body.style.backgroundColor=document.getElementById("background").value;
    document.getElementById("h1").style.color="white"


    }
        

    
    

    render() {
        

        return (
            <React.Fragment>
                <select name="" id="background" onChange={this.myfunction}>
                    <option value="" selected disabled hidden > CHOOSE BACKGROUND COLOR </option>
                    <option value="cyan">CYAN</option>
                    <option value="blue">BLUE</option>
                    <option value="yellow">YELLOW</option>
                    <option value="black">BLACK</option>
                </select>
                <h1 id="h1">VOTE YOUR LANGUAGE</h1>
                 
                
            </React.Fragment>
        )
    }
}
export default withCounter(Home)
