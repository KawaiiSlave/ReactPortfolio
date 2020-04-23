import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import './style.css';

function BtnGroup() {
    return( 
    <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
    </ButtonGroup>
    );
}


export default BtnGroup;