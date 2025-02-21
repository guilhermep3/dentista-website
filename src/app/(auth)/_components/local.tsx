import { Button } from "@/components/button";
import { MapLocal } from "@/components/mapLocal";
import { TitleSection } from "@/components/titleSection"
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Local = () => {

   return (
      <section id="local">
         <div className="container">
            <div className="local-left">
               <MapLocal/>
            </div>
            <div className="local-right">
               <TitleSection secId="Localização" title={<>Nossas <span>localizações</span></>} toCenter={false}/>
               <ul className="local-infos">
                  <li>
                     <MapPin/>
                     <p>Av. Albert Einstein, 627/701 - Morumbi, São Paulo - SP</p>
                  </li>
                  <li>
                     <Phone/>
                     <p>(11) 9999-9999</p>
                  </li>
                  <li>
                     <Mail/>
                     <p>@seuemail@dominio.com</p>
                  </li>
                  <li>
                     <Clock/>
                     <p>Seg a Sex: 07: 22:00</p>
                  </li>
               </ul>
               <Button text="Ver todos os locais"/>
            </div>
         </div>
      </section>
   )
}