import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuMobile from "./components/MenuMobile";
import Navbar from "./components/Navbar";
import VR from "./components/VR";
import { useState } from 'react';

function App() {

  const [openMenu,setOpenMenu] = useState(false);

  return (
    <main>
      <Navbar setOpenMenu={setOpenMenu} />
      <Hero />
      <VR />
      <Creations />
      <Footer />
      { openMenu && <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu} /> }
    </main>
  );
}

export default App;
