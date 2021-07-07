import React, { Component } from 'react'
import './style.css'

export default class Home extends Component {
    state={
        react:0,
        angular:0,
        vue:0,
        java:0

    }
    react=()=>{
        this.setState({
            react:this.state.react+1
        })
    }
    angular=()=>{
        this.setState({
            angular:this.state.angular+1
        })
    }
    vue=()=>{
        this.setState({
            vue:this.state.vue+1
        })
    }
    java=()=>{
        this.setState({
            java:this.state.java+1
        })
    }
    background= ()=>{
                    var x = document.getElementById("background").selectedIndex;
                    if(x===1){
                        document.body.style.backgroundColor="cyan"
                        document.getElementById("h1").style.color="white";

                    }
                    else if(x===2){
                        document.body.style.backgroundColor="blue"
                        document.getElementById("h1").style.color="white";


                    }
                    else if(x===3){
                        document.body.style.backgroundColor="yellow"
                        document.getElementById("h1").style.color="white";


                    }
                    else if(x===4){
                        document.body.style.backgroundColor="black"
                        document.getElementById("h1").style.color="white";

                    }
                }

    
    


    render() {
        return (
            <React.Fragment>
                <select name="" id="background" onChange={this.background}>
                    <option value="" selected disabled hidden > CHOOSE BACKGROUND COLOR </option>
                    <option value="cyan">CYAN</option>
                    <option value="blue">BLUE</option>
                    <option value="yellow">YELLOW</option>
                    <option value="black">BLACK</option>
                </select>
                <h1 id="h1">VOTE YOUR LANGUAGE</h1>
                 <div className="main-div">
                 <div className="div-column">
                        <span>{this.state.react}</span>
                        <span>React</span>
                        <button onClick={this.react}>vote here</button>
                </div>
                <br />
                 <div className="div-column">
                        <span>{this.state.angular}</span>
                        <span>Angular</span>
                        <button onClick={this.angular}>vote here</button>
                </div>
                <br />

                 <div className="div-column">
                        <span>{this.state.vue}</span>
                        <span>Vue</span>
                        <button onClick={this.vue}>vote here</button>
                </div>
                <br />
        
                 <div className="div-column">
                        <span>{this.state.java}</span>
                        <span>Java</span>
                        <button onClick={this.java}>vote here</button>
                </div>
                 </div>
            </React.Fragment>
        )
    }
}
