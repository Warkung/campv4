"use client";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LandmarkCardProps } from "@/utils/types";

import Image from "next/image";
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
            <SwiperSlide key={landmark.id} className="max-w-5xl group">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-102 h-36 sm:h-48 md:h-64 lg:h-96">
                <Image
                  src={landmark.image}
                  alt={landmark.name}
                  fill
                  sizes="100vw"
                  className="object-cover brightness-50"
                  priority
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
