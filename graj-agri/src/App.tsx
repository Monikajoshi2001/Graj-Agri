import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Gallery from "./sections/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
      </main>
    </>
  );
}

export default App;
