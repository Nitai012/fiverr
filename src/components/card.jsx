import React from "react";


function Card({ img, sellerName, sellerImg, lvl, description, rating, price }) {
    return (
        <>
            <div className="bg-transparent  w-[20rem] flex-col">
                <div className="">
                    <div>
                        <img src={img} className="w-[100%] border rounded-lg hover:cursor-pointer" alt="" />
                    </div>
                </div >
                <div className="">
                    <div className="flex place-content-between content-center items-center">
                        <div className="flex gap-3 items-center">
                            <div> <img src={sellerImg} className="border rounded-full mt-2" alt="" /></div>
                            <div className="font-semibold hover:underline hover:cursor-pointer">{sellerName}</div>
                        </div>
                        <div className="mt-2 mr-2 font-semibold text-[#404145]">{lvl}</div>
                    </div>
                    <button className="pt-[1.5rem] text-[#737477] text-left hover:underline ">{description}</button>
                    <div className="font-bold">&#9733; {rating}</div>
                    <div className="font-bold hover:cursor-pointer">From ₪{price}</div>
                </div>
            </div>
        </>
    )
};






export default Card;