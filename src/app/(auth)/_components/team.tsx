"use client"
import { SlideTeam } from "@/components/teamSlide";

export const Team = () => {

   return (
      <section id="team">
         <div className="team-container">
            <h2 className="section-id"><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />Time</h2>
            <h1 className="section-title">Nosso <span>time</span> de dentistas</h1>
            <div className="team-list">
               <SlideTeam/>
            </div>
         </div>
      </section>
   )
}