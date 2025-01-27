"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [curr, setcurr] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[curr]}
        alt="Product Image"
        width={1000}
        height={1000}
        className="min-h-[300] object-cover object-center"
      ></Image>
      <div className="flex gap-4">
        {images.map((image, index) => (
            <div
                key={index}
                className={cn(
                "w-20 h-20 cursor-pointer border-2 hover:border-gray-500",
                index === curr && "border-2 border-gray-500"
                )}
                onClick={() => setcurr(index)}
            >
                <Image
                src={image}
                alt="Product Image"
                width={100}
                height={100}
                className="object-cover object-center"
                ></Image>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
