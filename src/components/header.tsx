export const Header = () => {

   return (
      <header className="header">
         <div className="wrapper-header">
            <div className="logo-div">
               <img src="./logo.png" alt="logo da Odontana" />
               <p>Odontana</p>
            </div>
            <nav>
               <ul className="list-links">
                  <li className="li-dropdown">
                     <a href="/" className="home">Início</a>
                     <div className="arrow-div">
                        <span className="span-arrow"></span>
                        <span className="span-arrow"></span>
                     </div>
                     <div className="dropdown">
                        <a href="#hero">Início</a>
                        <a href="#about">Sobre</a>
                        <a href="#clinic">Clínica</a>
                        <a href="#services">Serviços</a>
                        <a href="#team">Time</a>
                        <a href="#local">Local</a>
                     </div>
                  </li>
                  <li><a href="about">Sobre</a></li>
                  <li><a href="services">Serviços</a></li>
               </ul>
            </nav>
            <div>
               <button className="btn">
                  Agendar
                  <div className="arrow-svg">
                     <img src="./svgs/arrow-sm-right-svgrepo-com.svg" alt="" />
                  </div>
               </button>
            </div>
         </div>
      </header>
   )
}