"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { LandmarkCardProps } from "@/utils/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

function Hero({ landmarks }: { landmarks: LandmarkCardProps[] }) {
  return (
    <div className="py-8 mb-12">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        autoplay={{
          delay: 2500,
        }}
        scrollbar={{
          hide: true,
        }}
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        navigation={true}
        className="mySwiper"
      >
        {landmarks.map((landmark) => (
          <SwiperSlide key={landmark.id} className="!w-[80vw] max-w-md group">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-105">
              <img
                src={landmark.image}
                alt={landmark.name}
                className="w-full h-36 object-cover brightness-50 sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">{landmark.name}</h3>
                <p className="text-sm">{landmark.province}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
