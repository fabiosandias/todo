import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/create">+</Link>
    </div>
  );
}

export default Navbar;