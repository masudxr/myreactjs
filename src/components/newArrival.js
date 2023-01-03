import { Col, Row } from 'antd';
import React from 'react';

const NewArrival = () => (
  <>
    <div className="newArrival">
      <Row justify="space-around">
        <Col span={4}>
          <img src=".//cat1.webp" alt="" />
          <h2>Mixed Sofa</h2>
          <p>$250.15</p>
        </Col>
        <Col span={4}>
          <img src=".//cat2.jpg" alt="" />
          <h2>Dark Gray Sofa</h2>
          <p>$742.15</p>
        </Col>
        <Col span={4}>
          <img src=".//cat3.jpg" alt="" />
          <h2>Tan Sofa</h2>
          <p>$310.15</p>
        </Col>
        <Col span={4}>
          <img src=".//cat1.webp" alt="" />
          <h2>Brown Sofa</h2>
          <p>$170.15</p>
        </Col>
      </Row>
    </div>
  </>
);
export default NewArrival;
