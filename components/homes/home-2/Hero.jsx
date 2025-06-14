"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

import useIsScreenWidthLessThan from "../../hooks/screen-size-less-than"

export default function Hero() {
  const isScreenLess = useIsScreenWidthLessThan(1400)
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10  dark:bg-gray-900" style={isScreenLess ? {} : { "display": "flex", "flexDirection": "row" }} >
        {
          isScreenLess ? "" :
            <video src="/assets/videos/solar.mp4" style={isScreenLess ? {} : { width: "100%", height: "100%", "brightness": "brightness(.1)" }} muted autoPlay loop />
        }
        <div className="container max-w-xl" style={isScreenLess ? {} : { "position": "absolute", marginLeft: "25%" }}>
          <div className="section-inner panel py-4">
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0">
              <div className="col-12 sm:col-9 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <span className="fs-6 fw-bold text-primary dark:text-secondary">
                  </span>
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2" style={isScreenLess ? {} : { width: "125%", color: "white", marginTop: "40%" }}>
                    Empowering a sustainable future through innovative solutions
                  </h1>
                  <p className="fs-6 sm:fs-5 dark:text-white text-opacity-70" style={isScreenLess ? { textAlign: "start" } : { width: "150%", color: "white" }}>
                    Celebrating the Power of the Sun in Sri Lanka. Vivid vision Solar brings cutting-edge solar solutions to brighten homes, businesses, and communities across the nation. Harnessing renewable energy to illuminate the future, we're committed to sustainability, innovation, and a brighter tomorrow for all.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`tel:+94776175115`}
                        className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                      >
                        Contact
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 lg:col-6 xl:col-7">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden"></div>
                </div>
              </div>
            </div>
            <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
