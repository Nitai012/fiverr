import React from "react";

function Card2({ img, str1 = 'no title', str2 = 'empty' }) {
    return (
        <>
            <div className="relative flex w-[17rem] mx-[1rem] mb-[5rem]">
                <img className=" h-[23rem] w-[17rem] ease-out duration-100 mr-[0.5rem] hover:opacity-80  border rounded-md" src={img} alt="" />
                <div className="text-white pl-[2%] absolute text-left">
                    <h1 className="text-2xl font-bold">{str1}</h1>
                    <p className="text-lg">{str2}</p>
                </div>
            </div>
        </>
    );
}

export default Card2;