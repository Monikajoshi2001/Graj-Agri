import "./App.css";
import { Navbar, Hero, About, Products, Gallery, Services, Testimonials } from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
