import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import LineShape from '@/src/svg/line-shape';
import { gsap } from 'gsap';
import useCharAnimation from '@/src/hooks/useCharAnimation';

// images import 
import  shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";

// hero content data
const hero_content = {
    hero_shape: [

        {
            id: 2,
            cls: "tp-hero-shape-2",
            img: shape_2,
        },
    ],
    hero_title: <><span className='tp_title'><span className='child'>Refer Amez Wallet and Earn</span></span> <br />Upto $30 Every Day!</>,
    sub_title: <>Introducing Amez Refer-a-Friend Program<br/>Share your personalized code, and when friends activate their Amez Wallet with AmezCare Plus Supremium, both you and they receive instant $3 rewards! Track your earnings in the Amez Wallet Transaction History. Join now and start earning together!</>,
    hero_shape_img: [

    ],
    hero_thumbs: [


    ],
    
}
const { 
    hero_shape,
    hero_title,
    sub_title,
    hero_shape_img, 
    hero_thumbs, 
} = hero_content;



const HeroSlider = () => {

    let hero_bg = useRef(null);

    useEffect(() => {
        gsap.from(hero_bg.current, {
            opacity: 0,
            scale: 1.2,
            duration: 1.5
        });
        gsap.to(hero_bg.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5
        })
    }, []);


    useCharAnimation('.tp-hero__hero-title span.child');

    return (
        <>
            <div className="tp-hero__area tp-hero__pl-pr">
                <div className="tp-hero__bg p-relative">
                    <div className="tp-hero-bg tp-hero-bg-single" ref={hero_bg} >

                    </div>
                    <div className="tp-hero-shape">
                        {hero_shape.map((item, i) =>
                            <Image 
                            // style={{width: "auto", height: "auto"}} 
                            key={i} className={item.cls} src={item.img} alt="amez-image" />
                        )}
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-hero__content-box text-center z-index-3">
                                    <div className="tp-hero__title-box p-relative">
                                        <h2 className="tp-hero__hero-title tp-title-anim">
                                            {hero_title}
                                        </h2>
                                        <div className="tp-hero__title-shape d-none d-sm-block">
                                            <LineShape />
                                        </div>
                                    </div>
                                   
                                    <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">{sub_title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSlider;