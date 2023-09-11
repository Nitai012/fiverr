

export default function Card4({ img, profileImg = 'empty', profileName = 'empty', by }) {
    if (profileName != 'empty' && profileImg != 'empty') {
        return (
            <div className="flex flex-col w-[18%]  ">
                <div className="w-[100%] h-[80%] ">
                    <img className="ease-out duration-100 hover:opacity-80 cursor-pointer" src={img} alt="" />
                </div>
                <div className="w-[100%] h-[5rem] items-center content-center flex bg-white">
                    <div>
                        <img src={profileImg} className="border rounded-full ml-[10%] cursor-pointer " alt="" />
                    </div>
                    <div className="ml-[10%]">
                        <div className="font-bold">{profileName}</div>
                        <div className="text-sm font-bold text-[#95979D]">{by}</div>
                    </div>
                </div>
            </div>
        );
    } else if (img != '' && by != '') {
        return (
            <div className="flex flex-col w-[22%]  ">
                <div className="w-[100%] h-[90%] ">
                    <img className="ease-out duration-100 hover:opacity-80 cursor-pointer" src={img} alt="" />
                </div>
                <div className="w-[100%] h-[2rem] items-center content-center flex bg-white">
                    <div className="font-bold text-md text-[#424347]">{by}</div>
                </div>
            </div>
        );
    }
}