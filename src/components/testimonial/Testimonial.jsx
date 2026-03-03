import React from 'react';
import "./testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const Testimonial = () => {



    const data = [
        {
            avater: "/avater1.jpg",
            name: "Dorian Vance",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum cumque blanditiis velit ad sint esse autem dignissimos, nulla a? Expedita natus accusantium sint non illum iusto iure id atque officia."
        },
        {
            avater: "/avater2.jpg",
            name: "Kallie Thorne",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum cumque blanditiis velit ad sint esse autem dignissimos, nulla a? Expedita natus accusantium sint non illum iusto iure id atque officia."
        },
        {
            avater: "/avater3.jpg",
            name: "Silas Sterling",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum cumque blanditiis velit ad sint esse autem dignissimos, nulla a? Expedita natus accusantium sint non illum iusto iure id atque officia."
        },
        {
            avater: "/avater4.jpg",
            name: "Lyra Beaumont",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum cumque blanditiis velit ad sint esse autem dignissimos, nulla a? Expedita natus accusantium sint non illum iusto iure id atque officia."
        },
    ]
    return (
        <>
            <section id='testimonial'>
                <h5>Review from clients</h5>
                <h2>Testimonial</h2>
                <Swiper className="container testimonial__container"
                    spaceBetween={40}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map(({ avater, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client__avater">
                                    <img src={avater} alt="" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </section>
        </>
    )
}

export default Testimonial