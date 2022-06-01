import React, {useState} from "react";
import {Card, Col, Row, Image, Tooltip, Modal, Input, Alert, Spin, Button} from "antd";
import { ethers,BigNumber} from "ethers";

import ticketjson from '../Afrochella_2022.json'

const ticketAddress = '0x19f33806B904cBdf2cfe78d4b3bbe5653EbE6A74';

function Afrochella() {
    const [accounts, setAccounts] = useState([]);

    const isConnected = Boolean(accounts[0]);
    const [mintAmount, setMintAmount] = useState(1);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            console.log(signer,'signer');
            const contract = new ethers.Contract(
                ticketAddress,
                ticketjson.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.015 * mintAmount).toString())
                });
                alert('Ticket purchased successfully');
                console.log('response: ', response)
            } catch (err) {
                alert(err)
                console.log('error', err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    }

    return (
        <div className="event-detail-bg">
            <div className="container">
                <Row>
                    <Col span={12}>
                        {isConnected ? (
                            <div margin='0 15px'>Connected</div>
                        ) : (
                            <Button
                                backgroundColor='#D6517D'
                                borderRadius='5px'
                                color='white'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                margin='0 15px'
                                onClick={connectAccount}>Connect
                            </Button>
                        )}
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={12}>
                        <div className="card-content-data">
                            <p className="event-detail-date">21st May 2022</p>
                            <h1 className="event-detail-heading">Afrochella 2022</h1>
                            <p className="event-desc">Afrochella is a celebration of Africa's diverse culture and the vibrant work of African creatives and entrepreneurs.</p>
                            <div className="event-detail-price">ETH 0.015</div>
                        </div>
                        <div style={{width: '80%'}}>
                            {isConnected ? (
                                <div>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <Button
                                            onClick={handleDecrement}>-
                                        </Button>
                                        <Input
                                            readOnly
                                            style={{textAlign: 'center'}}
                                            type='number'
                                            value={mintAmount}/>
                                        <Button
                                            onClick={handleIncrement}>+
                                        </Button>
                                    </div>
                                    <Button type="dark" onClick={handleMint}
                                            style={{
                                                background: "#000",
                                                color: "white",
                                                fontSize: '14px',
                                                height: '60px',
                                                marginTop:'10px'
                                            }} block>
                                        MINT TICKETS
                                    </Button>
                                </div>
                            ) : (
                                <Button type="dark" onClick={connectAccount}
                                        style={{background: "#000", color: "white", fontSize: '14px', height: '60px'}}
                                        block>
                                    BUY TICKETS
                                </Button>
                            )}

                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <img alt="example" className="img-event-detail"
                                 src="https://gateway.pinata.cloud/ipfs/QmabEv5TrZAkmsamBxMZnJGeP6G35cQupt9bQN5SsNF3Na"/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{marginTop: '50px', borderTop: '1px solid #ccb7b1'}}></div>
                    </Col>
                    <Col span={12}>
                        <div className="event-info">
                            <h6 className="event-info-title">Venue</h6>
                            <div className="event-info-venue">Online Platforms</div>
                            <a href="https://www.google.com/maps/search/?api=1&amp;query=Online%20platforms"
                               target="_blank" className="event-info-link">
                                <svg fill="none" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="event-info-icon">
                                    <g data-v-8d3d1486="" clipPath="url(#clip0)">
                                        <path
                                            d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
                                            stroke="#F5A623" strokeLinecap="round" strokeLineJoin="round"
                                            strokeWidth="2"></path>
                                        <path d="M6 1.5V13.5" stroke="#F5A623" stroke-linecap="round"
                                              strokeLineJoin="round" strokeWidth="2"></path>
                                        <path d="M12 4.5V16.5" stroke="#F5A623"
                                              strokeLinecap="round" strokeLineJoin="round" strokeWidth="2"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect fill="white" height="18" width="18"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span data-v-8d3d1486="" className="event-location-text">View map for directions</span></a>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="event-info">
                            <h6 className="event-info-title">DATE AND TIME</h6>
                            <div className="event-info-venue">22nd May 2022, 8:24 pm</div>
                            <div className="event-details-socials">
                                <a href="http://www.facebook.com/https://www.facebook.com/Unitedforinnovationanddevelopment.GH/"
                                   target="_blank" title="Facebook" className="social-icon">
                                    <svg data-v-8d3d1486="" xmlns="http://www.w3.org/2000/svg" width="96" height="96"
                                         viewBox="0 0 96.1 96.1">
                                        <path data-v-8d3d1486=""
                                              d="M72.1 0L59.6 0C45.6 0 36.6 9.3 36.6 23.7v10.9H24c-1.1 0-2 0.9-2 2v15.8c0 1.1 0.9 2 2 2h12.5v39.9c0 1.1 0.9 2 2 2h16.4c1.1 0 2-0.9 2-2V54.3h14.7c1.1 0 2-0.9 2-2l0-15.8c0-0.5-0.2-1-0.6-1.4 -0.4-0.4-0.9-0.6-1.4-0.6H56.8v-9.2c0-4.4 1.1-6.7 6.8-6.7l8.4 0c1.1 0 2-0.9 2-2V2C74 0.9 73.2 0 72.1 0z"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/https://pbs.twimg.com/profile_images/1425667475379720192/adOTdvcJ.jpg"
                                   target="_blank" title="Twitter" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M512 97.2c-19 8.4-39.3 13.9-60.5 16.6 21.8-13 38.4-33.4 46.2-58 -20.3 12.1-42.7 20.6-66.6 25.4C411.9 60.7 384.4 48 354.5 48c-58.1 0-104.9 47.2-104.9 105 0 8.3 0.7 16.3 2.4 23.9 -87.3-4.3-164.5-46.1-216.4-109.8 -9.1 15.7-14.4 33.7-14.4 53.1 0 36.4 18.7 68.6 46.6 87.2 -16.9-0.3-33.4-5.2-47.4-12.9 0 0.3 0 0.7 0 1.2 0 51 36.4 93.4 84.1 103.1 -8.5 2.3-17.9 3.5-27.5 3.5 -6.7 0-13.5-0.4-19.9-1.8 13.6 41.6 52.2 72.1 98.1 73.1 -35.7 27.9-81.1 44.8-130.1 44.8 -8.6 0-16.9-0.4-25.1-1.4C46.5 446.9 101.6 464 161 464c193.2 0 298.8-160 298.8-298.7 0-4.6-0.2-9.1-0.4-13.6C480.2 137 497.7 118.5 512 97.2z"></path>
                                    </svg>
                                </a>
                                <a href="http://" target="_blank" title="Website"
                                   className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zM172.8 49.5c-15.4 21-26.9 45.9-35.1 70.4 -14.9-5.3-28.7-11.7-41.1-19.1C118 78.8 143.9 61.2 172.8 49.5zM74.9 126.7c16 10 34 18.5 53.7 25.3 -6.5 27.3-10.3 56.8-11.4 87.3H34C37.1 197.5 51.8 158.9 74.9 126.7zM74.9 385.3c-23.1-32.2-37.8-70.8-40.9-112.6h83.1c1 30.5 4.9 60 11.4 87.3C108.9 366.8 90.9 375.3 74.9 385.3zM96.6 411.2c12.4-7.4 26.2-13.7 41.1-19.1 8.2 24.4 19.7 49.3 35.1 70.4C143.9 450.8 118 433.2 96.6 411.2zM239.3 475.5c-34.5-12.7-57.7-58-69.6-92.9 21.8-5.2 45.3-8.4 69.6-9.4V475.5zM239.3 339.8c-27.4 1.1-53.9 4.7-78.7 10.7 -5.6-24.3-9-50.6-10-77.8h88.7V339.8zM239.3 239.3h-88.7c1-27.3 4.4-53.5 10-77.8 24.8 6 51.3 9.7 78.7 10.7V239.3zM239.3 138.8c-24.3-1-47.8-4.2-69.6-9.4 11.9-34.9 35.1-80.2 69.6-92.9V138.8zM437.1 126.7c23.1 32.2 37.8 70.8 40.9 112.6h-83.1c-1-30.5-4.9-59.9-11.4-87.3C403.1 145.2 421.1 136.7 437.1 126.7zM415.4 100.8c-12.4 7.4-26.2 13.7-41.1 19.1 -8.2-24.4-19.7-49.3-35.1-70.4C368.1 61.2 394 78.8 415.4 100.8zM272.7 36.5c34.5 12.7 57.7 58 69.6 92.9 -21.8 5.2-45.3 8.4-69.6 9.4V36.5zM272.7 172.2c27.4-1.1 53.9-4.7 78.7-10.7 5.6 24.3 9 50.6 10 77.8h-88.7V172.2zM272.7 272.6h88.7c-1 27.3-4.4 53.6-10 78 -24.8-6-51.3-9.7-78.7-10.7V272.6zM272.7 475.5V373.2c24.3 1 47.8 4.2 69.6 9.4C330.4 417.5 307.2 462.9 272.7 475.5zM339.2 462.5c15.4-21 26.9-45.9 35.1-70.4 14.9 5.3 28.7 11.7 41.1 19.1C394 433.2 368.1 450.8 339.2 462.5zM437.1 385.3c-16-10-34-18.5-53.6-25.3 6.5-27.3 10.3-56.9 11.4-87.4h83.1C474.9 314.4 460.2 353.1 437.1 385.3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

        </div>
    );
}

export default Afrochella;
