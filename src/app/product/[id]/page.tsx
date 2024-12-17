"use client"

import React from 'react'

import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar';

interface DetailProduct{
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    stock: number;
}

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = React.useState<DetailProduct | null>(null);

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="container py-20 mx-auto">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className=" p-4">
                            <img
                                className="w-full h-full object-cover"
                                src={'https://dummyjson.com/image/400x400/008080/ffffff?text='+product?.title}
                                alt="Product Image"
                            />
                        </div>
                        <div className=" md:w-1/2 p-4">
                            <h1 className="text-3xl font-semibold">{product?.title}</h1>
                            <p className="text-gray-600 mt-4">{product?.description}</p>
                            <ul className="mt-4 flex">
                                <li className="mr-4">Price: ${product?.price}</li>
                                <li className="mr-4">Stock: {product?.stock}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
