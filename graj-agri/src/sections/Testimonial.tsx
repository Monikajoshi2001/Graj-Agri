import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Logo from "../assets/logo.png"
import DotIndicator from "../components/DotIndicator";

const testimonials = [
  {
    name: "Jan Navales",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Emily Carter",
    text: "The service and support have been amazing! The team really cares about customers and goes the extra mile.",
  },
  {
    name: "Rahul Mehta",
    text: "Superb experience overall. The quality, attention to detail, and customer-first approach are something rare.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12 mb-4"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-heading font-averia-gruesa">
          Our customers love us
        </h2>

        {/* Testimonial Content */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          {testimonials[current].text}
        </p>
        <h3 className="text-lg font-bold text-gray-900">
          {testimonials[current].name}
        </h3>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            <ArrowLeft size={20} />
          </button>


          <DotIndicator total={testimonials.length} currentIndex={current} onDotClick={setCurrent} />
          
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
