"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod"

const scheduleSchema = z.object({
   name: z.string().min(2, 'Preencha o campo corretamente'),
   birthday: z.string().refine(value => {
      const date = new Date(value);
      return !isNaN(date.getTime())
   }, { message: 'Data de nascimento inválida' })
      .refine(value => {
         const date = new Date(value);
         const today = new Date;
         const minAge = 5;
         const age = today.getFullYear() - date.getFullYear();
         return age > minAge || (age === minAge && today >= new Date(date.getFullYear() + minAge, date.getMonth(), date.getDate()))
      }),
   cpf: z.string().min(11, 'CPF inválido'),
   number: z.string().min(9, 'Preencha o campo corretamente'),
   service: z.array(z.string()).min(1,'Selecione pelo menos uma opção'),
})

type formData = z.infer<typeof scheduleSchema>

export const Form = () => {
   const { register, handleSubmit, formState: {errors}} = useForm<formData>({
      resolver: zodResolver(scheduleSchema)
   });

   const onSubmit = (data: formData) => {
      console.log(data)
   };

   
const services = [
   "Clareamento Dental",
   "Implante Dental",
   "Ortodontia",
   "Limpeza Profissional",
   "Endodontia",
   "Prótese Dentária",
   "Harmonização Orofacial",
   "Odontopediatria"
];

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-div">
               <label>
                  Seu nome
                  <input type="text" {...register("name")}
                     placeholder="Digite seu nome" />
                     {errors.name && <span className="error-input">{errors.name.message}</span>}
               </label>
            </div>
            <div className="form-div">
               <label>
                  Data de nascimento
                  <input type="date" />
                  {errors.birthday && <span className="error-input">{errors.birthday.message}</span>}
               </label>
               <label>
                  Seu CPF
                  <input type="text" {...register("cpf")}
                     placeholder="Digite seu CPF" />
                     {errors.cpf && <span className="error-input">{errors.cpf.message}</span>}
               </label>
            </div>
            <div className="form-div">
               <label>
                  Seu número
                  <input type="text" {...register("number")}
                     placeholder="Número de telefone" />
                     {errors.number && <span className="error-input">{errors.number.message}</span>}
               </label>
            </div>
            <div className="form-div">
               <fieldset className="services-fieldset">
                  <legend>Selecione os serviços:</legend>
                  {services.map(service => (
                     <label key={service}>
                        <input type="checkbox" value={service} {...register("service")} />
                        {service}
                     </label>
                  ))}
                  {errors.service && <span className="error-input">{errors.service.message}</span>}
               </fieldset>
            </div>
            <input type="submit" value="Marcar consulta" />
         </form>
      </>
   )
}