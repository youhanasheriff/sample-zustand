import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard';
import useStore from '../store/cartStore';

import '../styles/App.scss';

const Cart = () => {
  const { addedProducts } = useStore();
  return (
    <div>
      <Navbar />
      <div className="body">
        {addedProducts.length ? (
          addedProducts.map(product => (
            <>
              <ProductCard key={product._id} product={product} page="cart" />
            </>
          ))
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '3em' }}>No Item Added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
