import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title: 'CRUD React Redux'
  }
  render() {
    return (
      <div>
        <NavbarComponent title={this.state.title} />
        <JumbotronComponent title={this.state.title} />
      </div>
    )
  }
}
