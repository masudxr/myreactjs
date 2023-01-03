import React from 'react';
import Welcome from './components/NavBar';

function App2() {
  return (
    <>
      <nav className="Container">
        <a href="/">
          <li>
            <Welcome name="Home" />
          </li>
        </a>

        <a href="/">
          <li>
            <Welcome name="Service" />
          </li>
        </a>
        <a href="/">
          <li>
            <Welcome name="About" />
          </li>
        </a>
        <a href="/">
          <li>
            <Welcome name="Contact" />
          </li>
        </a>
      </nav>
      <h3 className="Title">
        <a href="/">
          <Welcome name="eCommerce Shop!!" />
        </a>
      </h3>
    </>
  );
}

export default App2;
