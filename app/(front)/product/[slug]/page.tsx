import AddToCart from "@/components/products/AddToCart";
import data from "@/lib/data";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { convertDocToObj } from "@/lib/utils";
export async function generateMetaData({
  params,
}:{params:{slug:string}}){
  const product=await productService.getBySlug(params.slug)
  if(!product){
    return {title:'Product Not Found'}
  }return{
    title:product.name,
    description:product.description
  }
}
const ProductDetails = async({ params }: { params: { slug: string } }) => {
  // const product = data.products.find((x) => x.slug === params.slug);
  const product=await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>{product.brand}</li>
            <li>
              <div className="divider"> </div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailabable"}
                </div>
              </div>
              {
                product.countInStock!==0 &&(
                    <div className="card-actions justify-center">
                        <AddToCart item={{...convertDocToObj(product),qty:0,color:'',size:''}}/>
                        </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
