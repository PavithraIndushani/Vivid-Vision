import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-1 md:child-cols col-match g-1">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          className="w-64px text-primary"
                          alt="Lexend"
                          src="/logo.png"
                          width="100"
                          height="100"
                        />
                      </Link>
                      <p>
                        Vivid Vision Energy(PVT) LTD is a leading provider of innovative solar energy solutions and advanced security systems in Sri Lanka. Join us on the journey towards a sustainable and secure future with our trusted expertise and commitment to excellence.
                      </p>

                      <p style={{ fontWeight: "bold" }}>
                        Address:
                      </p>
                      <span>
                        No 554A 1/1, 2nd Kurana, Negombo-Colombo Main Rd, Negombo.
                      </span>
                      <p style={{ fontWeight: "bold" }}>
                        Tel:
                      </p>
                      <a href="tel:+94776175115">
                        +94 77 617 5115
                      </a>
                      <a href="tel:+94312226392">
                        +94 31 222 6392
                      </a>

                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div className="w-fit" key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links?.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  Vivid Vision © 2024, All rights reserved.
                </p>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
