import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Projects from "@/components/homes/home-2/Blogs";
import Cta from "@/components/homes/home-2/Cta";
import Faq from "@/components/homes/home-2/Faq";
import Features from "@/components/homes/home-2/Features";
import Feedback from "@/components/homes/home-2/Feedback";
import Hero from "@/components/homes/home-2/Hero";
import KeyFeatures from "@/components/homes/home-2/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import React from "react";
import Brands2 from "@/components/common/Brands2";
export const metadata = {
  title:
    "Home 2 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage2() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <KeyFeatures />


          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white mt-4" style={{ paddingTop: "30px", paddingBottom: "100px" }}>
            <Brands2 />
          </div>


          {/*<Pricing />*/}
          <Projects />
          <Feedback />
          <Faq />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
