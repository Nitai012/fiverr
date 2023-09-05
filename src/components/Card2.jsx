import React from "react";

function Card2({ img, str1, str2 }) {
    let url = "bg-[url(\'" + img + "\')]";
    return (
        <>
            <div className={url} />
        </>
    );
}

export default Card2;