"use client"
import { Modal } from "@/components/modal";
import { useServicesData } from "@/data/servicesData"
import { serviceType } from "@/types/service";
import { useState } from "react";

export const AllServices = () => {
   const servicesData = useServicesData;
   const [showModal, setShowModal] = useState<boolean>(false);
   const [modalItem, setModalItem] = useState<serviceType>();

   function handleShowModal(item: any){
      setShowModal(true);
      setModalItem(item);
   };

   return (
      <section id="allservices">
         <div className="container">
            <div className="services-list">
               {servicesData.map((item) => (
                  <div className="service reveal-top" key={item.id}
                     onClick={() => handleShowModal(item)}>
                     <img src={`./services/${item.img}`} alt="pessoa em uma consulta odontológica" className="service-img" />
                     <img src={`./svgs/${item.icon}`} className="service-icon" alt={item.icon} />
                     <div className="service-infos">
                        <p className="service-title">{item.name}</p>
                        <p className="service-desc">{item.description}</p>
                        <p className="read-more">Ver mais <img src="./svgs/arrow-sm-right-svgrepo-com.svg" alt="arrow right" /></p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {showModal && modalItem && <Modal infos={modalItem} setShowModal={() => setShowModal(!showModal)} />}
      </section>
   )
}