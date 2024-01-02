import ScrollToTop from "@/src/hooks/scroll-to-top";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import CounterArea from "./counter-area";
import CtaArea from "./cta-area";
import Footer from "@/src/layout/footers/footer";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import SalesArea from "./sales-area";
import Brand from "./brand";
import BusinessBox from "./business-box";
import WorksArea from "./work-area";
import ContactInner from "./contact-inner";
import OfficeLocation from "./office-location";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix">
      <HeroSlider />
      <PaymentArea />
      <WorksArea />
      <CounterArea />
      <FeatureArea />
      <SalesArea />
      <Brand />
      <OpenAccountArea />
      <AboutArea />
      <BusinessBox />
      <ContactInner />
      <OfficeLocation />
      <CtaArea />
      </main> 
      <Footer />
      <ScrollToTop />
      </div>
      </div>
    </>
  );
};

export default HomeOne;
