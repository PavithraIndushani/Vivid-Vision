"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import z from "zod"

const formType = z.object({

})

export default function ContactModal() {
  const router = useRouter()
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  const firstNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const mailString = `mailto:vividvision.lk@gmail.com?subject=Quotation Request&body=Hi,
%0A%
Please find below the details of my request for a quotation:
%0A
Name: ${firstNameRef.current.value}%0A
Phone Number: ${phoneRef.current.value}%0A
Email Address: ${emailRef.current.value}%0A
Message/Requirements:%0A
${messageRef.current.value}
%0A
I look forward to your response. Please let me know if you need additional information.
%0A%0A
Best regards,%0A
      ${firstNameRef.current.value.split(' ')}%0A`

    router.replace(mailString)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeContactModal();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">Request a Quotation</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form
                  onSubmit={handleFormSubmit}
                  className="vstack gap-2"
                >
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      ref={firstNameRef}
                      className="form-control h-48px w-100  bg-white dark:border-white dark:text-dark"
                      type="text"
                      placeholder="Full name*"
                      required
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      ref={emailRef}
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="email"
                      placeholder="Your email*"
                      required
                    />
                    <input
                      ref={phoneRef}
                      className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                      placeholder="Phone number*"
                      pattern="[0-9]+"
                      required
                    />
                  </div>
                  <textarea
                    ref={messageRef}
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    placeholder="Your message.."
                    defaultValue={""}
                  />
                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
