import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class DetailUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail user</h1>
            </Container>
        )
    }
}
