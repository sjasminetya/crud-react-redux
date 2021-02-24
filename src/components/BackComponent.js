import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export const BackComponent = () => {
    return (
        <div>
            <Row className='mb-3'>
                <Col>
                    <Link to='/'>
                        <Button color='dark'>
                            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
