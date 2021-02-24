import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import { TableComponent } from './components/TableComponent'

export default class App extends Component {
  state = {
    title: 'CRUD React Redux',
    users: [
      {
        id: 1,
        nama: 'shaula',
        alamat: 'Bekasi',
        umur: 20,
        nohp: '081287423849'
      },
      {
        id: 2,
        nama: 'shanon',
        alamat: 'Jakarta',
        umur: 20,
        nohp: '58237582491'
      },
      {
        id: 3,
        nama: 'darin',
        alamat: 'Magelang',
        umur: 17,
        nohp: '02846183944'
      }
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponent title={this.state.title} />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}
