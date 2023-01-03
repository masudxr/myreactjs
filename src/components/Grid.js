import { Col, Divider, Row } from 'antd';
import React from 'react';

// const style = {
//     background: 'white',
//     padding: '8px 0',
// };

function GridMenu() {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <Divider orientation="center">Home</Divider>
      </Col>
      <Divider orientation="right">
        <Col className="gutter-row" span={6}>
          <h2>Service</h2>
        </Col>
        <Col className="gutter-row" span={6}>
          <h2>About</h2>
        </Col>
        <Col className="gutter-row" span={6}>
          <h2>Contact</h2>
        </Col>
      </Divider>
    </Row>
  );
}
export default GridMenu;
