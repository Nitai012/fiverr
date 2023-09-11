




export default function Card3({ img, title }) {
    return (
        <>
            <div className="w-[3.5rem] h-[3.5rem] flex-col relative">
                <img src={img} alt="" />
                <div className="text-center text-black text-md font-semibold inline-grid w-[10rem]  absolute left-[-3.5rem]">{title}</div>
            </div>
        </>
    );
}