import Contact from "./components/Contact";
import Certificates from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/experince";
export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}