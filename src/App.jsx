
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage1 from './components/Homepage1'
import CustomSpan from './components/CustomSpan'
import Rec from './components/recommendation'
import Card from './components/card'
function App() {
  return (
    <Card img="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290707552/original/74d6e5a96305b05cca94478fa82f207412c8b08d.png" sellerImg="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c8c238eaee493a83aee18579516fa240-1384966731671013981966/JPEG_20221214_160300_8911244964000104418.jpg" sellerName="munikhan684" lvl="Level 2" description="I will develop responsive wordpress website..." rating="5.0" price="317" />
  )
};

export default App
