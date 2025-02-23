import { Button } from "@/components/button";
import { TitleSection } from "@/components/titleSection";
import { useServicesData } from "@/data/servicesData";

export const Services = () => {
   const servicesData = useServicesData;
   const servicesDataSlice = servicesData.slice(0, 4)

   return (
      <section id="services">
         <div className="container">
            <TitleSection secId="Serviços" title={<>Serviços de <span>alta qualidade</span> para você</>} toCenter={true}/>
            <p className="section-desc reveal-top">Estamos comprometidos com a sustentabilidade. iniciativas ecológicas.</p>
            <div className="services-list">
               {servicesDataSlice.map((item) => (
                  <div className="service reveal-bottom" key={item.id}>
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
            <Button href="/services" text="Ver todos"/>
         </div>
      </section>
   )
}