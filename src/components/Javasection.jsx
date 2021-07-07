import React, { Component } from 'react'
import withCounter from './withCounter'

class Javasection extends Component {
    render() {
        return (
            <div className="main-div">
                <div className="div-column">
                        <span>{this.props.count}</span>
                        <span>Java</span>
                        <button onClick={this.props.increment}>vote here</button>
                </div>
            </div>
        )
    }
}
export default withCounter(Javasection)
