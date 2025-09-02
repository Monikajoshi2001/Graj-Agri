import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
      </main>
    </>
  );
}

export default App;
