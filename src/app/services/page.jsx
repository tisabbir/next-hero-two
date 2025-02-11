"use client"
import React, { useState } from 'react';


const ServicesPage = () => {
    // Use useState to manage the state of aboveText
    const [aboveText, setAboveText] = useState("Hello World");

    const handleClick = () => {
        // Update the state using setAboveText
        setAboveText("Clicked The Button");
    };

    return (
        <div className=''>
            <h1 className='text-center mt-6'>{aboveText}</h1>
            <button
                onClick={handleClick}
                className='block mx-auto bg-red-500 px-6 py-2 rounded-lg text-white mt-6'
            >
                Click Me
            </button>
        </div>
    );
};

export default ServicesPage;