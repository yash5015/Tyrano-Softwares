import React from "react";
import "./WhyChooseUs.css";
import Image from "next/image";
import LatestTech from "../../../../../public/assets/images/LatestTech.png";
import UniqueSol from "../../../../../public/assets/images/UniqueSol.png";
const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUsContainer">
      <h3 className="sectionH centerAlign">WHY CHOOSE US</h3>

      <h1 className="WhyCustomer">
        Why Our Customers <br></br>Choose Working With Us
      </h1>
      <div className="techSpace">
        <div className="Tech">
          <Image src={LatestTech} alt="Latest Technology" />
          <p>Latest Technologies</p>
        </div>
        <div className="Tech">
          <Image src={UniqueSol} alt="Unique solutions" />
          <p>Unique Solutions</p>
        </div>
        <div className="PowerfulStrategies">
          <p>POWERFUL STRATEGIES</p>
          <p>
            Our company develops powerful strategies that combine technical
            expertise and business acumen to drive growth and success for our
            client
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
