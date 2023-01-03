import { Col, Row } from 'antd';
import React from 'react';

const WhoWe = () => (
<>
<div className="whowe">
    <Row justify="space-around">
        <Col span={12}>

        <div className="textpart">
            <h2>Sofas</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </Col>

        <Col span={12}>

        <div className="imgpart">
        <img src=".//collectionChair.jpg" alt="" />
        </div>
        </Col>

    </Row>
</div>
</>
);

export default WhoWe;