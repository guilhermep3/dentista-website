import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";
import { Faixa } from "./(auth)/_components/faixa";

export default function Home() {
   return (
      <main className="main">
         <Header/>
         <Hero/>
         <Emphasis/>
         <About/>
         <Services/>
         <Faixa/>
         <div className="up-btn">
            <img src="./svgs/arrow-down-svgrepo-com.svg" alt="" />
         </div>
      </main>
   );
}
