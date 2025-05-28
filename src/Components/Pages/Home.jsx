import React from 'react'
import Header from '../Header/Header'
import Banner_1 from '../Images/Banner_1.jpeg'
import Image1 from '../Images/aboutimg1.jpeg'

import Prodimg1 from '../Images/Prodimg1.jpeg'
import Prodimg2 from '../Images/Prodimg2.jpeg'
import Prodimg3 from '../Images/Prodimg3.jpeg'
import Prodimg4 from '../Images/Prodimg4.jpeg'
import Prodimg5 from '../Images/Prodimg5.jpeg'
import Prodimg6 from '../Images/Prodimg6.jpeg'
import Prodimg7 from '../Images/Prodimg7.jpeg'
import Prodimg8 from '../Images/Prodimg8.jpeg'





export default function Home() {


const products = [
  {
    image: Prodimg1,
    title: "Classic Abayas",
    color: "Cherry Red",
    price: "20 BD",
  },
  {
    image: Prodimg2,
    title: "Modern Abayas",
    color: "Olive Green",
    price: "25 BD",
  },
  {
    image: Prodimg3,
    title: "Elegant Abayas",
    color: "Jet Black",
    price: "30 BD",
  },
  {
    image: Prodimg4,
    title: "Premium Abayas",
    color: "Royal Blue",
    price: "35 BD",
  },
  {
    image: Prodimg5,
    title: "Everyday Abayas",
    color: "Desert Sand",
    price: "18 BD",
  },
  {
    image: Prodimg6,
    title: "Formal Abayas",
    color: "Charcoal Grey",
    price: "27 BD",
  },
  {
    image: Prodimg7,
    title: "Luxe Abayas",
    color: "Pearl White",
    price: "40 BD",
  },
  {
    image: Prodimg8,
    title: "Embroidered Abayas",
    color: "Shiny Cream",
    price: "32 BD",
  },
];


  return (
    <>
    <div>
        <Header/>


<div className="relative w-full">
  <img src={Banner_1} alt="banner" className="w-full h-[300px] object-cover" />
  <button className="absolute top-[80%] left-1/2 transform -translate-x-1/2  bg-[#55142A] text-white px-5 py-2 rounded hover:bg-[#401020]">
    Shop Now
  </button>
</div>


<div className='flex gap-5 p-15 items-center md:flex-row px-10 py-16  bg-[#FFF3E3]'>
<div className='w-full md:w-1/2 text-center md:text-left'>  
 <h1 className='text-5xl font-bold text-[#55142A] mb-4'>Discover Elegance in Every Abaya Style</h1>
</div>

<div className='flex flex-col justify-center  w-full md:w-1/2 text-1xl gap-6 items-start '>
  <span className='text-[#55142A] '>Explore our latest collection that beautifully blends tradition with modern elegance.Each Abaya is crafted to celebrate modesty while making a bold fashion statement</span>
<div className='flex gap-6'>
  <button className='bg-[#55142A] text-white px-5 py-2 rounded hover:bg-[#401020]'>Shop</button>
  <button className='bg-[#55142A] text-white px-5 py-2 rounded hover:bg-[#401020]'>Login </button>
</div>
</div>
</div>

{/* brand story */}

<div className='flex bg-[#55142A]  text-[#DABF95] px-6 py-12 flex-col-reverse lg:flex-row md:gap-10 gap-5 items-center'>

<div className='lg:w-1/2 w-full space-y-6 text-center lg:text-left'>
<h2 className='text-4xl  md:text-5xl font-semibold leading-tight'>Our Journey: Embracing Modesty and Luxury</h2>
<p className= ' leading-relaxed text-base md:text-lg'>At our core we celebrate the beauty of modest fashion,interwining tradition with modern elegance.Our Commitment
  to luxury is reflected in every carefully crafted piece, designed to empower women while honoring their values.
</p>
</div>

<div className='w-full lg:w-1/2  flex justify-center'>
  <img src={Image1} alt='image-brand-story' className='object-contain w-[300px] sm:w-[350px]  md:w-[400px] xl:w-[400px] max-w-full rounded-xl shadow-2xl border-4 border-[#DABF95] transition-transform duration-300 hover:scale-105'/>
</div>


</div>

{/* signature collectionsss */}


<div className='flex bg-[#FFF3E3] flex-col flex-wrap px-6 items-center justify-center py-3'> 

<div className='text-center mb-10'>
  <h2 className='text-3xl md:text-4xl font-bold text-[#55142A]'>Our Signature Collections</h2>
  <span className='text-[#55142A] mt-2 text-lg'>Explore our exquiste collection of Abayas</span>
</div>


{/* products */}

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl'>



{products.map((product, index) => (
  <div key={index} className="bg-[#55142A] rounded-md shadow-md p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
    <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-sm mb-4" />
    <div className="text-center space-y-1 mb-4">
      <h3 className="text-xl font-semibold text-[#DABF95]">{product.title}</h3>
      <p className="text-[#DABF95]">{product.color}</p>
      <p className="text-[#DABF95] font-bold">{product.price}</p>
    </div>
    <button className="bg-[#DABF95] text-[#55142A] px-5 py-2 rounded hover:bg-[#401020]">
      Add to Cart
    </button>
  </div>
))}
</div>
</div>




<div className="bg-[#55142A] py-16 px-6 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-[#DABF95] mb-12">
    "Discover the Luxurious Fabrics Behind Our Exquisite Abaya Collection"
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="space-y-4">
      <div className="text-4xl text-[#FFF3E3]">
        <i className="fas fa-cube"></i>
      </div>
      <h3 className="text-lg font-semibold text-[#FFF3E3]">
        Experience the Elegance of Our<br /> Premium Fabric Choices
      </h3>
      <p className="text-[#DABF95] text-sm">
        Our Abayas are crafted from the finest materials, ensuring both comfort and style.
      </p>
      
    </div>

    <div className="space-y-4">
      <div className="text-4xl text-[#55142A]">
        <i className="fas fa-cube"></i>
      </div>
      <h3 className="text-lg font-semibold text-[#FFF3E3]">
        Luxurious Silk: The Ultimate<br /> Choice for Timeless Elegance
      </h3>
      <p className="text-[#DABF95] text-sm">
        Silk offers a soft touch and a beautiful drape, perfect for any occasion.
      </p>
      
    </div>

    <div className="space-y-4">
      <div className="text-4xl text-[#55142A]">
        <i className="fas fa-cube"></i>
      </div>
      <h3 className="text-lg font-semibold text-[#FFF3E3]">
        Breathable Cotton: Perfect for<br /> Everyday Comfort and Style
      </h3>
      <p className="text-[#DABF95] text-sm">
        Our cotton Abayas provide a lightweight feel while maintaining elegance and modesty.
      </p>
      
    </div>
  </div>
</div>



<div className="bg-[#FFF3E3] py-16 px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="text-3xl font-bold text-[#55142A] mb-2">Customer Testimonials</h2>
  <p className="text-gray-600 mb-12">The elegance and quality are unmatched.</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="space-y-4">
      <div className="text-yellow-500 text-xl">★★★★★</div>
      <p className="text-lg font-medium text-[#55142A]">"Wearing these Abayas makes me feel truly special."</p>
      <div className="flex flex-col items-center space-y-1">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">A</div>
        <p className="text-sm font-semibold text-[#55142A]">Amina Al-Farsi</p>
        <p className="text-sm text-gray-600">Fashion Blogger</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="space-y-4">
      <div className="text-yellow-500 text-xl">★★★★★</div>
      <p className="text-lg font-medium text-[#55142A]">"The craftsmanship is exquisite and timeless."</p>
      <div className="flex flex-col items-center space-y-1">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">S</div>
        <p className="text-sm font-semibold text-[#55142A]">Sara Khan</p>
        <p className="text-sm text-gray-600">Designer, Boutique</p>
      </div>
    </div>

    <div className="space-y-4">
      <div className="text-yellow-500 text-xl">★★★★★</div>
      <p className="text-lg font-medium text-[#55142A]">"These Abayas are a perfect blend of tradition and style."</p>
      <div className="flex flex-col items-center space-y-1">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">F</div>
        <p className="text-sm font-semibold text-[#55142A]">Fatima Rashid</p>
        <p className="text-sm text-gray-600">Customer, Retailer</p>
      </div>
    </div>
  </div>
</div>


<div className="bg-[#55142A]  border-t py-16 px-6 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  
  <div>
    <div className="text-3xl mb-3">✉️</div>
    <h3 className="font-bold text-[#FFF3E3] text-lg mb-1">Email</h3>
    <p className="text-sm text-[#DABF95] mb-1">We’d love to hear from you! Reach out with any questions.</p>
    <a href="mailto:info@abayafashion.com" className="text-[#FFF3E3]  underline text-sm">info@abayafashion.com</a>
  </div>

  <div>
    <div className="text-3xl mb-3">💬</div>
    <h3 className="font-bold  text-[#FFF3E3] text-lg mb-1">Live chat</h3>
    <p className="text-sm text-[#DABF95] mb-1">Connect with us instantly for any assistance or inquiries.</p>
    <a href="#" className="text-[#FFF3E3]  underline text-sm">Start new chat</a>
  </div>

  <div>
    <div className="text-3xl mb-3">📞</div>
    <h3 className="font-bold text-[#FFF3E3] text-lg mb-1">Phone</h3>
    <p className="text-sm text-[#DABF95] mb-1">Call us for immediate support or questions about our products.</p>
    <a href="tel:+15551234567" className="text-[#FFF3E3]  underline text-sm">+973 36378379</a>
  </div>

  <div>
    <div className="text-3xl mb-3">📍</div>
    <h3 className="font-bold  text-[#FFF3E3] text-lg mb-1">Office</h3>
    <p className="text-sm text-[#DABF95] mb-1">Visit us at our headquarters for personalized service and consultations.</p>
    <a href="#" className="text-[#FFF3E3]  underline text-sm">363 Manama Bahrain</a>
  </div>
</div>






    </div>
    </>
  )
}
