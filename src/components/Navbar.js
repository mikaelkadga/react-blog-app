import Nav from 'react-bootstrap/Nav';
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="mt-3 px-3 bg-dark rounded-1 d-flex align-items-center font-link border border-1 border-white"
        style={{height: 60}}
        >
            <Nav.Item className="col-sm-3">
                <Nav.Link>
                    <Link to="/" style={{textDecoration: "none"}} className="text-light font-small">project-1</Link>
                </Nav.Link>
            </Nav.Item>

            <div className='d-flex col-sm-5'>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/" style={{textDecoration: "none"}} className="text-light font-small">home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/blog" style={{textDecoration: "none"}} className="text-light font-small">blog</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/myposts" style={{textDecoration: "none"}} className="text-light font-small">my posts</Link>
                    </Nav.Link>
                </Nav.Item>
            </div>
            
            <div className='d-flex col-sm-3 justify-content-end'>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/registration" style={{textDecoration: "none"}} className="text-light font-small">register</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/login" style={{textDecoration: "none"}} className="text-light font-small">login</Link>
                    </Nav.Link>
                </Nav.Item>
            </div>
            
        </Nav>
        <div>
            {props.children}
        </div>
     </>
  );
}