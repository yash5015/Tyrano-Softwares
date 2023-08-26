"use client";

import "../style/Home.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import DevLogo from "../../../public/assets/icons/DevLogo.png";
import GraphicLogo from "../../../public/assets/icons/GraphicLogo.png";
import QALogo from "../../../public/assets/icons/QALogo.png";
import SEOLogo from "../../../public/assets/icons/SEOLogo.png";

import {
  topLeftBox,
  leftHalf,
  leftBB,
  leftBT,
} from "@/public/assets/images/LandingPageBoxes";
import WhatWeDo from "./Home/WhatWeDo/WhatWeDo";
import WhyChooseUs from "./Home/WhyChooseUs/WhyChooseUs";
import Services from "./Home/Services/Services";
import Portfolio from "./Home/Portfolio/Portfolio";
import Testimonial from "./Home/Testimonial/Testimonial";
import BusinessInTouch from "./Home/BusinessInTouch/BusinessInTouch";
import Blogs from "./Home/Blogs/Blogs";
import Contact from "./Home/Contact/Contact";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="landingScreen">
          <div className="navbar">
            <NavBar />
          </div>
          <div className="landingBoxes">
            <Image
              className="topLeftBox"
              src={topLeftBox}
              alt="topLeftBox"
            ></Image>
            <Image
              className="midRightBox"
              src={topLeftBox}
              alt="midRightBox"
            ></Image>
            <Image className="leftHalf" src={leftHalf} alt="leftHalf"></Image>
            <Image className="leftBT" src={leftBT} alt="leftBT"></Image>
            <Image className="leftBB" src={leftBB} alt="leftBB"></Image>

            <Image className="rightBT" src={leftBT} alt="leftBT"></Image>
            <Image className="rightBB1" src={leftBB} alt="leftBB"></Image>
            <Image className="rightBB2" src={leftBB} alt="leftBB"></Image>
            <Image className="rightBB3" src={leftBB} alt="leftBB"></Image>
          </div>
          <div className="landingContent">
            <div className="centerLanding">
              <div className="frontText">
                <p className="ftext">We offer customized</p>
                <p className="itSol">IT Solutions</p>
                <p className="ftext">
                  to help your business thrive in the digital age.
                </p>
              </div>
              <div className="twoButtons">
                <div class="radiusBtn">
                  <div class="LearnMoreBtn">
                    <p className="BtnText">Learn More</p>
                  </div>
                </div>
                <button className="getInTouch BtnText">Get in Touch</button>
              </div>
            </div>
          </div>
          <div className="landingServices">
            <div className="box">
              <Image src={DevLogo} alt="DevLogo" />
              <p>Development</p>
            </div>
            <div className="box">
              <Image src={GraphicLogo} alt="GraphicLogo" />
              <p>Graphic & UI UX</p>
            </div>
            <div className="box">
              <Image src={QALogo} alt="QALogo" />
              <p>Quality Assurance</p>
            </div>
            <div className="box">
              <Image src={SEOLogo} alt="SEOLogo" />
              <p>SEO</p>
            </div>
          </div>
        </div>
      </section>
      <section className="whatWeDo sectionStyle">
        <WhatWeDo />
      </section>
      <section className="whyChooseUs sectionStyle">
        <WhyChooseUs />
      </section>
      <section className="Services sectionStyle">
        <Services />
      </section>
      <section className="Portfolio sectionStyle">
        <Portfolio />
      </section>
      <section className="Testimonial sectionStyle">
        <Testimonial />
      </section>
      <div className="BusinessInTouch sectionStyle">
        <div className="BusinessBoxes">
          <Image
            className="topLeftBox"
            src={topLeftBox}
            alt="topLeftBox"
          ></Image>
          <Image
            className="midRightBox"
            src={topLeftBox}
            alt="midRightBox"
          ></Image>
          <Image className="leftHalf" src={leftHalf} alt="leftHalf"></Image>
          <Image className="leftBT" src={leftBT} alt="leftBT"></Image>
          <Image className="leftBB" src={leftBB} alt="leftBB"></Image>

          <Image className="rightBT" src={leftBT} alt="leftBT"></Image>
          <Image className="rightBB1" src={leftBB} alt="leftBB"></Image>
          <Image className="rightBB2" src={leftBB} alt="leftBB"></Image>
          <Image className="rightBB3" src={leftBB} alt="leftBB"></Image>
        </div>
        <BusinessInTouch />
      </div>
      <section className="Blogs sectionStyle">
        <Blogs />
      </section>
      <section className="Contact sectionStyle">
        <Contact />
      </section>
    </>
  );
};

export default Home;
