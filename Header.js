import React from 'react';
import TabsComp from '../Tabs/TabsComp';
import {Navbar} from 'react-bootstrap';
import { render } from '@testing-library/react';


class Header extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            <TabsComp/>
            </React.Fragment>
        )
    }
}


export default Header;
