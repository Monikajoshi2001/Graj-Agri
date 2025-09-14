interface GalleryItemProps {
  id: number;
  src: string;
  alt: string;
  color: string;
}

export default function GalleryItem({ id, src, alt, color }: GalleryItemProps) {
  return (
    <div className="relative flex-shrink-0 h-full w-full min-w-full">
      <div className="relative h-full w-full">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        ) : (
          <div
            className={`w-full h-full ${color} flex items-center justify-center`}
          >
            <div className="text-center text-gray-700">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                {id}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600">
                {alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
