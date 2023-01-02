import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';

const Grid2 = (React.FC = function () {
    return (
        <section className="Title">
            <div>
                <ul className="Container">
                    <h2>FURNI</h2>

                    <li>
                        <a href="/">
                            <h3>Home</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h3>Service</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <h3>About</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            <h3>Contact</h3>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="childrenclass">
                {/* <Divider orientation="right"> */}
                <li>
                    <a href="/login">
                        <h4>LogIn</h4>
                    </a>
                </li>
                <ShoppingCartOutlined />
                <a href="/about">
                    <h4>Cart</h4>
                </a>
                {/* </Divider> */}
            </div>
        </section>
    );
});

export default Grid2;
