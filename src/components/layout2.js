/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */
/* eslint-disable func-names */
// Header-Content-Footer
import { RightCircleFilled } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Space, theme } from 'antd';
import React from 'react';
import Products from './products';

const comment = {
    date: new Date(),
    text: 'Your description Here',
    author: {
        name: 'Mew Mew',
        avatarUrl: './/logo192.png',
    },
};
// const categorypro = {
//     date: new Date(),
//     text: 'Category Products',
//     author: {
//         name: 'Sofa',
//         avatarUrl: './/sofa.jpg',
//     },
// };
const { Header, Content, Footer } = Layout;
const name = 'Masud';

const MyLayOut = (React.FC = function () {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                {/* <h2>Hello Masud</h2> */}
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    
                    items={[
                        {
                            label: 'FurnisherShop',
                        },
                        {
                            key: '1',
                            // icon: <UserOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            // icon: <CustomerServiceOutlined />,
                            label: 'Service',
                        },
                        {
                            key: '3',
                            // icon: <HistoryOutlined />,
                            label: 'About',
                        },
                        {
                            key: '4',
                            // icon: <ContactsOutlined />,
                            label: 'Contact',
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                <div className="site-layout-content" style={{ background: colorBgContainer }} />
                <br /><br /><br /><br />
            <div className="homebanner" >
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
            <br />
            <br />
            {/* <div className='category'>
            <div>
            <Products date={categorypro.date} text={categorypro.text} author={categorypro.author} />
            </div> 
            </div> */}

            <br />
            <h2>New Product</h2>
            <div className='feapro'>
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            </div>
            <br />
            <br />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Furniture Shop ©2023 Created by MasudRana</Footer>
        </Layout>
    );
});

export default MyLayOut;