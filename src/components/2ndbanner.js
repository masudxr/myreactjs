import { Col, Divider, Row } from 'antd';
import React from 'react';

function CatgBanner() {
  return (
    <div className="catbanner">
      <Row className="catcol">
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
          <Divider orientation="center">
            <img src=".//cat1.webp" alt="" />
            <h2>Category 1</h2>
          </Divider>
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
          <Divider orientation="center">
            <img src=".//cat2.jpg" alt="" />
            <h2>Category 2</h2>
          </Divider>
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
          <Divider orientation="center">
            <img src=".//cat3.jpg" alt="" />
            <h2>Category 3</h2>
          </Divider>
        </Col>
      </Row>
    </div>
  );
}
export default CatgBanner;
