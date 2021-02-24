import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const JumbotronComponent = (props) => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">{props.title}</h1>
                    <p className="lead">This is a simple CRUD using reactstrap table with pagination, sort and search.</p>
                    <p className="lead">
                        <Button color="dark"><FontAwesomeIcon icon={faInfo} /> Learn More</Button>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;