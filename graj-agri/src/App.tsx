import "./App.css";
import { Navbar, Hero, About, Products, Gallery, Services, Testimonials, ContactForm, ContactLocation } from "./sections";

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
        <ContactLocation />
      </main>
    </>
  );
}

export default App;
