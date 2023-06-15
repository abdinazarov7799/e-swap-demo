import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { Badge} from 'antd';
import './recProducts.css';
import Car from '../../assets/images/products/lc200.png';

function Product(props) {
    return(
        <>
            <Card
                style={{
                    width: '100%',
                    position: "relative",
                    border: "none"
                }}
            >
                <span id="card-type">
                    {props.type}
                </span>
                <img
                    alt="Product Img"
                    src={Car}
                />
                <CardBody className="px-0">
                    <Badge.Ribbon text="~65,000 AED" style={{
                        background: "#FF7001",
                        color: "#ffffff",
                        right: "0px",
                        top: "1px"
                    }}></Badge.Ribbon>
                    <CardTitle tag="h5" className="rec-card-title mb-3">
                        Estimated cost:
                    </CardTitle>

                    <CardSubtitle
                        className="mb-2"
                        tag="h6"
                    >
                        Lexus GX
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Year: 2014 • KM: 200,450
                    </CardSubtitle>
                </CardBody>
            </Card>
        </>
    );
}
export default Product;