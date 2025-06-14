import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
import Footer1 from "@/components/footers/Footer1";
export const metadata = {
  title:
    "Vivid Vision | Projects",
  description:
    "Vivid Vision Energy(PVT) LTD is a leading provider of innovative solar energy solutions and advanced security systems in Sri Lanka.",
};
export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Blogs1 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
