import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from "swiper/element-bundle";

export const Team = () => {
   register();

   return (
      <section id="team">
         <div className="container-col">
            <h2 className="section-id"><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />Diferenciais</h2>
            <h1 className="section-title">Nosso <span>time</span></h1>
            <div className="team-list">
               <div className="dentist">
                  <div className="dentist-image-area">
                     <img src="./dentist/dentist-1.png" alt="" />
                  </div>
                  <p className="dentist-name">Dr. Jorge Cabral</p>
                  <p className="dentist-role">Dentista líder</p>
               </div>
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
               >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  ...
               </Swiper>
            </div>
         </div>
      </section>
   )
}