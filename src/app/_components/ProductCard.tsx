"use client"
import React from 'react'
import Link from 'next/link';

interface ProductInterface {
    id: number;
    image: string;
    title: string;
    description: string;
}

export default function ProductCard() {
    const [products, setProducts] = React.useState<ProductInterface[]>([]);
    React.useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                setProducts(data.products);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);

    return (
        <div className="container py-20 mx-auto">
        <div className="grid grid-cols-3 gap-6  bg-gray-100 rounded-b-lg shadow-md">
            {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="overflow-hidden rounded-t-lg">
                        <img src={'https://dummyjson.com/image/400x400/008080/ffffff?text='+product.title} alt={product.title} className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg font-semibold mb-2">{product.title}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <div className="flex justify-center">
                        <Link href={`/product/${product.id}`}>
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Detail
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

