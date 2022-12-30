/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-default */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import Welcome from './components/NavBar';
import Products from './components/products';

function formatDate(date) {
    return date.toLocaleDateString();
}

const comment = {
    date: new Date(),
    text: 'Your description type here for your products',
    author: {
        name: 'Mew Mew',
        avatarUrl: './/logo192.png',
    },
};

const name = 'Masud';

function App() {
    return (
        <>
            <nav className="Container">
                <a href="/">
                    <li>
                        <Welcome name="Home" />
                    </li>
                </a>

                <a href="/">
                    <li>
                        <Welcome name="Service" />
                    </li>
                </a>
                <a href="/">
                    <li>
                        <Welcome name="About" />
                    </li>
                </a>
                <a href="/">
                    <li>
                        <Welcome name="Contact" />
                    </li>
                </a>
            </nav>
            <h3 className="Title">
                <a href="/">
                    <Welcome name="eCommerce Shop!!" />
                </a>
            </h3>
            <div className="container" />
            <h1>Hello {name}</h1>
            <h4>Trade-in-offer</h4>
            <h2>Super Value Deals</h2>
            <h1> On all Products</h1>
            <p>Save more with coupons & up to 70% off!!</p>
            <a href="/shopping">
                <button>Shop Now</button>
            </a>
            <br />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
            <Products date={comment.date} text={comment.text} author={comment.author} />
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
        </>
    );
}

export default App;
