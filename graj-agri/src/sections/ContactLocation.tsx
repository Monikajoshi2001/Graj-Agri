import { Phone, MapPin } from "lucide-react";

import Button from "../components/Button";
import config from "../constants/config";

export default function ContactLocation() {
  return (
    <section id="contact-location" className="my-10">
      <div>
        <h1 className="text-heading font-averia-gruesa text-4xl text-center mb-10">
          Visit us at our office
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[70%_25%] gap-3">
        <div className="p-5 pt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.829468381201!2d77.4531884752132!3d28.933112570368138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5b002fbd86fb%3A0xb91f85a6bddf7354!2sDolcha!5e0!3m2!1sen!2sin!4v1757585892508!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 rounded-3xl size-full min-h-96 md:min-h-[500px]"
          ></iframe>
        </div>
        <div className="flex justify-center items-center p-5 md:p-0">
          <div className="flex flex-col gap-y-5">
            <h2 className="text-heading font-averia-gruesa text-4xl ">
              Contact Us
            </h2>
            <div className="flex items-center gap-3">
              <Phone className="size-5" />
              <span className="font-semibold">{config.PHONE}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-10" />
              <span className="font-semibold">
                {config.ADDRESS}
              </span>
            </div>
            <a href={config.LOCATION_LINK} target="_blank"><Button className="w-full">GET DIRECTIONS</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
