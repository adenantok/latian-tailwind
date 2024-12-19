"use client";

import React, { useState } from 'react';

export default function Form() {
    //const [formData, setFormData] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newFormData = {
            title,
            description
        }

        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newFormData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Product added successfully:', data);
        } catch (error) {
            console.error('Error adding product:', error);
        }

        //setFormData(newFormData);
        // console.log(newFormData);
        //console.log({ title, description });
        //console.log(formData)
    };

    return (
        <>
            <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="border rounded-lg p-2"
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="border rounded-lg p-2"
                        />
                    </label>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
            {/* <div>
                <h3>Submitted Data:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div> */}
        </>
    );
}

