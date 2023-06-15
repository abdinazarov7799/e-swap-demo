import './Header.css';
import {Col, Container, Row} from "reactstrap";
import {Button, Dropdown, Menu, Space} from "antd";
import {DownOutlined, HeartOutlined, PushpinOutlined} from "@ant-design/icons";
import LogoDefoult from "../../assets/logos/logo@3000px.svg";
import Search from "antd/lib/input/Search";
import {logDOM} from "@testing-library/react";

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
                    <Row className="justify-content-between align-items-center">
                        <Col md={2} className="me-4">
                            <img src={LogoDefoult} alt="logo" style={{width: "177px", height: "50px"}}/>
                        </Col>
                        <Col md={7} className="row">
                            <Col md={3}>
                                <Dropdown overlay={
                                    <Menu>
                                        <Menu.Item key="1">Category 1</Menu.Item>
                                        <Menu.Item key="2">Category 2</Menu.Item>
                                        <Menu.Item key="3">Category 3</Menu.Item>
                                    </Menu>
                                }
                                          placement="top">
                                    <Button id="selectBtn" style={{backgroundColor: '#FF7001', color: '#fff'}}>
                                        <Space style={{cursor: "pointer"}}>
                                            Select category
                                            <DownOutlined/>
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </Col>
                            <Col>
                                <div className="input-group" id="header-input">
                                    <input type="text" className="form-control"
                                           placeholder="Enter search text here (e.g. Chevrolet Camaro SS)"/>
                                    <button className="btn input-group-append">Search</button>
                                </div>
                            </Col>
                        </Col>
                        <Col md={3} className="d-flex align-items-center justify-content-end align-content-center">
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
                                marginLeft: "49px"
                            }}>
                                <PushpinOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0}}>Select Region</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Header;
