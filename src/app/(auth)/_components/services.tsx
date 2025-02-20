import { Button } from "@/components/button";

export const Services = () => {
   const servicesData = [
      {
         id: 1,
         name: 'Clareamento Dental',
         description: 'Indicado para quem deseja um sorriso mais brilhante e saudável duradouro.',
         img: 'services-1.jpg',
         icon: 'tooth-svgrepo-com.svg'
      },
      {
         id: 2,
         name: 'Implante Dental',
         description: 'Utilizamos materiais de alta qualidade para garantir durabilidade e um sorriso natural.',
         img: 'services-2.jpg',
         icon: 'tooth-rotate-svgrepo-com.svg'
      },
      {
         id: 3,
         name: 'Ortodontia',
         description: 'Oferecemos tratamentos com aparelhos fixos, móveis e alinhadores transparentes.',
         img: 'services-3.jpg',
         icon: 'tooth-repair-svgrepo-com.svg'
      },
      {
         id: 4,
         name: 'Limpeza Profissional',
         description: 'Remove tártaro e placas bacterianas, prevenindo cáries e doenças gengivais',
         img: 'services-4.jpg',
         icon: 'tooth-infected-svgrepo-com.svg'
      }
   ];


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