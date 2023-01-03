import { Button, Space } from 'antd';

function HeroBanner() {
  return (
    <div className="homebanner">
      <h3>Our Modern Design</h3>
      <h1>SOFAS & CHAIR</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <p>Lorem Ipsum is simply dummy text of the printing</p>
      <br />
      <a href="/shop.html">
        <Space wrap>
          <Button type="primary">SHOP NOW</Button>
        </Space>
      </a>
    </div>
  );
}
export default HeroBanner;
