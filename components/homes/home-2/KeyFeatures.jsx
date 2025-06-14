import { features2 } from "@/data/features";
import Link from "next/link";
import React from "react";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-secondary dark:bg-gray-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto">
                Bringing Solar Energy to Every Corner of the Island
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70" style={{ textAlign: "center" }}>
                We are proud to announce that vivid Vision (Pvt) Ltd is a top class solar installation and servicing company with over 6 years of experience in the solar industry in Sri Lanka. The highest award we have received in the solar industry is the trust of our customers. Our unmatched after-sales service, which has remained unchanged for years, is the main of company Strength. You can get solar hot water systems, CCTV, security systems, solar lights, solar system service, accessories etc. from our company to suit the various needs of our customers.
              </p>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features2.map((feature, index) => (
                    <div key={index}>
                      <div
                        className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all ${feature.backgroundColor}`}
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-2 h-100">
                            <div className="cstack w-96px h-96px rounded-circle mt-2  dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                              <span className="h1"> {feature.number}</span>
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/page-features`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>Discover all features</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
