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

function Events() {
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

            <div style={styles.featured}>
                <div className="container">
                    <Row gutter={18}>
                        <Col span={24}>
                            <h1 className="event-heading text-center">Featured Events</h1>
                        </Col>
                        <Col xs={24} xl={8}>
                            <div className="card" style="width: 18rem;">
                                <img src="https://gateway.pinata.cloud/ipfs/QmNdxQY91wsRrBSTonYHD1vUHkYSYYmAW3qdMJw5GpP67Q" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>





        </div>
    );
}

export default Events;
