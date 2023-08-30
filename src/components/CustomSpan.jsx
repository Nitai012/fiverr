import React from 'react';
import { useState } from "react";

function CustomSpan({ str }) {

    return (
        <div>
            <span className='text-white border border-white rounded-md p-[0.3%] px-[5%] font-bold'>{str}</span>
        </div>
    );
}

export default CustomSpan;