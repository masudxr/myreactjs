import { RightCircleFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';

const name = 'Masud';

function HeroBanner() {
    return (
        <div className="homebanner">
            <h1>Hello {name}</h1>
            <h4>Trade-in-offer</h4>
            <h2>Super Value Deals</h2>
            <h1> On all Products</h1>
            <p>Save more with coupons & up to 70% off!!</p>
            <br />
            <a href="/shop.html">
                <Space wrap>
                    <Button type="primary">
                        Shop Now!! <RightCircleFilled />
                    </Button>
                </Space>
            </a>
        </div>
    );
}
export default HeroBanner;
