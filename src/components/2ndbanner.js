import { Col, Divider, Row } from 'antd';
import React from 'react';

function CatgBanner() {
    return (
        <Row>
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
                <img src=".//logo192.png" alt="" />
                <Divider orientation="center">
                    <h2>Banner Category</h2>
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
                <img src=".//logo192.png" alt="" />
                <Divider orientation="center">
                    <h2>Banner Category</h2>
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
                <img src=".//logo192.png" alt="" />
                <Divider orientation="center">
                    <h2>Banner Category</h2>
                </Divider>
            </Col>
        </Row>
    );
}
export default CatgBanner;
