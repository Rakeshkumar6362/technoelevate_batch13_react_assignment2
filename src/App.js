import React, { Component } from 'react'
import Angularsection from './components/Angularsection'
import Home from './components/Home'
import Javasection from './components/Javasection'
import React1 from './components/React1'
import Vuesection from './components/Vuesection'

export default class App extends Component {
  render() {
    return (
      <div>

      <Home />
      <React1 />
      <Vuesection />
      <Angularsection/>
      <Javasection />
      </div>
    )
  }
}
