"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands2() {
  const swiperOptions = {
    slidesPerView: 2, // items: 2
    centeredSlides: true, // center: true
    centeredSlidesBounds: true, // center-bounds: true
    breakpoints: {
      // data-uc-swiper-s
      768: {
        slidesPerView: 3, // items: 4
        centeredSlides: false, // center: false
        centeredSlidesBounds: false, // center-bounds: false
      },
      // data-uc-swiper-m
      1024: {
        slidesPerView: 3, // items: 5
        spaceBetween: 80, // gap: 80
      },
    },
  };

  return (
    <Swiper {...swiperOptions} autoplay={true}>
      {brands.map((brand, index) => (
        <SwiperSlide
          className="brand-item swiper-slide text-center"
          key={index}
        >
          <Image
            className="brand-item-image h-150px image-filter"
            src={`https://drive.google.com/uc?export=view&id=${brand.src}`}
            width={300}
            height={300}
            alt={brand.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>


  );
}
