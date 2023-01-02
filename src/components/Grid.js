import { Col, Row } from 'antd';
import React from 'react';

const style = {
    background: 'white',
    padding: '8px 0',
};

function GridMenu() {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {/* <Divider orientation="left"> */}
            {/* <Html5TwoTone /> */}
            {/* </Divider> */}
            {/* <Divider orientation="right"> */}
            <Col className="gutter-row" span={6}>
                <div style={style}>Home</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Service</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>About</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>Contact</div>
            </Col>
            {/* </Divider> */}
        </Row>
    );
}
export default GridMenu;
