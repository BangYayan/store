import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full w-max-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
            objectFit="cover"
          ></Image>
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="font-medium text-sm"> {product.name} </h2>
        </Link>
        <div className="flex flex-between gap-4">
          <p>{product.rating}</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="font-bold text-red-500">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;