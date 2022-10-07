import React from 'react';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className='container'>
      <header className='Header'>
        <img src='https://cdn.shopify.com/s/files/1/1236/6576/products/i_m-the-mary-web_f42d4a02-e67a-4dcb-afb0-5e68c4d91b12_1200x.jpg?v=1561622906' className="TrixieLogo" alt="logo" />
        <img src='https://i.pinimg.com/originals/bf/2b/75/bf2b75361e18259d50f2942b28b3878d.png' className='TrixieLogo' alt="logo" />
        <h1 className='Title'>Trixie Jukebox 📻</h1>
      </header>
    </div>
    );
  }
}