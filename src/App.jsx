import { DarkModeProvider } from "./components/DarkModeContext";
import "./App.css";
import Header from "./components/Header";
import Hero from "./Section/Hero";
import About from "./Section/About";
import PopularArea from "./Section/PopularArea";
import Properties from "./Section/Properties";
import Clients from "./Section/Clients";
import Contact from "./Section/Contact";
import Service from "./Section/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularArea />
        <Properties />
        <Service />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
