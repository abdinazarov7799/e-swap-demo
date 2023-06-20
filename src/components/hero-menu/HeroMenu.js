import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import {Col, Container, Row} from "reactstrap";
import "./HeroMenu.css";
import Product from "../recProducts/recProduct";


function HeroMenu() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch items
        fetch('http://tes.mediasolutions.uz/api.php?action=items')
            .then(response => response.json())
            .then(data => setProducts(data));

        // Fetch categories
        fetch('http://tes.mediasolutions.uz/api.php?action=categories')
            .then(response => response.json())
            .then(data => setCategories(data));

    }, []);

    const items = [
        {
            label: 'Recommendations',
            key: 'recommendations',
            count: 98,
        },
        {
            label: 'Newest',
            key: 'newest',
            count: 99
        },
        {
            label: 'Nearby',
            key: 'nearby',
            count: 56
        },
    ];
    const [current, setCurrent] = useState('recommendations');
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
                    <Row className="flex-wrap">
                        {products.map((product) => (

                            <Col md={3}>
                                <Product
                                    category_id={product.category_id}
                                    key={product.id}
                                    category={categories.map((cat) => {
                                        if (product.category_id === cat.id){
                                            return  cat.category
                                        }
                                    })}
                                    img={product.image}
                                    cost={product.cost}
                                    name={product.name}
                                    description={product.description}
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