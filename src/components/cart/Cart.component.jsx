import React from 'react';
import './Cart.style.css';

export const Cart = ({ monster: { name, email, id } }) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${id}?set=set2&size=180x200`}></img>
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);
