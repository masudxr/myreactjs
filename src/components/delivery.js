import { Col, Divider, Row } from 'antd';
import React from 'react';

import { CheckCircleFilled, DeliveredProcedureOutlined, PhoneFilled } from '@ant-design/icons';

const Offertemp = () => (
    <div className="offerTemp">
  <Row className="offerTempRow">
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
        <div className="deliveryTemp">
           <h2>
           <DeliveredProcedureOutlined />
           </h2>
        <Divider orientation="left">
        <h1>Free Delivery</h1>
      <p>Lorem Ipsum is simply dummy text </p>
      <p>Lorem Ipsum is simply dummy text of the </p>
      <p>Lorem Ipsum is simply dummy</p>
          </Divider>
        </div>

    </Col>
    <Col
      xs={{
        span: 11,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
        <div className="deliveryTemp">
            <h2>
            <CheckCircleFilled />
            </h2>
        <Divider orientation="left">
        <h1>High Quality</h1>
      <p>Lorem Ipsum is simply dummy text </p>
      <p>Lorem Ipsum is simply dummy text of the </p>
      <p>Lorem Ipsum is simply dummy</p>
          </Divider>
        </div>
    </Col>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
         <div className="deliveryTemp">
            <h2>
            <PhoneFilled />

            </h2>
        <Divider orientation="left">
        <h1>Fast Support</h1>
      <p>Lorem Ipsum is simply dummy text </p>
      <p>Lorem Ipsum is simply dummy text of the </p>
      <p>Lorem Ipsum is simply dummy</p>
          </Divider>
        </div>
    </Col>
  </Row>
  </div>

);
export default Offertemp;
