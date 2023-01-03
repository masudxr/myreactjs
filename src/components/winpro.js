import { useState } from 'react';

function WinProducts() {
  const [winPro] = useState({
    proTitle: '',
    description: '',
    price: '',
  });
  const { proTitle, description, price } = winPro;

  winPro.proTitle = 'Male T-shirt';
  winPro.description = 'Cartoon Astronaut Male Tshirt';
  winPro.price = '$150';
  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        <div className="pro">
          <div>
            <img src="../logo192.png" alt="" />
            <h1> {winPro.proTitle} </h1>
            <h6>{winPro.description}</h6>
            <h4> {winPro.price} </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WinProducts;
