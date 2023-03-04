import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand>
            Tung Notes App with TypeScript Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;