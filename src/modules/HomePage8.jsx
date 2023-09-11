import Card4 from "../components/card4";
import AdCard from "../components/AdCard";
export default function HomePage8() {
    return (
        <div className="h-[150%] w-[100%] ">
            <div className="flex flex-col ml-[15%]">
                <div className="font-bold text-4xl mt-[5%]">Guides to help you grow</div>
                <div className="flex gap-[1%] my-[3%]">
                    <Card4 img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" by="Start a side business" />
                    <Card4 img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" by="Start a side business" />
                    <Card4 img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" by="Start a side business" />
                </div>
            </div>
            <div className="my-[5%] ml-[10%]">
                <AdCard title1="Suddenly it's all so doable." buttontext="Join Fiverr" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" />
            </div>
        </div>
    );
}