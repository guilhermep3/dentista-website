import { Header } from "@/components/header"
import { Footer } from "../../components/footer"
import { TitleSection } from "@/components/titleSection"
import { Form } from "@/components/form"

const Page = () => {

   return (
      <main className="schedule-page">
         <Header/>
         <section className="hero-services">
            <TitleSection toCenter={true}
               title={<>MARQUE SUA <span>CONSULTA</span></>}
            />
         </section>
         <section className="form-section">
            <div className="container-col">
               <h1>Preencha o formulário abaixo</h1>
               <Form/>
            </div>
         </section>
         <Footer/>
      </main>
   )
}
export default Page