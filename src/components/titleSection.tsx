type props = {
   title?: React.ReactNode;
   subtitle?: string;
   secId?: string;
   toCenter: boolean;
}
export const TitleSection = ({title, subtitle, secId, toCenter}: props) => {
   return (
      <div style={{textAlign: toCenter ? 'center' : 'start'}}>
         <h2 className="section-id"><img src="./svgs/star-2-svgrepo-com.svg" alt="star" className="star2" />{secId}</h2>
         <h1 className="section-title">{title}</h1>
         <p className="section-desc">{subtitle}</p>
      </div>
   )
}