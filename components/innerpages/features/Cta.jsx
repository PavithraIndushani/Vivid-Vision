import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-4 sm:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
            <div className="vstack gap-2 max-w-550px items-center lg:items-start m-auto lg:m-0 text-center lg:text-start rtl:lg:text-end">
              <h2 className="h3 sm:h1 m-0">
                For further inquiries please contact
              </h2>
              <div className="vstack sm:hstack justify-center lg:justify-start gap-1 lg:gap-2 mt-1 lg:mt-2">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="position-absolute top-50 ltr:end-0 rtl:start-0 translate-middle-y z-1 ltr:me-8 rtl:ms-8 d-none lg:d-block">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
