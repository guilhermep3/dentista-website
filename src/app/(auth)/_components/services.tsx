import { Button } from "@/components/button";
import { useServicesData } from "@/data/servicesData";

export const Services = () => {
   const servicesData = useServicesData;

   return (
      <section id="services">
         <div className="container">
            <h2 className="section-id"><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />Serviços</h2>
            <h1 className="section-title">Serviços de <span>alta qualidade</span> para você</h1>
            <p className="section-desc">Estamos comprometidos com a sustentabilidade. iniciativas ecológicas.</p>
            <div className="services-list">
               {servicesData.map((item) => (
                  <div className="service" key={item.id}>
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
            <Button text="Ver todos"/>
         </div>
      </section>
   )
}