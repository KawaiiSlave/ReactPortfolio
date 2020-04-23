import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

function DropdownBtn() {
        return( 
        
        <DropdownButton id="dropdown-basic-button" title="My Network">
            <Dropdown.Item href="https://docs.google.com/document/d/1iJ1v7HyfodCWvg5OSQIXbUATrBM9mPwdqeIzKuld1qs/edit">LinkedIn</Dropdown.Item>
            <Dropdown.Item href="https://www.linkedin.com/in/tyler-goodman-39b289195/">Github</Dropdown.Item>
            <Dropdown.Item href="https://github.com/KawaiiSlave">Resume</Dropdown.Item>
        </DropdownButton>
        );
}


export default DropdownBtn;