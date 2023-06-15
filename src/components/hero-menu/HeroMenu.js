import {AppstoreOutlined, MailOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {Button, Menu} from "antd";
import {Col, Container, Row} from "reactstrap";
import "./HeroMenu.css";
import Product from "../recProducts/recProduct";
import img1 from '../../assets/images/products/lc200.png';

function HeroMenu() {
    const products = [
        {
            type: 'Cars',
            img: {img1},
            cost: '~65,000 AED',
            name: 'Lexus GX',
            description: 'Year: 2014 • KM: 200,450'
        },
        {
            type: 'Cars',
            img: {img1},
            cost: '~65,000 AED',
            name: 'Lexus GX',
            description: 'Year: 2014 • KM: 200,450'
        },
        {
            type: 'Cars',
            img: {img1},
            cost: '~65,000 AED',
            name: 'Lexus GX',
            description: 'Year: 2014 • KM: 200,450'
        },

        {
            type: 'Cars',
            img: {img1},
            cost: '~65,000 AED',
            name: 'Lexus GX',
            description: 'Year: 2014 • KM: 200,450'
        }
    ];
    const items = [
        {
            label: 'Recommendations',
            key: 'recommendations',
            count: 98
        },
        {
            label: 'Newest',
            key: 'newest',
            count: 99
        },
        {
            label: 'Nearby',
            key: 'nearby',
            count: 75
        },
    ];
    const [current, setCurrent] = useState('mail');
    return(
        <>
            <Container className="mt-4">
                <Menu onClick={(e) => {
                    setCurrent(e.key);
                }} selectedKeys={[current]} mode="horizontal">
                    {items.map((item) => (
                        <Menu.Item key={item.key}>
                            <span className="me-2">{item.label}</span>
                            <span id="menu-badge">{item.count}</span>
                        </Menu.Item>
                    ))}
                </Menu>
                <section className="mt-4 mb-2">
                    <Row className="flex-wrap justify-content-between">
                        {products.map((products) => (
                            <Col>
                                <Product
                                    type={products.type}
                                    img={products.img}
                                    cost={products.cost}
                                    name={products.name}
                                    description={products.description}
                                />
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
        </>
    );
}
export default HeroMenu;