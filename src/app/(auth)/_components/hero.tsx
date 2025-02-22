import { Button } from "@/components/button"

export const Hero = () => {

   return (
      <section id="hero">
         <div className="container">
            <div className="hero-left">
               <h1 className="hero-title reveal-top">Experimente a <span>Excelência Odontológica</span> com um toque suave</h1>
               <h2 className="hero-subtitle reveal-bottom">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h2>
               <Button text="Agendar" href="/schedule" classe="reveal-top" />
               <div className="hero-rating reveal-bottom">
                  <div className="hero-rating-top">
                     <p>Avaliação Google</p>
                     <span>5.0</span>
                     <img src="./svgs/star-svgrepo-com.svg" alt="estrela de avaliação" className="star-rating" />
                     <img src="./svgs/star-svgrepo-com.svg" alt="estrela de avaliação" className="star-rating" />
                     <img src="./svgs/star-svgrepo-com.svg" alt="estrela de avaliação" className="star-rating" />
                     <img src="./svgs/star-svgrepo-com.svg" alt="estrela de avaliação" className="star-rating" />
                     <img src="./svgs/star-svgrepo-com.svg" alt="estrela de avaliação" className="star-rating" />
                  </div>
                  <p>Baseado em 480 avaliações</p>
               </div>
            </div>
            <div className="hero-right">
               <div className="hero-relative">
                  <img src="./dentista.png" alt="imagem da dentista Ana Vitoria" className="hero-image reveal-bottom" />
                  <div className="dentist-box">
                     <img src="./dentista-perfil.png" alt="imagem da dentista Ana Vitoria" />
                     <div>
                        <p className="dentist-box-name">Dr. Ana Vitória</p>
                        <p className="dentist-box-profession">Dentista</p>
                     </div>
                  </div>
                  <div className="icon-hero icon-hero1">
                     <img src="./svgs/icon-hero-theeth-1.svg" alt="icone dente 1" />
                  </div>
                  <div className="icon-hero icon-hero2">
                     <img src="./svgs/icon-hero-theeth-2.svg" alt="icone dente 2" />
                  </div>
                  <div className="icon-hero icon-hero3">
                     <img src="./svgs/icon-hero-theeth-3.svg" alt="icone dente 3" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}