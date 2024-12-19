"use client";

import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({});
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    const newFormData = {
        name,
        age
    }
        setFormData(newFormData);
        console.log(newFormData);
        //console.log({ name, age });
        console.log(formData)
    };

    return (
        <>
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="border rounded-lg p-2"
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="border rounded-lg p-2"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
        <div>
        <h3>Submitted Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
    </>
    );
}

