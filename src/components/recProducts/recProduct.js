import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { Badge} from 'antd';
import './recProducts.css';

function Product(props) {
    return(
        <>
            <Card
                style={{
                    width: '100%',
                    position: "relative",
                    border: "none"
                }}
                key={props.key}
            >
                <span id="card-type">
                    {props.category}
                </span>
                <div style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    height: "180px",
                    borderRadius: "10px"
                }}>
                </div>
                <CardBody className="px-0">
                    <Badge.Ribbon text={"~" + Number(props.cost).toLocaleString("en-US") + " AED"} style={{
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
                        {props.name}
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.description}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </>
    );
}
export default Product;