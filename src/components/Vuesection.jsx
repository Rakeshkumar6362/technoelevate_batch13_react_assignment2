import React, { Component } from 'react'
import withCounter from './withCounter'

 class Vuesection extends Component {
    render() {
        let {count, increment}=this.props
        return (
            <div className="main-div">
                 <div className="div-column">
                        <span>{count}</span>
                        <span>Vue</span>
                        <button onClick={increment}>vote here</button>
                </div>
            </div>
        )
    }
}
export default withCounter(Vuesection)

