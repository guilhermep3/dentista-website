import { Header } from "@/components/header"
import { Footer } from "../../components/footer"
import { TitleSection } from "@/components/titleSection"
import { AllServices } from "../(auth)/_servicesComponents/allservices"
import ClientScrollReveal from "../(auth)/_components/clientScrollReveal"
import { Suspense } from "react"
import { Skeleton } from "@/components/skeleton"

const Page = () => {

   return (
      <Suspense fallback={<Skeleton/>}>
         <main>
            <Header/>
            <ClientScrollReveal>
               <section className="hero-services">
               <TitleSection toCenter={true}
                  title={<>NOSSOS <span>SERVIÇOS</span></>}
                  subtitle="Descubra mais sobre nossa clínica e equipe"
                  />
               </section>
               <AllServices/>
            </ClientScrollReveal>
            <Footer/>
         </main>
      </Suspense>
   )
}
export default Page