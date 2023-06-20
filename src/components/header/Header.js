import './Header.css';
import {Col, Container, Row} from "reactstrap";
import { Dropdown, Menu, Space} from "antd";
import {DownOutlined, HeartOutlined, PushpinOutlined} from "@ant-design/icons";
import LogoDefoult from "../../assets/logos/logo@3000px.svg";
import React, {useEffect, useState} from "react";


const items = [
    {
        label: (
            <a href="#">
                1st menu item
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="#">
                2nd menu item
            </a>
        ),
        key: '1',
    },
];

function Header() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch categories
        fetch('http://tes.mediasolutions.uz/api.php?action=categories')
            .then(response => response.json())
            .then(data => setCategories(data));

    }, []);
    return (
        <>
            <section id="navbar">
                <Container>
                    <Row style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Col md={6}>
                            <ul>
                                <li>
                                    <a href="#">Vacancies</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="topLeft"
                                    >
                                        <a href="#">
                                            <Space style={{cursor: "pointer"}}>
                                                Catalogue
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="right-menu">
                                <a href="#">Sign Up or Sign in</a>
                                <button>
                                    Place Your Ad
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="header">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col>
                            <img src={LogoDefoult} alt="logo" style={{width: "177px", height: "50px"}}/>
                        </Col>
                        <Col >
                            <Dropdown overlay={
                                <Menu>
                                    {categories.map(item => {
                                        return (<Menu.Item key={item.id}>{item.category}</Menu.Item>)
                                    })}
                                </Menu>
                            }>
                                <button className="btn float-start" id="selectBtn">
                                    <Space>
                                        Select category
                                        <DownOutlined/>
                                    </Space>
                                </button>
                            </Dropdown>
                        </Col>
                        <Col lg={6} className="row">
                            <Col>
                                <div className="input-group" id="header-input">
                                    <input type="text" className="form-control"
                                           placeholder="Enter search text here (e.g. Chevrolet Camaro SS)"/>
                                    <button className="btn input-group-append">Search</button>
                                </div>
                            </Col>
                        </Col>
                        <Col lg={2} sm={3} className="d-flex justify-content-between align-content-center">
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <HeartOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0}}>Favorites</p>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <PushpinOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0, width: "87px"}}>Select Region</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Header;
