"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDentistData } from "@/data/dentistData";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useEffect, useState } from "react";

export const SlideTeam = () => {
   const [slidesPerView, setSlidesPerView] = useState(3);
   const dentistData = useDentistData;

   useEffect(() => {
      function checkMobileWidth() {
         window.innerWidth < 900 ? setSlidesPerView(1) : setSlidesPerView(3)
      }
      checkMobileWidth();
      window.addEventListener('resize', checkMobileWidth)
      return () => {
         window.removeEventListener('resize', checkMobileWidth)
      }
   }, []);

   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         slidesPerView={slidesPerView}
         pagination={{ clickable: true }}
         navigation
         spaceBetween={0}
      >
         {dentistData.map((item) => (
            <SwiperSlide key={item.id}>
               <div className="dentist-slide">
                  <div className="dentist">
                     <div className="dentist-image-area">
                        <img src={`./dentist/${item.image}`} alt={"imagem do " + item.name} />
                        <div className="dentist-social-medias">
                           <div className="sm-box"><Facebook /></div>
                           <div className="sm-box"><Instagram /></div>
                           <div className="sm-box"><Twitter /></div>
                        </div>
                     </div>
                     <p className="dentist-name">Dr. {item.name}</p>
                     <p className="dentist-role">{item.role}</p>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}