type props = {
   text: string
}
export const Button = ({text}: props) => {

   return (
      <button className="btn">
         {text}
         <div className="arrow-svg">
            <img src="./svgs/arrow-sm-right-svgrepo-com.svg" alt="" />
         </div>
      </button>
   )
}