import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import {connect} from 'react-redux'
import { addUser } from '../redux/actions'
import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
    return {
        getResponDataUser: state.user.getResponDataUser,
        errorResponDataUser: state.user.errorResponDataUser
    }
}

class CreateUserContainer extends Component {
    handleSubmit (data) {
        this.props.dispatch(addUser(data))
    }
    render() {
        if(this.props.getResponDataUser || this.props.errorResponDataUser) {
            if (this.props.errorResponDataUser) {
                Swal.fire({
                    title: 'Failed!',
                    text: this.props.errorResponDataUser,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            } else {
                Swal.fire({
                    title: 'User Created!',
                    text: 'Nama: ' + this.props.getResponDataUser.nama,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Create user</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(CreateUserContainer)