import Link from "next/link";

export default function ProductList() {
    const products = [1, 2, 3, 4, 5];

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
            <h1 className="font-bold text-2xl">Product List</h1>
            <div className="flex gap-5">
            {products.map((productId) => (
                <div key={productId}>
                        <Link href={`/products/${productId}`} className="text-blue-600 underline">
                            Product {productId}
                        </Link>
                </div>  
            ))}
            </div>
        </div>
    );
}