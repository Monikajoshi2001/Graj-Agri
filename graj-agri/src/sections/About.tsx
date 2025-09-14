import about_us_1 from "../assets/icons/about-us-1.png";
import about_us_2 from "../assets/icons/about-us-2.png";
import about_us_3 from "../assets/icons/about-us-3.png";
import Button from "../components/Button";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row">
        {/* Left side */}
        <div className="relative flex-1 flex flex-col justify-center items-center pt-5 mb-20 md:mb-0 md:pt-10">
          <div className="flex justify-center gap-2 md:gap-3">
            <img
              src={about_us_1}
              alt="about_us_image"
              className="w-[48%] md:w-2/5"
            />
            <img
              src={about_us_2}
              alt="about_us_image"
              className="w-[48%] md:w-2/5 translate-y-4 md:translate-y-7"
            />
          </div>
          <img
            src={about_us_3}
            alt="about_us_image"
            className="w-1/2 absolute -bottom-20 md:static md:w-2/5 md:-translate-y-27"
          />
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 p-3">
          <h2 className="text-heading font-averia-gruesa text-4xl">
            Welcome to
          </h2>
          <h2 className="text-heading font-birthstone text-7xl">Apna Kisaan</h2>
          <p>
            GRAJ PRODUS PVT. LTD. Established in 2019 and Director Sh. Govind
            Singh have a experience of 10 year of the fertilizer industry and
            also had a farming experience. It is a diversified, research &
            development based complete Agriculture Inputs and Crop Protection
            Company specializing in pre harvest plant protection products. It
            helps farmers shift from traditional agriculture practices towards
            modern and scientific approach by innovating products which includes
            generic agrochemicals, plant nutrients, organic manures etc. The
            company is committed to prosperous farming by creating perfect
            harmony between nature and science. Company's endeavor is to boost
            crop productivity in the country with a focus on increasing crop
            output and preventing pre-harvest wastage with the help of an
            innovative and constantly evolving product portfolio.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
