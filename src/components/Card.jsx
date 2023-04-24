import React from "react";

const Card = ({ title, description, imageUrl, link }) => {

    return (
        <div className="card max-w-sm bg-zinc-950/80 w-full mx-auto rounded-lg overflow-hidden shadow-md mb-4 relative flex flex-col justify-between">
            <div className="card-image h-48 w-full" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="card-conten p-6">
                <h2 className="text-xl font-bold mb-3 font-metalMania">{title}</h2>
                <p className="text-gray-500 font-metal">{description}</p>
            </div>
            <div className="h-10 font-metalMania text-red-600 flex items-center justify-center w-full border-b-2 bg-black/40">Details</div>
        </div>
    );
};

export default Card;
