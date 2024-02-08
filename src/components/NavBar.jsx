import React from 'react';
import Logo from '../assets/logo.svg';

function NavBar() {

  return (
    <div className="max-w-[850px] w-[100%] flex justify-between align-center padd-[15px] border-[1px]">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <div>
        <section>
          <div>
            <li>Product</li>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
        </section>
        <section>
          <button>Login</button>
          <button>Signup</button>
        </section>
      </div>
      <div>
        ×
      </div>
    </div>
  )
}

export default NavBar;
