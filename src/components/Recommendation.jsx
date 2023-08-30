import React from 'react';
import { useState } from "react";


function Recommendation({ person }, { bussnes }) {
    return (
        <div className='border border-white flex '>
            <span className='text-white text-bold text-sm'>{person}</span>
            <span className='text-white text-bold text-md'>{bussnes}</span>
        </div>
    );
}

export default Recommendation;