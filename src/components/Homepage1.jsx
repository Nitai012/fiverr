import React from 'react'
import { useState } from 'react'
import CustomSpan from './CustomSpan';
import Navbar from './Navbar'
import Rec from './recommendation'
function Homepage1() {
    return (
        <>
            <div className="bg-custom-green w-[100%] h-[52rem] mt-0 " >
                <Navbar />
                <container>
                    <div className=" h-[90%] ml-[20rem] w-[40%] ">
                        <div className="text-white pt-[10rem]">
                            <h1 className="text-5xl font-bold whitespace-pre-wrap font-serif'>  ">Find the Right freelance <br /> services Right away</h1>
                        </div>
                        <div>
                            <div className="flex pt-4">
                                <input className="border-2 border-white rounded-l-md  w-[30rem] h-[4rem] text-gray-600" type="text" placeholder="Search for any services..." />
                                <button className="bg-green-500 text-black px-4 py-2 rounded-r-md w-[4rem] h-[4rem]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
                                </button>
                            </div>
                            <div className='text-white font-bold '>
                                <ul className='whitespace-nowrap flex list-none mt-[1.5%]'>
                                    <li> popular:</li>
                                    <li className='mx-[0.5rem]'>
                                        <CustomSpan str="Web Design" />
                                    </li>
                                    <li className='mx-[0.5rem]'>
                                        <CustomSpan str="WordPress" />
                                    </li>
                                    <li className='mx-[0.5rem]'>
                                        <CustomSpan str="Logo Design" />
                                    </li>
                                    <li className='mx-[0.5rem]'>
                                        <CustomSpan str="AI Service" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </container>
            </div >
            <div className='w-[100%] h-[6.2rem] bg-[#F5F5F5] justify-center items-center flex'>
                <span className='text-[#b5b6ba] font-semibold pr-20 '>Trusted by :</span>
                <ul className='flex'>
                    <li className='px-5'>
                        <img src="../../images/meta.png" alt="" />
                    </li>
                    <li className='px-5'>
                        <img src="../../images/google.png" alt="" />
                    </li>
                    <li className='px-5'>
                        <img src="../../images/netflix.png" alt="" />
                    </li>
                    <li className='px-5'>
                        <img src="../../images/pandg.png" alt="" />
                    </li>
                    <li className='px-5'>
                        <img src="../../images/paypal.png" alt="" />
                    </li>
                </ul>
            </div>

        </>
    );

}


export default Homepage1;