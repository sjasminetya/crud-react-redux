import React from 'react'
import { Table  } from "reactstrap"
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail,
        errorUserDetail: state.user.errorUserDetail
    }
}

const DetailUserComponent = (props) => {
    return (
        <div>
            <Table dark>
                <tbody>
                    <tr>
                        <td width="200">Nama</td>
                        <td width="10">:</td>
                        <td>{props.userDetail.nama}</td>
                    </tr>
                    <tr>
                        <td width="200">Alamat</td>
                        <td width="10">:</td>
                        <td>{props.userDetail.alamat}</td>
                    </tr>
                    <tr>
                        <td width="200">Umur</td>
                        <td width="10">:</td>
                        <td>{props.userDetail.umur}</td>
                    </tr>
                    <tr>
                        <td width="200">No HP</td>
                        <td width="10">:</td>
                        <td>{props.userDetail.nohp}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent)