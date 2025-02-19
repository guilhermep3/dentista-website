import { Button } from "@/components/button"

export const About = () => {

   return (
      <section id="about">
         <div className="container">
            <div className="about-right">
               <img src="./about/about-1.png" alt="pessoa no dentista" className="about-img1" />
               <img src="./about/about-2.jpg" alt="clinica odontologica" className="about-img2" />
            </div>
            <div className="about-left">
               <h2 className="section-id"><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />Sobre nós</h2>
               <h1 className="section-title">Sua jornada para o <span>sorriso perfeito</span> começa aqui</h1>
               <p className="section-desc">O objetivo de nossa clínica é fornecer odontologia amigável e atenciosa e o mais alto nível de tratamentos odontológicos gerais,
                  cosméticos e especializados. Com consultórios odontológicos em todo o mundo.</p>
               <ul className="about-list">
                  <li className="about-list-item">
                     <img src="./svgs/check-badge-svgrepo-com.svg" alt="" className="check" />
                     <p>Time Experiente</p>
                  </li>
                  <li className="about-list-item">
                     <img src="./svgs/check-badge-svgrepo-com.svg" alt="" className="check" />
                     <p>Equipamentos tecnológicos</p>
                  </li>
                  <li className="about-list-item">
                     <img src="./svgs/check-badge-svgrepo-com.svg" alt="" className="check" />
                     <p>Ambiente confortável</p>
                  </li>
                  <li className="about-list-item">
                     <img src="./svgs/check-badge-svgrepo-com.svg" alt="" className="check" />
                     <p>Servico de emergências</p>
                  </li>
               </ul>
               <Button text="Ver mais sobre nós" />
            </div>
         </div>
      </section>
   )
}