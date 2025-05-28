import React from 'react'
import { FaHeart, FaUser, FaShoppingCart,FaSearch } from 'react-icons/fa'
import LogoImage from '../Images/Logoimage.jpeg'


export default function Header() {
  return (
<>
<div className=' bg-[#55142A] w-full h-13 flex flex-col md:flex-row flex-wrap items-center space-x-20  justify-between px-6 p-3'> 
    

<div> <img src={LogoImage} alt="Noor Logo" className="h-10 md:h-14 lg:h-8 w-auto object-contain" /></div>

<div className='relative w-64 md:w-80'>
     <FaSearch className="absolute left-90 top-1/2 transform -translate-y-1/2 text-[#FFF3E3]" />
    <input type='text' id='search' placeholder='Search Collections..' className='w-64 md:w-100 border border-[#FFF3E3] text-[#FFF3E3]  bg-transparent placeholder-[#FFF3E3] px-2 py-1 rounded'/>
</div>
<div className='flex items-center gap-4 text-xl'>
 <FaHeart className="text-[#FFF3E3]" title="Favorites" />
  <FaUser  className="text-[#FFF3E3]"title="Account" />
  <FaShoppingCart className="text-[#FFF3E3]"title="Cart" />

</div>

</div>

<div className='flex flex-wrap  h-13 bg-[#FFF3E3]/60 text-[#55142A] justify-center items-center gap-10  text-sm md:text-base py-2'>

<span>New Arrival </span>
<span> Abayas</span>
<span>Hijabs</span>
<span>Thobes</span>
<span>Kids</span>
<span>Accessories</span>
<span>Gifts</span>
</div>

</>
)
}
