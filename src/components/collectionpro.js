import { Row } from 'antd';
import React from 'react';

const ProCollection = () => (
<>
<div className="ProCollection">
    <Row justify="space-around">
        {/* <Col span={10}> */}
        <div className="proClass1">
        <img src=".//collectionSofa.jpg" alt="" />
            <h2>Sofas</h2>
        </div>

        {/* </Col> */}
        {/* <Col span={10}> */}
        <div className="proClass2">
        <img src=".//collectionChair.jpg" alt="" />
            <h2>Chairs</h2>
        </div>

        {/* </Col> */}
    </Row>
</div>
</>
);

export default ProCollection;