import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Button } from 'reactstrap';

const columns = [{
  dataField: 'id',
  text: 'ID',
  headerStyle: () => {
      return {width: '5%'}
  }
}, {
  dataField: 'nama',
  text: 'Nama'
}, {
  dataField: 'alamat',
  text: 'Alamat'
}, {
    dataField: 'Link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return  (
            <div>
                <Button color='dark' className='mr-2'>
                    <FontAwesomeIcon icon={faInfo} /> Detail
                </Button>

                <Button color='dark' className='mr-2'>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </Button>

                <Button color='dark' className='mr-2'>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        )
    }
}];

export const TableComponent = (props) => {
    return (
        <div>
            <Container>
                <BootstrapTable keyField='id' data={ props.users } columns={ columns } />
            </Container>
        </div>
    )
}
