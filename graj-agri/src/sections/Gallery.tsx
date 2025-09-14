import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavigationButton from "../components/NavigationButton";
import GalleryItem from "../components/GalleryItem";
import DotIndicator from "../components/DotIndicator";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const importedImages = import.meta.glob(
    "../assets/gallery/*.{png,jpg,jpeg,svg}",
    {
      eager: true,
    }
  );
  const galleryImages = Object.values(importedImages).map(
    (mod) => (mod as { default: string }).default
  );

  const galleryItems = galleryImages.map((src, index) => ({
    id: index + 1,
    src,
    alt: `Gallery Image ${index + 1}`,
    color: "bg-green-100",
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div id="gallery" className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="font-averia-gruesa text-5xl text-center mb-12 text-heading">
        Gallery
      </h2>

      <div className="relative">
        {/* Gallery slider container */}
        <div
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding container */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {galleryItems.map((item) => (
              <GalleryItem
                key={item.id}
                id={item.id}
                src={item.src}
                alt={item.alt}
                color={item.color}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <NavigationButton
            onClick={prevSlide}
            className="left-4"
            variant="arrow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </NavigationButton>

          <NavigationButton
            onClick={nextSlide}
            className="right-4"
            variant="arrow"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </NavigationButton>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center my-8 space-x-8">
          <NavigationButton onClick={prevSlide} variant="text">
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm md:text-base">PREVIOUS</span>
          </NavigationButton>

          <div className="text-gray-400 text-lg">|</div>

          <NavigationButton onClick={nextSlide} variant="text">
            <span className="font-medium text-sm md:text-base">NEXT</span>
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </NavigationButton>
        </div>

        {/* Dots indicator */}
        <DotIndicator
          total={galleryItems.length}
          currentIndex={currentIndex}
          onDotClick={setCurrentIndex}
        />
      </div>
    </div>
  );
}
