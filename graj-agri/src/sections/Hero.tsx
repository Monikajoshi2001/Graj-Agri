import heroImage from "../assets/hero_img.png";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse min-h-screen">
      {/* Left Side */}
      <div className="md:w-1/2">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Right Side */}
      <div className="bg-[#e3fede] p-5 md:p-15 flex flex-col gap-10 items-start md:w-1/2">
        <h1 className="text-4xl font-bold text-[#42494d] font-averia-gruesa">
          Apana Kisan
        </h1>
        <p className="font-[poppins] text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente a
          rerum non esse, in fuga. Culpa dignissimos nobis impedit dolorum,
          ducimus laborum repellat assumenda natus quas perspiciatis laudantium
          tenetur cumque qui a mollitia numquam excepturi, dolores repellendus
          eius ex obcaecati provident voluptates eum ipsum? Voluptates,
          deserunt! Temporibus ratione doloribus totam, neque vel placeat
          repudiandae dicta sint odio, consectetur doloremque quos officiis
          vitae repellat laborum dolores{" "}
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
