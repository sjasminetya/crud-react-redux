import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import { connect } from 'react-redux'
import FormComponent from '../components/FormComponent'
import { getUserDetail, updateUser } from '../redux/actions'
import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
    return {
        getResponDataUser: state.user.getResponDataUser,
        errorResponDataUser: state.user.errorResponDataUser
    }
}

class EditUserContainer extends Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.dispatch(getUserDetail(id))
    }

    handleSubmit (data) {
        this.props.dispatch(updateUser(this.props.match.params.id, data))
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
                    title: 'User Updated!',
                    text: 'Nama: ' + this.props.getResponDataUser.nama,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Edit user</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(EditUserContainer)