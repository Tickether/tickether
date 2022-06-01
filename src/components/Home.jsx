import React, {useState} from "react";
import {Card, Col, Row} from "antd";
import {NavLink} from "react-router-dom";

const {Meta} = Card;

const styles = {
    NFTs: {
        display: "flex",
        flexWrap: "wrap",
        WebkitBoxPack: "start",
        justifyContent: "flex-start",
        margin: "0 auto",
        maxWidth: "1000px",
        gap: "10px",
    },
};
const cardStyles = {
    imgStyle: {
        borderRadius: '6px',
        boxShadow: '0 2px 2px rgb(0 0 0 / 31%)',
        display: 'block',
        height: '200px',
        margin: '0',
        overflow: 'hidden',
        padding: '0'
    },

};

function Home() {
    const styles = {
        NFTs: {
            display: "flex",
            flexWrap: "wrap",
            WebkitBoxPack: "start",
            justifyContent: "flex-start",
            margin: "0 auto",
            maxWidth: "1000px",
            gap: "10px",
        },
        banner: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "0 auto",
            width: "600px",
            //borderRadius: "10px",
            height: "150px",
            marginBottom: "40px",
            paddingBottom: "20px",
            borderBottom: "solid 1px #e3e3e3",
        },
        logo: {
            height: "115px",
            width: "115px",
            borderRadius: "50%",
            // positon: "relative",
            // marginTop: "-80px",
            border: "solid 4px white",
        },
        text: {
            color: "#041836",
            fontSize: "27px",
            fontWeight: "bold",
        },
    };

    return (
        <>
            <div className="container">
                <Row gutter={18}>
                    <Col span={24}>
                        <h1 className="event-heading" data-v-599f73cf="">The best events happening now.</h1>
                    </Col>
                    <Col xs={24} xl={8}>
                        <NavLink to="/Afrochella2022">
                            <div className="card-div">
                                <Card style={cardStyles.imgStyle}
                                      hoverable
                                      cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                          <img alt="example" className="flyer"
                                               src="https://gateway.pinata.cloud/ipfs/QmabEv5TrZAkmsamBxMZnJGeP6G35cQupt9bQN5SsNF3Na"/></div>}
                                >

                                </Card>
                                <div className="card-content-data">
                                    <span className="event-date">21st May 2022</span>
                                    <h3 className="event-title">Afrochella 2022</h3>
                                    <span className="event-price">ETH 0.015</span>
                                </div>

                            </div>
                        </NavLink>
                    </Col>
                    <Col xs={24} xl={8}>
                        <NavLink to="/BurningMan2022">
                            <div className="card-div">
                                <Card style={cardStyles.imgStyle}
                                      hoverable
                                      cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                          <img alt="example" className="flyer"
                                               src="https://gateway.pinata.cloud/ipfs/QmNdxQY91wsRrBSTonYHD1vUHkYSYYmAW3qdMJw5GpP67Q"/></div>}
                                >

                                </Card>
                                <div className="card-content-data">
                                    <span className="event-date">21st May 2022</span>
                                    <h3 className="event-title">BurningMan 2022</h3>
                                    <span className="event-price">ETH 0.011</span>
                                </div>

                            </div>
                        </NavLink>
                    </Col>

                    <Col xs={24} xl={8}>
                        <NavLink to="/Coachella2022">
                        <div className="card-div">
                            <Card style={cardStyles.imgStyle}
                                  hoverable
                                  cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                      <img alt="example" className="flyer"
                                           src="https://gateway.pinata.cloud/ipfs/QmRwANXooxciWkhSVu9kDUXtGReiouhH82t3AjRetzhrjc"/></div>}
                            >

                            </Card>
                            <div className="card-content-data">
                                <span className="event-date">21st May 2022</span>
                                <h3 className="event-title">Coachella 2022</h3>
                                <span className="event-price">ETH 0.02</span>
                            </div>

                        </div>
                        </NavLink>
                    </Col>
                    <Col xs={24} xl={8}>
                        <NavLink to="/Felabration2022">
                        <div className="card-div">
                            <Card style={cardStyles.imgStyle}
                                  hoverable
                                  cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                      <img alt="example" className="flyer"
                                           src="https://gateway.pinata.cloud/ipfs/QmPm1EiKRAXk5tw9psiV5PT5JctuUvkUJ3E71qopYQCmUx"/></div>}
                            >

                            </Card>
                            <div className="card-content-data">
                                <span className="event-date">21st May 2022</span>
                                <h3 className="event-title">Felabration 2022</h3>
                                <span className="event-price">ETH 0.03</span>
                            </div>

                        </div>
                        </NavLink>
                    </Col>
                    <Col xs={24} xl={8}>
                        <NavLink to="/Lollapalooza2022">
                        <div className="card-div">
                            <Card style={cardStyles.imgStyle}
                                  hoverable
                                  cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                      <img alt="example" className="flyer"
                                           src="https://gateway.pinata.cloud/ipfs/QmbFXK7EX41sAGD9ht3UzjJDA3uCAqa4rW6oM1YfpRidL2"/></div>}
                            >

                            </Card>
                            <div className="card-content-data">
                                <span className="event-date">21st May 2022</span>
                                <h3 className="event-title">Lollapalooza 2022</h3>
                                <span className="event-price">ETH 0.04</span>
                            </div>

                        </div>
                        </NavLink>
                    </Col>
                    <Col xs={24} xl={8}>
                        <NavLink to="/SXSW2022">
                        <div className="card-div">
                            <Card style={cardStyles.imgStyle}
                                  hoverable
                                  cover={<div style={{height: '200px', overflow: 'hidden'}}>
                                      <img alt="example" className="flyer"
                                           src="https://gateway.pinata.cloud/ipfs/QmU11ReSVkm3BhQ6dFxwVm94Q4Xhtr6vK1E2mmaeQ1inGg"/></div>}
                            >

                            </Card>
                            <div className="card-content-data">
                                <span className="event-date">21st May 2022</span>
                                <h3 className="event-title">SXSW 2022</h3>
                                <span className="event-price">ETH 0.025</span>
                            </div>

                        </div>
                        </NavLink>
                    </Col>

                </Row>
            </div>

        </>
    );
}

export default Home;
