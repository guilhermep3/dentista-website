import { TitleSection } from "@/components/titleSection"

export const Highlights = () => {

   return (
      <section id="highlights">
         <div className="container">
            <div className="highlights-left">
               <TitleSection toCenter={false}
                  secId="Diferenciais"
                  title={<>Nosso principais <span>diferenciais</span> para atender você</>}
                  revealTitle="reveal-top"
                  revealId="reveal-top"
               /> 
               <p className="highlights-text reveal-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis sit at architecto harum numquam obcaecati culpa minus. Minima architecto voluptas voluptatum hic a nemo velit, inventore id quaerat. Aut.</p>
               <div className="highlight-list">
                  <div className="highlight-box">
                     <div className="highlight-top">
                        <img src="./svgs/technology.svg" alt="" />
                        <p>Tecnologia</p>
                     </div>
                     <p className="highlight-box-text">Utilizamos equipamentos modernos e técnicas avançadas trazendo segurança e eficácia</p>
                  </div>
                  <div className="highlight-box">
                     <div className="highlight-top">
                        <img src="./svgs/smile-circle.svg" alt="" />
                        <p>Atendimento</p>
                     </div>
                     <p className="highlight-box-text">Aqui, cada paciente é tratado com carinho e atenção especial, tornando sua experiência mais tranquila.</p>
                  </div>
                  <div className="highlight-box">
                     <div className="highlight-top">
                        <img src="./svgs/check.svg" alt="" />
                        <p>Experiência</p>
                     </div>
                     <p className="highlight-box-text">Equipe de profissionais altamente capacitados, especializados em diversas áreas da odontologia.</p>
                  </div>
                  <div className="highlight-box">
                     <div className="highlight-top">
                        <img src="./svgs/date-range.svg" alt="" />
                        <p>Horários</p>
                     </div>
                     <p className="highlight-box-text">oferecemos horários flexíveis para que você possa marcar sua consulta com mais praticidade.</p>
                  </div>
               </div>
            </div>
            <div className="highlights-right">
               <img src="./highlights.png" className="highlights-image1" alt="cliente sendo atendido" />
               <img src="./before-after.png" className="highlights-image2" alt="dentistas" />
            </div>
         </div>
      </section>
   )
}