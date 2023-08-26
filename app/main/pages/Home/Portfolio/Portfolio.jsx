import React from "react";
import "./Portfolio.css";
import CountUp from "react-countup";

const countData = [
  {
    id: 0,
    count: 30,
    countType: "Clients",
  },
  {
    id: 1,
    count: 5,
    countType: "projects",
  },
  {
    id: 2,
    count: 100,
    countType: "Lead Conversions",
  },
  {
    id: 3,
    count: 12,
    countType: "Delivered",
  },
];

const Portfolio = () => {
  return (
    <div className="PortfolioContainer">
      <h3 className="sectionH centerAlign">PORTFOLIO</h3>
      <h2 className="SectionHeading centerAlign">Our Latest Case Studies</h2>
      <p className="portfolioDesc toCenter">
        Our portfolio boasts a diverse range of successful projects for clients
        across multiple industries. By leveraging our technical expertise and
        business acumen, we craft customized solutions that meet their unique
        needs and drive measurable results
      </p>

      <div className="crouselContainer"></div>
      <div className="projectsCount">
        <div className="countContainer">
          {countData.map((item) => (
            <div key={item.id} className="CountBox">
              <h1 className="countNo">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={1000}
                  duration={2}
                  end={item.count}
                />{" "}
                <span className="plus">+</span>
              </h1>

              <p className="CountType">{item.countType}</p>
            </div>
          ))}
        </div>
        <div className="statisticsText">
          <p>STATISTICS</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
