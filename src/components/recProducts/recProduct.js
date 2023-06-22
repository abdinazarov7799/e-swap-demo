import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import {Badge, Image} from 'antd';
import './recProducts.css';
import {useState} from "react";

function Product(props) {
    const [visible, setVisible] = useState(false);
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
                    height: "180px",
                    borderRadius: "10px"
                }}>
                <Image
                    preview={{
                        visible: false,
                    }}
                    height={180}
                    src={props.img}
                    onClick={() => setVisible(true)}
                    style={{ borderRadius: "10px"}}
                />
                <div
                    style={{
                        display: 'none',
                    }}
                >
                    <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                    >
                        <Image src={props.img} />
                        <Image src="https://telegra.ph/file/9f0904ef295ca1f62b0f9.png" />
                    </Image.PreviewGroup>
                </div>
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