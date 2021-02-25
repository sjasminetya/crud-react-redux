import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Col, Row, Label, Input, FormGroup, Button } from 'reactstrap'
import {reduxForm, Field} from 'redux-form'
import UserValidation from '../validations/UserValidation'

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: {touched, error, warning}
}) => (
    <Row>
        <Col md="12">
            <Label htmlFor='{input}' className='col-form-label'>
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></Input>
            {touched && ((error && <p style={{color: 'red'}}>{error}</p>) || (warning && <p style={{color: 'brown'}}>{warning}</p>))}
        </Col>
    </Row>
)

const mapStateToProps = (state) => {
    return {
        initialValues: {
            nama: state.user.userDetail.nama,
            alamat: state.user.userDetail.alamat,
            umur: state.user.userDetail.umur,
            nohp: state.user.userDetail.nohp
        }
    }
}

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field type='text' name='nama' component={renderField} label='Nama :' />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field type='text' name='alamat' component={renderField} label='Alamat :' />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field type='number' name='umur' component={renderField} label='Umur :' />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field type='text' name='nohp' component={renderField} label='No HP :' />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row className='my-0'>
                    <Col md='12'>
                        <FormGroup>
                            <Button color='dark' type='submit' disabled={this.props.submitting}>Submit</Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

FormComponent = reduxForm({
    form: 'formCreateUser',
    validate: UserValidation,
    enableReinitialize: true
})(FormComponent)

export default connect(mapStateToProps, null)(FormComponent)