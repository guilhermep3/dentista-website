import Link from "next/link";

type props = {
   text: string;
   href: string;
   classe?: string;
}
export const Button = ({ text, href, classe }: props) => {

   return (
      <Link href={href} className={`btn ${classe}`}>
         {text}
         <div className="arrow-svg">
            <img src="./svgs/arrow-sm-right-svgrepo-com.svg" alt="" />
         </div>
      </Link>
   )
}