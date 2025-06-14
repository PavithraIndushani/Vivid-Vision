import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                About Us
              </h1>
              <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                At Vivid Vision Energy, our team is a dynamic blend of innovative minds united by a shared vision: to redefine the future of sustainable energy. From seasoned engineers to creative designers, each member contributes their expertise to drive our mission forward. Meet the faces shaping tomorrow's energy landscape below.
              </p>
            </div>
            <div className="panel row child-cols-12 col-match g-1 sm:g-2">
              <div className="col-4">
                <figure className="featured-image m-0 rounded ratio ratio-2x3 sm:rounded-2 uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="About image"
                    src="https://images.pexels.com/photos/9875438/pexels-photo-9875438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="1000"
                    height="1500"
                  />
                </figure>
                <div className="position-absolute top-0 start-0 z-1 ms-n8 mt-n8 d-none lg:d-block">
                </div>
              </div>
              <div className="col-8">
                <div className="h-100">
                  <figure className="panel h-100 m-0 rounded sm:rounded-2 overflow-hidden">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="About image"
                      src="https://images.pexels.com/photos/9799762/pexels-photo-9799762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="position-absolute bottom-0 end-0 z-1 me-n8 mb-n8 d-none lg:d-block">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
