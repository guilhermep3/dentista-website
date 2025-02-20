export const Local = () => {
   const localBoxData = [
      {
         id: 1,
         span: '+10',
         title: 'Anos de Experiência',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam animi nulla.'
      },
      {
         id: 2,
         span: '+15',
         title: 'Dentistas experientes',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam animi nulla.'
      },
      {
         id: 3,
         span: '+50K',
         title: 'Projetos realizados',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam animi nulla.'
      },
      {
         id: 4,
         span: '+10K',
         title: 'Avaliações positivas',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam animi nulla.'
      },
   ]

   return (
      <section id="clinic">
         <div className="container-col">
            <div className="local-image">
               <div className="local-blue-bg">
                  <h2><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />Clínica</h2>
                  <h1>Atendimento Compreensivo e cuidadoso para qualquer idade</h1>
               </div>
            </div>
            <div className="local-infos">
               {localBoxData.map((item) => (
                  <div className="local-box" key={item.id}>
                     <span>{item.span}</span>
                     <p className="local-box-title">{item.title}</p>
                     <p className="local-box-desc">{item.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}