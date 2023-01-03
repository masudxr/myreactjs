import { Divider, Layout } from 'antd';
import React from 'react';
import CatgBanner from './2ndbanner';
import Grid2 from './grid2';
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

const { Header, Content, Footer } = Layout;

const MyLayOut = (React.FC = function () {
  return (
    <Layout className="layout">
      <section className="ant-layout layout css-dev-only-do-not-override-k83k30">
        <Header>
          <Grid2 />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div
            className="site-layout-content"
            style={{ background: 'white' }}
          />
          <br />
          <br />
          <br />
          <br />
          <HeroBanner />
          <br />
          <br />
          <Divider orientation="center">
            <h2> Category Products</h2>
          </Divider>
          <CatgBanner />
          <Divider orientation="center">
            <h2>New Product</h2>
          </Divider>
          <div className="feapro">
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Products
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
          </div>
          <br />
          <br />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Furniture Shop ©2023 Created by MasudRana
        </Footer>
      </section>
    </Layout>
  );
});

export default MyLayOut;
