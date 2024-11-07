import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./component/navbar/NavbarWithStyling";
import Navbar from "./component/navbar/Navbar";
import HoverButton from "./component/button/HoverButton";

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      {/* <Navbar /> */}
      <NavbarWithStyling
        menu={listMenu}
        name="Melinda"
        age="26"
        address="hatinya Aqsa"
      />
      <NavbarWithStyling
        name="Iqmal Main rambut terus"
        age="78"
        address="Agar tampan di kelas"
      />
      <NavbarWithStyling
        menu={["Tentang saya", "Tentang Tegar", "Tentang Rizal"]}
        name="Ferdi"
        age="11"
        address="Aqsa Zoom Muka mu"
      />

      <HoverButton>
        <p>TEST CHILDREN</p>
      </HoverButton>
    </>
  );
}

export default App;