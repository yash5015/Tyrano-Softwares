import Image from "next/image";
import React, { useState } from "react";
import "./Services.css";
import WebLogo from "../../../../../public/assets/images/Services/WebDev.png";
import AppLogo from "../../../../../public/assets/images/Services/AppDev.png";
import GraphicsLogo from "../../../../../public/assets/images/Services/GraphicDes.png";
import GameLogo from "../../../../../public/assets/images/Services/GameDev.png";
import SEOLogo from "../../../../../public/assets/images/Services/SEO.png";
import QALogo from "../../../../../public/assets/images/Services/QA.png";
import WebDev from "../../../../../public/assets/images/ServiceDescription/WebDev.png";
import AppDev from "../../../../../public/assets/images/ServiceDescription/AppDev.png";
import GraphicDes from "../../../../../public/assets/images/ServiceDescription/GraphicDes.png";
import GameDev from "../../../../../public/assets/images/ServiceDescription/GameDev.png";
import SEO from "../../../../../public/assets/images/ServiceDescription/SEO.png";
import QA from "../../../../../public/assets/images/ServiceDescription/QA.png";

const services = [
  {
    id: 0,
    image: WebLogo,
    serviceType: "Web Development",
  },
  {
    id: 1,
    image: AppLogo,
    serviceType: "App Development",
  },
  {
    id: 2,
    image: GraphicsLogo,
    serviceType: "Graphic Designing",
  },
  {
    id: 3,
    image: GameLogo,
    serviceType: "Game Development",
  },
  {
    id: 4,
    image: SEOLogo,
    serviceType: "SEO",
  },
  {
    id: 5,
    image: QALogo,
    serviceType: "Quality Assurance",
  },
];
const serviceDetails = [
  {
    id: 0,
    image: WebDev,
    serviceType: "Website Development",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
  {
    id: 1,
    image: AppDev,
    serviceType: "App Development",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
  {
    id: 2,
    image: GraphicDes,
    serviceType: "Graphic & UI UX",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
  {
    id: 3,
    image: GameDev,
    serviceType: "Game Development",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
  {
    id: 4,
    image: SEO,
    serviceType: "SEO",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
  {
    id: 5,
    image: QA,
    serviceType: "QA",
    sericeDesc:
      "Front-end and Back-end services for the best website performance. Our team use the latest technologies and frameworks to create fast loading and reliable web-projects. <br></br> We offer customized IT solutions to help your business thrive in the digital age, with cutting-edge technology and exceptional customer support.",
  },
];
const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const getServiceDetail = (e, idx) => {
    // console.log(index);
    console.log(e.target.innerText, idx);
    setSelectedService(idx);
  };
  return (
    <div className="WhatwedoContainer">
      <div className="boxes">
        <div className="bigBox"></div>
        <div className="smallBox"></div>
      </div>
      <h3 className="sectionH">SERVICES</h3>
      <div className="servicesContainer">
        <div className="offerService">
          <h2 className="SectionHeading">Services We Offer</h2>
          <p className="offerDesc">
            We offer customized IT solutions to help your business thrive in the
            digital age, with cutting-edge technology and exceptional customer
            support.
          </p>
        </div>
        <div className="serviceBoxesContainer">
          {services.map((item) => (
            <div
              key={item.id}
              className="sBox"
              onClick={(event) => getServiceDetail(event, item.id)}
            >
              <div className="serviceBox">
                <Image
                  // src={item.image}
                  src={item.image}
                  alt={item.serviceType}
                  width={40}
                  height={40}
                />
                <p>{item.serviceType}</p>
              </div>
              <div className="polygon"></div>
            </div>
          ))}
        </div>
        <div className="ServiceDescription">
          {/* {serviceDetails.map((item) => ( */}

          <div className="Servicedetail">
            <div className="image">
              <Image src={serviceDetails[selectedService].image} alt="dev" />
            </div>
            <div className="ServicesDetails">
              <div className="ServicesSrno">
                0{serviceDetails[selectedService].id + 1}
              </div>
              <div className="ServHoriSeperator"></div>
              <div className="serviceDetails">
                <h1 className="serviceName">
                  {serviceDetails[selectedService].serviceType}
                </h1>
                <p className="desc">
                  {serviceDetails[selectedService].sericeDesc}
                </p>

                <div class="ServiceBtnBorder">
                  <div class="ServiceLearnMoreBtn">
                    <p className="ServiceBtnText">Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Services;
