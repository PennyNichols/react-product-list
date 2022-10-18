import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <div>
        
      <Nav fill variant="pills" defaultActiveKey="1" >
        <Nav.Item>
            <Nav.Link eventKey="1">
                All
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2" >
                Electronics
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="3" >
                Furniture
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="4" >
                Others
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="5" >
                Clothes
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="6" >
                Shoes
            </Nav.Link>
        </Nav.Item>
        
      </Nav>
    </div>
  )
}

export default Navbar
