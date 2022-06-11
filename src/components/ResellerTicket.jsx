import React from "react";
import {Button, Col, Row, Select, Space} from "antd";
import resellerImg from "../assets/background/reseller.png";

function ResellerTicket() {
    const {Option} = Select;
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
    const styles = {
        description: {
            fontSize: '20px',
            fontWeight: '300',
            letterSpacing: '.1px',
            lineHeight: '28px',
            marginBottom: '40px',
        },
        featured: {
            backgroundColor: '#f4f5f6',
            paddingTop: '90px',
            padding: '4rem 0',
        },
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
        <div style={{marginTop: '2rem'}}>
            <div className="container">
                <Row gutter={18} style={{padding: '4rem 0'}}>
                    <Col xs={24} xl={12}>
                        <h1 style={{marginBottom: '20px', fontSize: '3rem'}}>Purchase Events that Have Already Been Sold
                            Out.</h1>
                        <p style={styles.description}>With NFT Access, NFTs become easy and secure gateways to events
                            and
                            experiences around the world. Ditch the ticketing infrastructure of the past and create a
                            collectable digital experience like no other.</p>
                        <Space>
                            <Button type="primary" shape="round" size='large'>
                                Discover Events
                            </Button>
                            <Button shape="round" size='large'>
                                Claim Airdrop
                            </Button>
                        </Space>

                    </Col>
                    <Col xs={24} xl={12}>
                        <img src={resellerImg} alt="logo"/>
                    </Col>
                </Row>
            </div>
            <div style={{paddingTop:'4rem',background: 'white'}}>
                <div className="container" >
                    <Row gutter={18}>
                        <Col span={24}>
                            <h2 className="event-heading text-center mb-3">Reseller Market</h2>
                            <p className="text-center">Purchase tickets that have already been sold</p>
                        </Col>
                    </Row>
                    <Row gutter={18} className="mb-5 mt-5">
                        <Col span={8}>
                            <select className="form-control">
                                <option value="Find events near you">Find events near you</option>
                            </select>
                        </Col>
                        <Col span={8}>
                            <select className="form-control">
                                <option value="Find events near you">Attending</option>
                                <option value="10+">10+</option>
                                <option value="20+">20+</option>
                                <option value="30+">30+</option>
                            </select>
                        </Col>
                        <Col span={8}>
                            <select className="form-control">
                                <option value="All Dates">All Dates</option>
                                <option value="10+">10+</option>
                                <option value="20+">20+</option>
                                <option value="30+">30+</option>
                            </select>
                        </Col>

                    </Row>
                    <Row gutter={18}>

                        {[1, 2, 3, 4, 5, 6].map((e, i) => {
                            return <Col xs={24} xl={8} key={i}>
                                <div className="card xyz" style={{borderRadius: '15px', marginBottom: '30px'}}>
                                    <div className="img-top-div">
                                        <img style={{borderRadius: '15px'}}
                                             src="https://gateway.pinata.cloud/ipfs/QmRwANXooxciWkhSVu9kDUXtGReiouhH82t3AjRetzhrjc"
                                             className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="FeaturedCard_eventRSVPs__oLSsB">JUN 22 | 9:30 BST</div>

                                    <div className="card-body text-center" style={{marginTop: '-55px'}}>
                                        <div
                                            className="card-round-image-box">
                                            <img alt="" className="Image--image"
                                                 src="https://lh3.googleusercontent.com/fr6lqiwGJMbef3hDQ3AKOtMQSD_w41GjbBpnBln-o-2rnRUZEKx5pOmm8l87_89CkGWbMHNudwz6vhIuvLluPGqxCW_KzVYlGwkgew=s100"
                                                 style={{objectFit: 'cover'}}/>
                                        </div>
                                        <h6 className="card-title mt-2 mb-1">Call Me Cute Pie</h6>
                                        <div className="posted-by mb-3">By <a href="#">PROOF_XYZ</a></div>
                                        <div className="text-ellipsis-2 pl-4 pr-4">
                                            Welcome Crewmate! Board the ARK for our first Everai community Web3 & IRL
                                            experience featuring a trilogy of announcements including a special edition
                                            of @alanartdirector's Space Bar.
                                            Crew mates are allowed to bring a +1
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </div>

            </div>
        </div>
    );
}

export default ResellerTicket;
