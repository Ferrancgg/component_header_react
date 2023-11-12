import Ul from "../Ul/Ul";

const Nav = ({ active }) => {
  return (
    <nav className= {active?"nav":"nav active"} >
      {/* {" "} */}
      {console.log(`soy ${active} desde nav`)}
      <Ul />
    </nav>
  );
};

export default Nav;
