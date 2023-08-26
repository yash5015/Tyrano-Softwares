import React from "react";
import "./Blogs.css";
import blogImg from "../../../../../public/assets/images/Blog/Blog.png";
import blogNews from "../../../../../public/assets/images/Blog/blogNews.png";
import arrowRight from "../../../../../public/assets/images/fi_arrow-right.png";
import leftPoly from "../../../../../public/assets/images/LeftPoly.png";
import BlueRightPoly from "../../../../../public/assets/images/BlueRightPoly.png";
import Image from "next/image";
const Blogs = () => {
  return (
    <div className="BlogContainer">
      <div className="boxes">
        <div className="bigBox"></div>
        <div className="smallBox"></div>
      </div>
      <h3 className="sectionH">BLOGS</h3>
      <div className="offerService">
        <h2 className="SectionHeading">Our Latest Insights</h2>
        <div class=" BlogBtnWidth">
          <div class="ServiceLearnMoreBtn">
            <p className="ServiceBtnText">Read All</p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="allBlogs">
          <div className="blog1">
            <Image src={blogImg} alt="blog"></Image>

            <div className="blogContent">
              <div className="blogMain">
                <button className="blogButton">BLOG</button>
                <p className="blogCont">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley...
                </p>
                <button className="getInTouch BlogGradient">
                  <Image src={arrowRight}></Image>
                </button>
              </div>
              <Image className="leftPoly" src={leftPoly} alt="leftPoly" />
            </div>
          </div>
          <div className="blog1">
            <div className="blogContent2">
              <div className="blogMain2">
                <button className="blogButton">BLOG</button>
                <p className="blogCont">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley...
                </p>
                <button className="getInTouch BlogGradient">
                  <Image src={arrowRight}></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blogNews">
          <Image src={blogNews} className="BlogNewsImg" alt="blogNews"></Image>

          <div className="blogNewsContent">
            <div className="blogNewsMain">
              <button className="blogNewsButton">NEWS</button>
              <p className="blogNewsCont">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley...
              </p>
              <button className="getInTouch BlogGradient">
                <Image src={arrowRight}></Image>
              </button>
            </div>
            <Image
              className="BlueRightPoly"
              src={BlueRightPoly}
              alt="BlueRightPoly"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
