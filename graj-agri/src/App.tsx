import "./App.css";
import { Navbar, Hero, About, Products, Gallery, Services } from "./sections";

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
      </main>
    </>
  );
}

export default App;
