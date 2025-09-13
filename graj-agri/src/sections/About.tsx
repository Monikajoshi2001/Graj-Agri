import about_us_1 from "../assets/about-us-1.png";
import about_us_2 from "../assets/about-us-2.png";
import about_us_3 from "../assets/about-us-3.png";
import Button from "../components/Button";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row">
        {/* Left side */}
        <div className="relative flex-1 flex flex-col justify-center items-center pt-5 mb-20 md:mb-0 md:pt-10">
          <div className="flex justify-center gap-2 md:gap-3">
          <img src={about_us_1} alt="about_us_image" className="w-[48%] md:w-2/5" />
          <img src={about_us_2} alt="about_us_image" className="w-[48%] md:w-2/5 translate-y-4 md:translate-y-7" />
          </div>
           <img src={about_us_3} alt="about_us_image" className="w-1/2 absolute -bottom-20 md:static md:w-2/5 md:-translate-y-27" /> 
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 p-3">
          <h2 className="text-heading font-averia-gruesa text-4xl">Welcome to</h2>
          <h2 className="text-heading font-birthstone text-7xl">Apna Kisaan</h2>
          <p>At Apna Kisaan, we are dedicated to building a future where farming is sustainable, profitable, and accessible for every farmer. With a strong focus on innovation and quality, we provide a wide range of agricultural products including herbicides, fertilizers, insecticides, and fungicides that are designed to protect crops and enrich soil health. Our mission is to empower farmers with the tools and knowledge they need to improve productivity and ensure food security for generations to come. We believe in working hand-in-hand with the farming community, offering not only products but also guidance and support that add real value to their fields. By combining science, technology, and farmer-first values, Apna Kisaan continues to grow as a trusted partner in agriculture, driving positive change in rural communities.</p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
