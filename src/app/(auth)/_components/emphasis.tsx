export const Emphasis = () => {

   return(
      <div className="emphasis">
         <div className="emphasis-box">
            <img src="./svgs/telephone-signal-svgrepo-com.svg" alt="telefone svg" />
            <div>
               <p className="emphasis-title">Ligue para marcar uma consulta</p>
               <p className="emphasis-subtitle">+55 999 999 999</p>
            </div>
         </div>
         <div className="emphasis-box">
            <img src="./svgs/time-lapse-2-svgrepo-com.svg" alt="time lapse svg" />
            <div>
               <p className="emphasis-title">Horários abertos</p>
               <p className="emphasis-subtitle">Seg a Sex: 07:00 22:00</p>
            </div>
         </div>
      </div>
   )
}