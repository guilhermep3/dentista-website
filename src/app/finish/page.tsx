"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TitleSection } from "@/components/titleSection";
import { useFormStore } from "@/store/formStore";

const Page = () => {
   const {formData} = useFormStore();


   return (
      <main id="finish">
         <Header/>
            <div className="container-col">
               <h1 className="finish-title">Parabéns {formData?.name}!</h1>
               <div className="finish-div">
                  <div className="finish-left">
                     <p>Você finalizou o processo de marcar uma consulta ao dentista com a Ondontana, 
                        em breve ligaremos para <strong>{formData?.number}</strong> para confirmar o dia que teremos a sua presença na melhor clíninca</p>
                  </div>
                  <div className="finish-right">
                     <img src="./finish.png" alt="finish.png" />
                  </div>
               </div>
            </div>
         <Footer/>
      </main>
   )
}
export default Page;