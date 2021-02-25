import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../components/BackComponent";
import { Spinner, Alert } from "reactstrap";
import { connect } from 'react-redux'
import { getUserDetail } from '../redux/actions'
import DetailUserComponent from "../components/DetailUserComponent";


const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail,
        errorUserDetail: state.user.errorUserDetail
    }
}


class DetailUserContainer extends Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getUserDetail(id)
    }
    render() {
        return (
            <Container>
                {this.props.userDetail ? (
                    <div>
                        <BackComponent />
                        <h1>Detail user</h1>
                        <DetailUserComponent />
                    </div>
                ) : (
                    <div className='text-center'>
                        {this.props.errorUserDetail ? (
                            <Alert color="danger">
                                {this.props.errorUserDetail}
                            </Alert>
                        ) : (
                            <Spinner color="dark" />
                        )}
                    </div>
                )}
                
            </Container>
        );
    }
}

export default connect(mapStateToProps, { getUserDetail })(DetailUserContainer)