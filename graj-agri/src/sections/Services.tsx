import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    { text: "Organic Certified", imgSrc: service1 },
    { text: "Sustainable Operation", imgSrc: service2 },
    { text: "Hygine Products", imgSrc: service3 },
    { text: "Good Packging", imgSrc: service4 },
  ];

  return (
    <section id="services" className={`mt-10 p-3 lg:h-screen lg:bg-cover bg-[url(/services_bg.png)]`}>
      <div className="lg:w-2/3 lg:h-full lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col items-center">
          <div className="mb-10 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-heading font-averia-gruesa mb-7">
              Our Services
            </h1>
            <p className="text-center max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              laudantium quod illum velit quidem quia explicabo ut aliquid
              facilis veniam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-sm">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                text={service.text}
                imgSrc={service.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

