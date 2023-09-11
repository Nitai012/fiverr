import Card3 from "../components/Card3";
import { React } from "react";
import "./HomePage4.css";
import first from "../../images/ForHP4/1.svg";

export default function HomePage4() {
    return (
        <div className="w-[100%] ">
            <div className="font-bold text-3xl text-black left-[5rem] top-[5rem] w-[100%]">You need it,we've got it</div>
            <ul className="w-[100%] ml-[2rem] pb-[5rem]  flex flex-row flex-warp left-[4rem] top-[10rem]">
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>
                <li className="li"> <Card3 img={first} title="Graphics & Design" /></li>

            </ul>
        </div>
    );

}