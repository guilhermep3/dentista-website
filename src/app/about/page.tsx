import { Header } from "@/components/header"
import { Footer } from "../(auth)/_components/footer"
import { TitleSection } from "@/components/titleSection"
import { MoreAbout } from "../(auth)/_aboutComponents/moreabout"
import { Purpose } from "../(auth)/_aboutComponents/purpose";
import { FullTeam } from "../(auth)/_aboutComponents/fullTeam";

const Page = () => {

   return (
      <main id="about">
         <Header/>
         <section className="hero-about">
            <TitleSection toCenter={true}
               title="SOBRE NÓS"
               subtitle="Descubra mais sobre nossa clínica e equipe"/>
         </section>
         <MoreAbout/>
         <Purpose/>
         <FullTeam/>
         <Footer/>
      </main>
   )
}
export default Page