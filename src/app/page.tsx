import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";
import { Faixa } from "./(auth)/_components/faixa";
import { Clinic } from "./(auth)/_components/clinic";
import { GoTopButton } from "@/components/GoTopButton";
import { Highlights } from "./(auth)/_components/highlights";
import { Team } from "./(auth)/_components/team";
import { Rating } from "./(auth)/_components/rating";
import { Local } from "./(auth)/_components/local";
import { Footer } from "./(auth)/_components/footer";
import ScrollRevealWrapper from "@/utils/scrollRevealWrapper";

export default function Home() {
   return (
      <main className="main">
         <Header/>
         <ScrollRevealWrapper>
            <Hero/>
            <Emphasis/>
            <About/>
            <Services/>
            <Faixa/>
            <Clinic/>
            <Highlights/>
            <Team/>
            <Rating/>
            <Local/>
            <Footer/>
         </ScrollRevealWrapper>
         <GoTopButton/>
      </main>
   );
}
