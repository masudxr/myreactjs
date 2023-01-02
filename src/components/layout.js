import {
    ContactsOutlined, CustomerServiceOutlined, HistoryOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined, RightCircleFilled, UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Pagination, Space, theme } from 'antd';
import React, { useState } from 'react';
import Welcome from './NavBar';
import Products from './products';


export function formatDate(date) {
    return date.toLocaleDateString();
}
const name = 'Masud';

const comment = {
    date: new Date(),
    text: 'Your description type here for your products',
    author: {
        name: 'Mew Mew',
        avatarUrl: './/logo192.png',
    },
};


const { Header, Sider, Content } = Layout;

const HeaderSider = (React.FC = function () {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <CustomerServiceOutlined />,
                            label: 'Service',
                        },
                        {
                            key: '3',
                            icon: <HistoryOutlined />,
                            label: 'About',
                        },
                        {
                            key: '4',
                            icon: <ContactsOutlined />,
                            label: 'Contact',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
            <h3 className="Title">
                <a href="/">
                    <Welcome name="eCommerce Shop!!" />
                </a>
            </h3>
            <br />
            <div className="container" />
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
            <br />
            <br />
            <h2>New Product</h2>
            <div className='feapro'>
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            </div>
            <br />
            <br />
            <h2>Winter Products</h2>
            <div className='feapro'>
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            {/* <Products date={comment.date} text={comment.text} author={comment.author} /> */}
            </div>
            <br />
            <br />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </p>
            <br />
            <Pagination defaultCurrent={1} total={50} />

                </Content>
            </Layout>
        </Layout>
    );
});

export default HeaderSider;
