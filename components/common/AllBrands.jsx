"use client"
import { brands } from "@/data/brands";
import Image from "next/image";

export const AllBrands = () => {
  return (

    <div
      id="main_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel  items-center gap-2 xl:gap-5 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              {brands.map((brand, index) => (
                <Image
                  className="brand-item-image h-40px image-filter"
                  src={brand.src}
                  width={165}
                  height={48}
                  alt={brand.alt}
                  style={{ marginTop: "50px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
