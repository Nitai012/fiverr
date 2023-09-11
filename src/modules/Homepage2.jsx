
import React from 'react'
import Card from '../components/card'
import Card2 from '../components/Card2'

function Homepage2() {
    return (
        <div className=" w-[100%] items-stretch justify-center flex-col shadow-sm shadow-gray-100 ">
            <div className='ml-[10rem]'>
                <div className='font-bold font-sans text-3xl my-10 '>Recently Viewed & More</div>
                <div className=' '>
                    <cotainer className="flex-row inline-flex ">
                        <div className='mx-[1rem]'>
                            <Card img="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290707552/original/74d6e5a96305b05cca94478fa82f207412c8b08d.png" sellerImg="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c8c238eaee493a83aee18579516fa240-1384966731671013981966/JPEG_20221214_160300_8911244964000104418.jpg" sellerName="munikhan684" lvl="Level 2" description="I will develop responsive wordpress website..." rating="5.0" price="317" />
                        </div>
                        <div className='mx-[1rem]'>
                            <Card img="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132799274/original/274f30d674f61fbfbf13c7f9af959de615624cd1.png" sellerImg="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/346148782e5b130fc949ced7408cb589-348513771690042162.3347402/4A932C85-6586-4B8B-A599-B70B2B41E0A5" sellerName="roylevy" description="I will build a high performance responsive website using..." rating="5.0" price="3,991" />
                        </div>
                        <div className='mx-[1rem]'>
                            <Card img="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262515591/original/54ac37a291f28a4045fea01735d53d7905ba9082.png" sellerImg="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b58f3f6e65ad14c458ce321f753ca51c-1687637604119/3aa0da69-1d57-4339-a3db-19f7ce0b783c.png" sellerName="muneebshah786" description="I will develop your wordpress website with elementor pro" lvl="Level 1" rating="5.0" price="119" />
                        </div>
                        <div className='mx-[1rem]'>
                            <Card img="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117662248/original/72039b9c3252e1568a8b270e90a1d1a8d48ca6dd.png" sellerImg="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6f31da8acf9180addf5136a8b8cf3703-719637771684324724.8292289/2AF5C92C-8307-4735-B71B-15FC9AED7C62" sellerName="wordpres_skils" lvl="Level 2" description="I will design and develop responsive wordpress website..." rating="5.0" price="655" />
                        </div>
                    </cotainer>
                </div>
            </div>
            <div className='ml-[10rem]'>
                <div>
                    <div className='font-bold font-sans text-3xl my-10  flex-row'>Popular services</div>
                    <div className='flex mx-[0.5rem]'>
                        <Card2 str1="hello" str2="hello again" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png" />
                        <Card2 str1="hello" str2="hello again" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" />
                        <Card2 str1="hello" str2="hello again" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png" />
                        <Card2 str1="hello" str2="hello again" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png" />
                        <Card2 str1="hello" str2="hello again" img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage2;