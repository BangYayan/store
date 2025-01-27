import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSlugProducts } from "@/lib/actions/products.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/ui/shared/product/product-price";
import ProductImages from "@/components/ui/shared/product/product-images";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getSlugProducts(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} reviews
              </p>
              <div className="flex flex-cols sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full text-green-700 bg-green-100 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  <div>
                    {product.stock > 0 ? (
                      <Badge variant="outline">In stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of stock</Badge>
                    )}
                  </div>
                </div>
                {product.stock > 0 && (
                  <Button variant="default" className="w-full">
                    Add to cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
