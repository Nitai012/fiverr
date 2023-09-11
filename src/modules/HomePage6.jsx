import AdCard from "../components/AdCard";
export default function HomePage6() {
    return (
        <div className="w-[100%] h-[200%] flex flex-col ml-[15%]">
            <div className="flex flex-row my-[5%] w-[100%] h-[100%] items-center">
                <div className="w-[40%] h-[100%]">
                    <img className="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" />
                </div>
                <div >
                    <div className="flex content-center items-center w-[100%]">
                        <h5 className="text-lg text-gray-500 font-semibold">Kay Kim, Co-Founder |</h5>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png" alt="" />
                    </div>
                    <div>
                        <p className="block font-custom2 text-3xl ">"It's extremely exciting that Fiverr has freelancers <br />from all over the world — it broadens the talent pool. <br />One of the best things about Fiverr is that while we're <br />sleeping, someone's working."</p>
                    </div>
                </div>
            </div>
            <div className="">
                <AdCard title2="Make an incredible logo in minutes" buttontext="Try Fiverr Logo Maker" decription="Pre-designed by top talent. Just add your touch." img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1112,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" />
            </div>
        </div>
    );
}