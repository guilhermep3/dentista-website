import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";
import { Faixa } from "./(auth)/_components/faixa";
import { Local } from "./(auth)/_components/local";
import { GoTopButton } from "@/components/GoTopButton";
import { Highlights } from "./(auth)/_components/highlights";
import { Team } from "./(auth)/_components/team";

export default function Home() {
   return (
      <main className="main">
         <Header/>
         <Hero/>
         <Emphasis/>
         <About/>
         <Services/>
         <Faixa/>
         <Local/>
         <Highlights/>
         <GoTopButton/>
      </main>
   );
}
