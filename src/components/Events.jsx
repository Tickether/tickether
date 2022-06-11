import React from "react";
import {Col, Row, Select} from "antd";

function Events() {
    const {Option} = Select;
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div style={{marginTop: '2rem'}}>

            <div>
                <div className="container">
                    <Row gutter={18}>
                        <Col span={24}>
                            <h2 className="event-heading text-center mb-3">Explore Events</h2>
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
                                             src="https://gateway.pinata.cloud/ipfs/QmNdxQY91wsRrBSTonYHD1vUHkYSYYmAW3qdMJw5GpP67Q"
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

export default Events;
