import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import StarRating from "../StarRating/StarRating";

const MyNavBar = ({ setSearching, getRateValue }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Movie Plus</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav>
                    <StarRating getRateValue={getRateValue} />
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => setSearching(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavBar;
