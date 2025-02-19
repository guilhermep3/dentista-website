import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { About } from "./(auth)/_components/about";
import { Services } from "./(auth)/_components/services";

export default function Home() {
   return (
      <main>
         <Header/>
         <Hero/>
         <Emphasis/>
         <About/>
         <Services/>
      </main>
   );
}
