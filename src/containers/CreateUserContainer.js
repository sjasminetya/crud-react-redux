import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import FormComponent from '../components/FormComponent'

export default class CreateUserContainer extends Component {
    handleSubmit (data) {
        console.log(data)
    }
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Create user</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}
