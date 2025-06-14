"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel">
        <div
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "40%", left: "20%" }}
          >
          </div>
          <div
            className="position-absolute   rotate-45"
            style={{ bottom: "40%", right: "20%" }}
          >
          </div>
        </div>
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y me-n6">
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">
            <div
              className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Contact Us
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">Have questions or need assistance? Reach out to us anytime, we're here to help
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2"
              >
                <div>
                  <input
                    className="form-control h-48px lg:h-56px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                    type="text"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="col-12 sm:col-auto">
                  <Link
                    href={`/page-contact`}
                    className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                  >
                    Contact
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <hr className="w-100 m-0" />
        </div>
      </div>
    </div>
  );
}
