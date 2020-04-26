import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'
function Footer(props) {
    return (
        <React.Fragment>
            <div className="footerBottom">
                <div className="footerBottom_imgRight"></div>
                <div className="footerBottom_imgLeft"></div>
                <Container>
                    <div className="footerContent">
                        <h4>công ty cổ phần dược phẩm ant</h4>
                        <span>Hotline: 1900 1886</span>
                    </div>
                    <div className="footerItem">
                        <Row>
                            <Col lg={4}>
                                <div className="footerDres">
                                    <span>Trụ sở: Lô B10/D6 Khu đô thị Cầu Giấy, phường Dịch Vọng, Quận Cầu Giấy, Hà Nội.</span>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="footerDres">
                                    <span>Văn phòng làm việc: Lô A3/D21 Khu đô thị Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội.</span>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="footerDres">
                                    <span>Điện Thoại: (04) 35148042 - Fax: (04) 35148043 E-mail: info@zekang.com</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="footerMenu_">
                    <Container>
                        <Row>
                            <Col lg={8} className="footer-main-nav">
                                <nav id="footer-main-nav">
                                    <ul id="footer-menu-primary-menu" className="footer-menu">
                                        <li className="footer-menu-item footer-Item"><span>Trang Chủ</span></li>
                                        <li className="footer-menu-item "><span>Giới Thiệu</span></li>
                                        <li className="footer-menu-item "><span>Sản Phẩm</span></li>
                                        <li className="footer-menu-item "><span>Ý Kiến Chuyên Gia</span></li>
                                        <li className="footer-menu-item "><span>Tin Tức</span></li>
                                        <li className="footer-menu-item "><span>Liên Hệ</span></li>
                                    </ul>
                                </nav>
                            </Col>
                            <Col lg={4}>
                                <div className="footerMess">
                                <img src="../img/Mess.png" alt="" className="img-fluid " />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;