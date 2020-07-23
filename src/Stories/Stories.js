import React, {Component} from "react";
import './Stories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';


class Stories extends Component{

    render() {
        return <>

            <div className="stories">
                <div className="container">

                    <div className="col-md-8 mx-auto bg-white">
                        <Swiper
                                spaceBetween={5}
                                slidesPerView={10}
                                slidesPerGroup={2}

                                onSlideChange={() => console.log('slide change')}
                        >

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile1.jpg" alt="profile"/>
                                        <p>profile profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile2.jpeg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile3.jpg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile4.png" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile1.jpg" alt="profile"/>
                                        <p>profile profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile2.jpeg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile3.jpg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile4.png" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile1.jpg" alt="profile"/>
                                        <p>profile profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile2.jpeg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile3.jpg" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="story">
                                        <img src="/images/profile4.png" alt="profile"/>
                                        <p>profile</p>
                                    </div>
                                </SwiperSlide>
                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile1.jpg" alt="profile"/>
                                    <p>profile profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile2.jpeg" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile3.jpg" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile4.png" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile1.jpg" alt="profile"/>
                                    <p>profile profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile2.jpeg" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile3.jpg" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="story">
                                    <img src="/images/profile4.png" alt="profile"/>
                                    <p>profile</p>
                                </div>
                            </SwiperSlide>

                            </Swiper>



                        </div>
                    </div>
                </div>


        </>;
    }
}export default Stories;