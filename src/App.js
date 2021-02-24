import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import HomeContainer from './containers/HomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import EditUserContainer from './containers/EditUserContainer'
import {BrowserRouter, Route} from "react-router-dom"
import users from './mock/users.json'

export default class App extends Component {
  state = {
    title: 'CRUD React Redux'
  }
  render() {
    return (
      <div>
        <NavbarComponent title={this.state.title} />
        <JumbotronComponent title={this.state.title} />
        <BrowserRouter>
          <Route path='/' exact>
            <HomeContainer users={users} />
          </Route>
          <Route path='/create' exact>
            <CreateUserContainer />
          </Route>
          <Route path='/detail/:id' exact>
            <DetailUserContainer />
          </Route>
          <Route path='/edit/:id' exact>
            <EditUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
