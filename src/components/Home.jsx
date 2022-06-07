import React, {useState} from "react";
import {Card, Col, Row, Button, Space} from "antd";
import {DownloadOutlined, WalletOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import sideImg from '../assets/background/homepagegraphic.png';
import wallet from '../assets/background/wallet.png';
import eventDetail from '../assets/background/eventDetails.png';
import addNft from '../assets/background/addNft.png';
import createEvent from '../assets/background/createEvent.png';

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
        border: '1px solid rgb(229, 232, 235)',
        display: 'block',
        height: '500px',
        margin: '0',
        overflow: 'hidden',
        padding: '0'
    },

};

function Home() {
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
                        <h1 style={{marginBottom: '20px', fontSize: '3rem'}}>Discover, Create, and Attend Events Using
                            NFTs</h1>
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
                        <img src={sideImg} alt="logo"/>
                    </Col>
                </Row>
            </div>
            <div style={styles.featured}>
                <div className="container">
                    <Row gutter={18}>
                        <Col span={24}>
                            <h1 className="event-heading text-center">Featured Events</h1>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Afrochella2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmabEv5TrZAkmsamBxMZnJGeP6G35cQupt9bQN5SsNF3Na")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <Row gutter={18}>
                                                    <Col xl={24}>
                                                        <div className="pl-3 pt-4 pb-3"><span
                                                            className="rbs">7000 attending</span></div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Afrochella 2022</div>
                                                <div className="promo-card-data">Jul 20 | 10:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/BurningMan2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmNdxQY91wsRrBSTonYHD1vUHkYSYYmAW3qdMJw5GpP67Q")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>BurningMan 2022</div>
                                                <div className="promo-card-data">Jun 20 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>

                        <Col xs={24} xl={8}>
                            <NavLink to="/Coachella2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmRwANXooxciWkhSVu9kDUXtGReiouhH82t3AjRetzhrjc")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Coachella 2022</div>
                                                <div className="promo-card-data">May 21 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Felabration2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmPm1EiKRAXk5tw9psiV5PT5JctuUvkUJ3E71qopYQCmUx")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">2000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Felabration 2022</div>
                                                <div className="promo-card-data">May 21 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Lollapalooza2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmbFXK7EX41sAGD9ht3UzjJDA3uCAqa4rW6oM1YfpRidL2")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Lollapalooza 2022</div>
                                                <div className="promo-card-data">May 31 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/SXSW2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmU11ReSVkm3BhQ6dFxwVm94Q4Xhtr6vK1E2mmaeQ1inGg")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">5500 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>SXSW 2022</div>
                                                <div className="promo-card-data">Aug 10 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </div>

            <div style={{paddingTop: '90px', padding: '4rem 0'}}>
                <div className="container">
                    <Row gutter={18}>
                        <Col span={24}>
                            <h1 className="event-heading text-center">Create an event</h1>
                        </Col>
                        <Col xs={24} xl={6}>
                            <div className="text-center">
                                <img className="eventIcon" style={{marginLeft: 'auto', marginRight: 'auto'}}
                                     src={wallet} alt="Connect Your Wallet Image"/>
                                <h5>Connect your wallet</h5>
                                <p style={{fontSize: '14px'}}>Create or login to your account by simply connecting your web3 wallet.</p>
                            </div>
                        </Col>

                        <Col xs={24} xl={6}>
                            <div className="text-center">
                                <img className="eventIcon" style={{marginLeft: 'auto', marginRight: 'auto'}}
                                     src={addNft} alt="add NFT'S"/>
                                <h5>Add NFTs</h5>
                                <p style={{fontSize: '14px'}}>Select the NFT collection(s) that get access to your event. Set different levels of
                                    access based on NFT properties.</p>
                            </div>
                        </Col>
                        <Col xs={24} xl={6}>
                            <div className="text-center">
                                <img className="eventIcon" style={{marginLeft: 'auto', marginRight: 'auto'}}
                                     src={eventDetail} alt="event details"/>
                                <h5>Add your event details</h5>
                                <p style={{fontSize: '14px'}}>Set a date, time, and location. Make your event official with graphics and social
                                    links.</p>
                            </div>
                        </Col>
                        <Col xs={24} xl={6}>
                            <div className="text-center">
                                <img className="eventIcon" style={{marginLeft: 'auto', marginRight: 'auto'}}
                                     src={createEvent} alt="create event"/>
                                <h5>Create Event</h5>
                                <p style={{fontSize: '14px'}}>Publish your event and let attendees RSVP. Use our mobile app to handle QR based
                                    ticket verification at the door.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div style={styles.featured}>
                <div className="container">
                    <Row gutter={18}>
                        <Col span={24}>
                            <h1 className="event-heading text-center">Trending Events</h1>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Afrochella2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmabEv5TrZAkmsamBxMZnJGeP6G35cQupt9bQN5SsNF3Na")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <Row gutter={18}>
                                                    <Col xl={24}>
                                                        <div className="pl-3 pt-4 pb-3"><span
                                                            className="rbs">7000 attending</span></div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Afrochella 2022</div>
                                                <div className="promo-card-data">Jul 20 | 10:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/BurningMan2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmNdxQY91wsRrBSTonYHD1vUHkYSYYmAW3qdMJw5GpP67Q")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>BurningMan 2022</div>
                                                <div className="promo-card-data">Jun 20 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>

                        <Col xs={24} xl={8}>
                            <NavLink to="/Coachella2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmRwANXooxciWkhSVu9kDUXtGReiouhH82t3AjRetzhrjc")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Coachella 2022</div>
                                                <div className="promo-card-data">May 21 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Felabration2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmPm1EiKRAXk5tw9psiV5PT5JctuUvkUJ3E71qopYQCmUx")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">2000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Felabration 2022</div>
                                                <div className="promo-card-data">May 21 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/Lollapalooza2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmbFXK7EX41sAGD9ht3UzjJDA3uCAqa4rW6oM1YfpRidL2")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">1000 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>Lollapalooza 2022</div>
                                                <div className="promo-card-data">May 31 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={24} xl={8}>
                            <NavLink to="/SXSW2022">
                                <div className="ctwfvf">
                                    <div className="promo-card"
                                         style={{backgroundImage: 'url("https://gateway.pinata.cloud/ipfs/QmU11ReSVkm3BhQ6dFxwVm94Q4Xhtr6vK1E2mmaeQ1inGg")'}}>
                                        <div className="ipOYyo">
                                            <div className="kkypd">
                                                <div className="">
                                                    <Row gutter={18}>
                                                        <Col xl={24}>
                                                            <div className="pl-3 pt-4"><span
                                                                className="rbs">5500 attending</span></div>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="jGmHuk">
                                            <div className="promo-card-title">
                                                <div>SXSW 2022</div>
                                                <div className="promo-card-data">Aug 10 | 9:30 PM EST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </div>



        </div>
    );
}

export default Home;
