import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";

export default function Home() {
   return (
      <main>
         <Header/>
         <Hero/>
         <Emphasis/>
      </main>
   );
}
