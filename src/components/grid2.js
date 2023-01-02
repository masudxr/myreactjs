/* eslint-disable no-multi-assign */
/* eslint-disable func-names */
import { Col, Row } from 'antd';
import React from 'react';

const Grid2 = (React.FC = function () {
    return (
        <Row>
            <Col span={18} push={6}>
                logo
            </Col>
            <Col span={6} pull={18}>
                menubar
            </Col>
        </Row>
    );
});

export default Grid2;
