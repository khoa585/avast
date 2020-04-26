import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './style.css'
function MainHome() {
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true
    }

    return (
        <main className="back-front-page">
            <Swiper {...params}>
                <div className="swiper-slide">
                    <div className="gallery-item">
                        <div className="img-content">
                        </div>
                        <div className="text-wrapper">
                            <div className="text-box"></div>
                            <div className="text-wrap-box">
                                <div className="text-wrap-context">
                                    <h4 className="titleWow ">New, Bigger Sizes!</h4>
                                    <p>Enjoy our bestselling body and hair staples,<br></br> now available in a a family friendly 32 or size</p>
                                    <button className="btn btn_">xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="gallery-item">
                        <div className="img-content">
                        </div>
                        <div className="text-wrapper">
                            <div className="text-box"></div>
                            <div className="text-wrap-box">
                                <div>
                                    <h4 className="titleWow ">New, Bigger Sizes!</h4>
                                    <p>Enjoy our bestselling body and hair staples,<br></br> now available in a a family friendly 32 or size</p>
                                    <button className="btn btn_">xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>
        </main>
    );
}

export default MainHome;