"use client"
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRatingData } from "@/data/ratingData";

export const RatingSlide = () => {
   const ratingData = useRatingData;

   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         slidesPerView={1}
         pagination={{ clickable: true }}
         navigation
         spaceBetween={0}
      >
         {ratingData.map((item) => (
            <SwiperSlide key={item.id} >
               <div className="rating">
                  <Quote className="quote" />
                  <p className="rating-text">"{item.assessment}"</p>
                  <div className="rating-person">
                     <img src={`./rating/${item.img}`} alt="rating-1" />
                     <div className="rating-person-infos">
                        <div className="rating-person-infos-top">
                           <div className="rating-star-div">
                              <p className="rating-name">{item.name}</p>
                              <Star className="star" />
                              <span>{item.stars.toString()}</span>
                           </div>
                        </div>
                        <div className="rating-profession">{item.profession}</div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}