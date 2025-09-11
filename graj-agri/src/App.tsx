import "./App.css";
import { Navbar, Hero, About, Products, Gallery, Services, Testimonials, ContactForm } from "./sections";

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
        <ContactForm />
      </main>
    </>
  );
}

export default App;
