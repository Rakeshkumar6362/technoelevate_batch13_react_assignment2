import React, { Component } from 'react'
import withCounter from './withCounter'

 class React1 extends Component {
    
    render() {
        let {count, increment} = this.props
 
         return (
             
             <div className="main-div">
                  <div className="div-column">
                         <span>{count}</span>
                         <span>React</span>
                         <button onClick={increment}>vote here</button>
                 </div>
                 
             </div>
         )
     }
}
export default withCounter(React1)