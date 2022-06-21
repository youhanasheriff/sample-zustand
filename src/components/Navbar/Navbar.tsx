import React from 'react';
import useStore from '../../store/cartStore';

import './Navbar.scss';

const Navbar = () => {
  const store = useStore();

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Shopi-Sam</h1>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/cart" data-cart={store.total}>
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
