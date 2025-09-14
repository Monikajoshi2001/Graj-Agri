type ServiceCardProps = {
  imgSrc: string;
  text: string;
};

export default function ServiceCard({ text, imgSrc }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3 border rounded-xl h-44 max-w-48 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <img src={imgSrc} alt={text} className="w-20 h-20 object-contain mb-3" />
      <p className="text-center font-semibold">{text}</p>
    </div>
  );
}
