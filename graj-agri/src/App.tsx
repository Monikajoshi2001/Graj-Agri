import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
