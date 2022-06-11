import React from "react";
import {Button, Col, Row} from "antd";

import {ArrowRightOutlined} from "@ant-design/icons";

const styles={
    subLinks:{
        color: '#777e90',
        fontSize: '12px',
        fontWeight: '500'
    },
}
function Footer() {
    return (
        <div style={{borderTop: '1px solid #e6e8ec',marginTop:'5rem'}}>
            <div className="container">
                <Row gutter={18} style={{padding: '80px 0 48px', borderBottom: '1px solid #e6e8ec'}}>
                    <Col xs={24} xl={9}>
                        <img
                            src='https://gateway.pinata.cloud/ipfs/Qmeq9SXKLDnpQDXtyco36Jr6jMSAFj8PBpYBUwJprLtmvt'
                            alt="logo"/>
                    </Col>
                    <Col xs={12} xl={5} className="mt-4 mt-md-0">
                        <h6>Connect</h6>
                        <div className="mt-3" style={styles.subLinks}>Twitter</div>
                        <div className="mt-3" style={styles.subLinks}>Contact</div>
                    </Col>
                    <Col xs={12} xl={5} className="mt-4 mt-md-0">
                        <h6>Info</h6>
                        <div className="mt-3" style={styles.subLinks}>Guides</div>
                        <div className="mt-3" style={styles.subLinks}>FAQ</div>
                    </Col>

                    <Col xs={24} xl={5} className="mt-4 mt-md-0">
                        <h6>Join Newsletter</h6>
                        <div className="mt-2 mb-2" style={styles.subLinks}>Get notified about Tickether 🥳</div>
                        <div>
                            <input className="searchInput" onChange={()=>{}} type="text" name="email" placeholder="Enter your email" required="" value="" />
                            <Button type="primary" className="searchBtn" shape="circle" icon={<ArrowRightOutlined />} />
                        </div>

                    </Col>
                </Row>
                <Row gutter={18} style={{padding: '32px 0'}}>
                    <Col xs={24}>
                        <div style={{fontSize: '12px',color: '#777e90'}}>Copyright © 2022 Tickether. All rights reserved
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Footer;
