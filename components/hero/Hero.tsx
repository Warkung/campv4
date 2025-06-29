"use client";
import React, { Suspense, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LandmarkCardProps } from "@/utils/types";
import { Skeleton } from "../ui/skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import LoadingCardHero from "../card/LoadingCardHero";

function Hero({ landmarks }: { landmarks: LandmarkCardProps[] }) {
  return (
    <Suspense fallback={<LoadingCardHero />}>
      <div className="mb-10">
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
            <SwiperSlide key={landmark.id} className=" max-w-3xl group">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-105">
                <img
                  src={landmark.image}
                  alt={landmark.name}
                  className="w-full h-56 object-cover brightness-50 sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-3 p-4 text-white">
                  <h3 className="text-3xl font-bold">{landmark.name}</h3>
                  <p className="text-sm">{landmark.province}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Suspense>
  );
}
export default Hero;
