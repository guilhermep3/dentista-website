import { useServicesData } from "@/data/servicesData"

export const AllServices = () => {
   const servicesData = useServicesData;

   return (
      <section id="allservices">
         <div className="container">
            <div className="services-list">
               {servicesData.map((item) => (
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
         </div>
      </section>
   )
}