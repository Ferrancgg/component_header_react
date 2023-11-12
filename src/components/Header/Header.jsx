
// import { useState } from "react";
// import "./Header.css";

// import Nav from "./Nav/Nav";



// const Header = () => {
//   const [active, setActive]=useState(true)
//   // const [class, setClass]=useState("active")
//   // const [icon,setIcon]=useState("https://res.cloudinary.com/di49fnkc8/image/upload/v1699612238/menu-2_fhrwke.png")
//   const changeActive=()=>{
//     setActive(!active)
//   }
//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#" className="a">
//           logo
//         </a>
//       </div>
// {active===true?console.log("ahora soy true"):console.log("ahora soy false")}

// {/* {active===true?setClass("btt active"):setClass("")} */}


//       <button className= {`bbt ${active?"active":""}`} "btt "
//       onClick={changeActive}>


//         {/* {active===true? <img
//           className="img-menu-open"
//           src="https://res.cloudinary.com/di49fnkc8/image/upload/v1699612238/menu-2_fhrwke.png"
//           alt="menu"
//         /> :  <img
//         className="img-menu-open"
//         src= "https://res.cloudinary.com/di49fnkc8/image/upload/v1699612358/close-2_nfmmu0.png"
//         alt="menu"
//       /> } */}
//         {/* <img
//           className="img-menu-open"
//           src="https://res.cloudinary.com/di49fnkc8/image/upload/v1699612238/menu-2_fhrwke.png"
//           alt="menu"
//         /> */}
//       </button>
//       <Nav active={active}/>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav/Nav";

const Header = () => {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#" className="a">
          logo
        </a>
      </div>

      <button className={`btt ${active ? "active" : ""}`} onClick={changeActive}>
        <img
          className="img-menu-open"
          src={active ? "https://res.cloudinary.com/di49fnkc8/image/upload/v1699612358/close-2_nfmmu0.png" : "https://res.cloudinary.com/di49fnkc8/image/upload/v1699612238/menu-2_fhrwke.png"}
          alt={active ? "Cerrar menú" : "Abrir menú"}
        />
      </button>

      <Nav active={active} />
    </header>
  );
};

export default Header;
