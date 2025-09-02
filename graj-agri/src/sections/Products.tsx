import ProductCard from "../components/ProductCard";
import product_img_1 from "../assets/product-1.png"
import product_img_2 from "../assets/product-2.png"
import product_img_3 from "../assets/product-3.png"

export default function Products() {
  
  const products = [
    {
      productName: "Organic Fertilizer",
      productImage: product_img_1
    },
    {
      productName: "Insecticides",
      productImage: product_img_2
    },
    {
      productName: "Fungicides",
      productImage: product_img_3
    }
  ]

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-averia-gruesa text-3xl sm:text-4xl lg:text-5xl text-center text-heading mb-6">
            Our Products
          </h2>
          <p className="text-center max-w-4xl text-gray-600 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            repellendus beatae obcaecati nam quos sapiente modi natus accusamus!
            Atque, doloribus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.productName}
              productImage={product.productImage}
              productName={product.productName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
