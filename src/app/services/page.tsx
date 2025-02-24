import { Header } from "@/components/header"
import { Footer } from "../../components/footer"
import { TitleSection } from "@/components/titleSection"
import { AllServices } from "../(auth)/_servicesComponents/allservices"
import ScrollRevealWrapper from "@/utils/scrollRevealWrapper"

const Page = () => {

   return (
      <main>
         <Header/>
         <ScrollRevealWrapper>
            <section className="hero-services">
            <TitleSection toCenter={true}
               title={<>NOSSOS <span>SERVIÇOS</span></>}
               subtitle="Descubra mais sobre nossa clínica e equipe"
               />
            </section>
            <AllServices/>
         </ScrollRevealWrapper>
         <Footer/>
      </main>
   )
}
export default Page