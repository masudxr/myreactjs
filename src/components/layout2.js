/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */
/* eslint-disable func-names */
// Header-Content-

import { Divider, Layout, theme } from 'antd';
import React from 'react';
import GridMenu from './Grid';
import HeroBanner from './herobanner';
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

const MyLayOut = (React.FC = function () {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
            <Divider orientation="center">

                    <GridMenu />
            </Divider>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ background: colorBgContainer }} />
                <br /><br /><br /><br />
                <HeroBanner />
            <br />
            <br />
            {/* <div className='category'>
            <div>
            <Products date={categorypro.date} text={categorypro.text} author={categorypro.author} />
            </div> 
            </div> */}

            <br />
            <h2>New Product</h2>
            <div className="feapro">
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
        <Products date={comment.date} text={comment.text} author={comment.author} />
    </div>;
            <br />
            <br />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Furniture Shop ©2023 Created by MasudRana</Footer>
        </Layout>
    );
});

export default MyLayOut;