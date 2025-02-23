import { Header } from "@/components/header"
import { Footer } from "../(auth)/_components/footer"
import { TitleSection } from "@/components/titleSection"
import { AllServices } from "../(auth)/_servicesComponents/allservices"

const Page = () => {

   return (
      <main>
         <Header/>
         <section className="hero-services">
            <TitleSection toCenter={true}
               title={<>NOSSOS <span>SERVIÇOS</span></>}
               subtitle="Descubra mais sobre nossa clínica e equipe"
            />
         </section>
         <AllServices/>
         <Footer/>
      </main>
   )
}
export default Page