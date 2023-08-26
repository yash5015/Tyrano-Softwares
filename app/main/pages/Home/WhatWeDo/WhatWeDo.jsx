import Image from "next/image";
import React from "react";
import "./WhatWeDo.css";
import WhatWeDoImg from "../../../../../public/assets/images/WhatweDo.png";
const WhatWeDo = () => {
  const steps = [
    {
      stepNo: 1,
      stepName: "First On Field",
      stepDesc:
        "Our company is always first on the field, delivering cutting-edge solutions and unparalleled service to our clients.",
    },
    {
      stepNo: 2,
      stepName: "Easy To Reach",
      stepDesc:
        "Our company is easy to reach, providing accessible and responsive support to our clients whenever they need it.",
    },
    {
      stepNo: 3,
      stepName: "24/7 Support",
      stepDesc:
        "Our company offers 24/7 support to ensure uninterrupted operations for our clients.",
    },
  ];
  return (
    <div className="WhatwedoContainer">
      <div className="boxes">
        <div className="bigBox"></div>
        <div className="smallBox"></div>
      </div>
      <h3 className="sectionH">WHAT WE DO</h3>
      <div className="detailsAndPhoto">
        <div className="details">
          <h1 className="detHeading">Custom IT Solutions For Your Business</h1>
          <p className="offerSummary">
            We offer customized IT solutions to help your business thrive in the
            digital age, with cutting-edge technology and exceptional customer
            support.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
        <div className="photo">
          <Image src={WhatWeDoImg} alt="What We Do Image"></Image>
        </div>
      </div>

      <div className="trust">
        <h2>TRUSTED BY WORLDWIDE CLIENTS</h2>
        <div className="trustContainer">
          {steps.map((item, id) => (
            <div key={id} className="trustStep">
              <div className="stepNo">
                <p className="stepNo">0{item.stepNo}</p>
              </div>
              <div className="HoriSeperator"></div>
              <div className="stepName">
                <h2 className="stepName">{item.stepName}</h2>
                <p className="stepDesc">{item.stepDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
