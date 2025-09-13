import heroImage from "../assets/hero_img.png";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row-reverse">
        {/* Left Side */}
        <div className="md:w-1/2">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Right Side */}
        <div className="bg-[#e3fede] p-5 md:p-15 flex flex-col gap-10 items-start md:w-1/2">
          <h1 className="text-5xl font-bold text-heading font-averia-gruesa">
            Apana Kisan
          </h1>
          <p className="font-[poppins]">
            Empowering farmers with reliable and innovative agricultural solutions that enhance crop health, improve soil
            fertility, and deliver sustainable yields for a better tomorrow. At Apna Kisaan, we believe farming is not just a
            profession but a way of life, and we are committed to supporting farmers with products they can trust season
            after season. With a wide range of fertilizers, herbicides, insecticides, and fungicides, our goal is to make
            modern farming accessible, productive, and eco-friendly. By combining science, technology, and farmer-first
            values, we strive to create long-lasting growth, prosperity, and a greener future for the agricultural community.{" "}
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
