import React, { Component } from 'react'
import withCounter from './withCounter'

 class Angularsection extends Component {
    render() {
        let{count,increment}= this.props
        return (
            <div className="main-div">
                <div className="div-column">
                        <span>{count}</span>
                        <span>Angular</span>
                        <button onClick={increment}>vote here</button>
                </div>
            </div>
        )
    }
}
export default withCounter(Angularsection)
