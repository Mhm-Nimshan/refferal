import AnswerQuestion from '@/src/common/answer-question';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img from "../../../../public/assets/img/faq/faq-1.png" 

const faq_content = {
    sub_title: "Even better, your friends will earn $3 too!",
    title: <>How it Works</>,
    description: <>You've received credit, and now it's time to share the love with your friends and family. It's easier than you think! Follow these simple steps to participate in Amez Cloud’s<br/> <strong>Refer-a-Friend</strong> program and earn a $3 referral reward. When your friends or family activate their Amez Wallet with AmezCare Plus Supremium using your referral code, you both reap the benefits.</>,
    btn_text: "Refer Now",
}
const {sub_title, title, description, btn_text }  = faq_content

const FaqArea = ({style_service}) => {
    return (
        <>
            <div className="tp-faq-area pt-80 pb-20 fix">
               <div className="container">
                  <div className="row"> 
                     <div className={`col-xl-6 col-lg-6 ${style_service && "wow tpfadeLeft"}`} 
                        data-wow-duration={style_service && ".9s"} 
                        data-wow-delay={style_service && ".4s"}>
                        <div className="tp-faq-left-wrapper p-relative">
                           <div className={`tp-faq-section-box ${style_service && "tp-inner-font tp-inner-faq-box"} pb-20`}>
                              <h4 className={`${style_service ? "inner-section-subtitle" : "tp-section-subtitle-2"}`}>{sub_title}</h4>
                              <h3 className={`${style_service ? "tp-section-title" : "tp-section-title-lg"}`}>{title}</h3>
                              <p>{description}</p>
                           </div>
                           <div className="tp-faq-btn">
                              <Link className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn-green"} `} 
                                  href="#">
                                    {btn_text}
                              </Link>
                           </div>
                           <div className="tp-faq-img" data-parallax='{"x": -50, "smoothness": 30}'>
                              <Image src={img} alt="" />
                           </div>
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6">
                        <AnswerQuestion /> 
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default FaqArea;