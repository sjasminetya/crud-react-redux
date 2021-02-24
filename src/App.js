import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import HomeContainer from './containers/HomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import EditUserContainer from './containers/EditUserContainer'
import {BrowserRouter, Route} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path='/' exact>
            <HomeContainer />
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
