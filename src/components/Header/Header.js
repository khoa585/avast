import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css';
function Header(props) {
    const menu = ['Trang Chủ', 'Giới Thiệu', 'Sản Phẩm', 'Ý Kiến Chuyên Gia', 'Tin Tức', 'Liên Hệ']
    const [state, setstate] = useState('Trang Chủ')
    const activeMenu = (item) => {
        setstate(item)
    }
    return (
        <header id="site-header" className="header_topBar">
            <Container>
                <Row className="header">
                    <Col lg={3}>
                        <div id="site-logo" className="clearFix">
                            <div id="site-logo-inner">
                                <a href=" " title="Logo" className="main-logo">
                                    <img src="../img/logo.png" alt="Logo" className="img-fluid logo" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="wrap_nav">
                            <nav id="main-nav" className="main-nav">
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menu.map((item, index) => {
                                            return <li key={index} onClick={() => activeMenu(item)} className={`menu-item ${state === item ? 'active' : ''} `}>
                                                <span>{item}</span>
                                            </li>
                                        })
                                    }
                                    <li className="menu-item "><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;