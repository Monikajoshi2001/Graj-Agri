type Props = {
  productImage: string;
  productName: string;
};

export default function ProductCard({ productImage, productName }: Props) {
  return (
    <div className="flex flex-col items-center max-w-sm w-full">
      <div className="w-full aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#D4EDD4] rounded-2xl p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-contain max-w-[200px] max-h-[200px]"
        />
      </div>
      <h3 className="text-center mt-6 text-lg font-semibold text-gray-800 leading-tight">
        {productName}
      </h3>
    </div>
  );
}
