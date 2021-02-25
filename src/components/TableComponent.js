import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfo, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, Row, Col, Spinner, Alert } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions'

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: '5%' }
    }
}, {
    dataField: 'nama',
    text: 'Nama',
    sort: true
}, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
}, {
    dataField: 'Link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={'/detail/' + row.id}>
                    <Button color='dark' className='mr-2'>
                        <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                </Link>

                <Link to={'edit/' + row.id}>
                    <Button color='dark' className='mr-2'>
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                </Link>

                <Button color='dark' className='mr-2'>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        )
    }
}];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
    return {
        getUsers: state.user.getUsers,
        errorUsersList: state.user.errorUsersList
    }
}

const TableComponent = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <div>
            <Container className='mb-5'>
                {props.getUsers ? (
                    <ToolkitProvider
                        bootstrap4
                        keyField="id"
                        data={props.getUsers}
                        columns={columns}
                        search
                        defaultSorted={defaultSorted}
                    >
                        {
                            props => (
                                <div>
                                    <Row>
                                        <Col>
                                            <Link to='/create'>
                                                <Button color='dark' className='mr-2'>
                                                    <FontAwesomeIcon icon={faUserPlus} /> Create User
                                            </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <div className='float-right'>
                                                <SearchBar {...props.searchProps} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        pagination={paginationFactory()}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                ) : (
                    <div className='text-center'>
                        {props.errorUsersList ? (
                            <Alert color="danger">
                                {props.errorUsersList}
                            </Alert>
                        ) : (
                            <Spinner color="dark" />
                        )}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default connect(mapStateToProps, { getUser })(TableComponent);