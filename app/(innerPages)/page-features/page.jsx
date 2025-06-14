import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/features/Hero";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
import Brands2 from "@/components/common/Brands2";
import Footer1 from "@/components/footers/Footer1";
import Insurance from "@/components/common/Insurance";
import SupervisedBy from "@/components/common/SupervisedBy";
export const metadata = {
  title:
    "Services | Vivid Vision",
  description:
    "A Solar Company in Sri Lanka | Services",
};
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <BrandsList />
          <InsuranceList />
          <SupervisorList />
          {/*  <KeyFeatures />  */}
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
          {/*<Testimonials />*/}
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}


function BrandsList() {
  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
        <h5
          className="h5 sm:h2 text-center mb-4 sm:mb-6 xl:mb-8"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
        >
          Trusted by brands
        </h5>
        <div
          className="block-panel panel"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
        >
          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
            <Brands2 />
          </div>
        </div>
      </div>
    </div>
  )
}


function InsuranceList() {
  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden"
    >
      <div className="section-outer panel pb-8 sm:pb-9 xl:py-9">
        <h5
          className="h5 sm:h2 text-center mb-4 sm:mb-6 xl:mb-8"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
        >
          Our Insurance Partner
        </h5>
        <div
          className="block-panel panel"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
        >
          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
            <Insurance />
          </div>
        </div>
      </div>
    </div>
  )
}



function SupervisorList() {
  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden"
    >
      <div className="section-outer panel pb-8 sm:pb-9 xl:py-9">
        <h5
          className="h5 sm:h2 text-center mb-4 sm:mb-6 xl:mb-8"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
        >
          Supervised By
        </h5>
        <div
          className="block-panel panel"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
        >
          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
            <SupervisedBy />
          </div>
        </div>
      </div>
    </div>
  )
}
