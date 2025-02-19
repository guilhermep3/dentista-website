"use client"
export const GoUpBtn = () => {

   function handleGoTop(){
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <div className="up-btn" onClick={handleGoTop}>
         <img src="./svgs/arrow-down-svgrepo-com.svg" alt="" />
      </div>
   )
}