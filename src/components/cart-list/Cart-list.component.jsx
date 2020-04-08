import React from 'react';
import { Cart } from '../cart/Cart.component';
import './Cart-list.style.css';

export const CartList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => (
      <Cart key={monster.id} monster={monster} />
    ))}
  </div>
);
