interface DotIndicatorProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function DotIndicator({ total, currentIndex, onDotClick }: DotIndicatorProps) {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                     ${currentIndex === index
              ? 'bg-gray-800 scale-125 shadow-md'
              : 'bg-gray-300 hover:bg-gray-500 hover:scale-110'}`}
        />
      ))}
    </div>
  );
}