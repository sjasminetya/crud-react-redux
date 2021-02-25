import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { connect } from 'react-redux'
import { deleteUserDetail, getUser } from '../redux/actions'

class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUser())
        this.props.dispatch(deleteUserDetail())
    }
    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}

export default connect()(HomeContainer)