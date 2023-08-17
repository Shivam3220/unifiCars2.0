import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillTelephoneFill, BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
    const [slider, setSlider] = useState(false)
    return (
        <nav className='w-full bg-white border-b-[1px] mb-4 border-black/10'>
            <div className='max-w-[1720px] sm:w-10/12  mx-auto flex justify-between items-center'>
                <div>
                    <a href='https://www.unificars.com/'> <img src='./logo.png' className='w-36' /> </a>
                </div>
                <div>
                    <div className='p-4' onClick={() => setSlider(!slider)}><RxHamburgerMenu className='block text-xl font-semibold xl:hidden' /></div>
                    <ul className={`hidden font-bold text-base items-center xl:flex space-x-6`}>

                        <a href='https://www.unificars.com/sell-used-car' className='underline underline-offset-8 hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102]'>SELL USED CAR</a>
                        <a href='https://www.unificars.com/buy-used-cars' className='hover:text-[#f38102] active:text-orange-600'>UNIFI ASSURED CARS</a>
                        <Link href='/cars-listing' className='hover:text-[#f38102] active:text-orange-600'>LISTED CARS</Link>
                        <a href='https://www.unificars.com/about' className='hover:text-[#f38102] active:text-orange-600'>ABOUT US</a>
                        <a href='https://www.unificars.com/contact' className='hover:text-[#f38102] active:text-orange-600'>CONTACT</a>
                        <div className='text-center border-l-2 pl-4 border-[#f38102] '>
                            <p className='text-sm text-[#6a6a6a]'>Call Us At</p>
                            <a href="tel:9911771977" className='text-[#f38102] flex items-center'><BsFillTelephoneFill />+91 9911771977</a>
                        </div>
                    </ul>


                    {/* navbar for small devices */}
                    <ul className={`text-base absolute w-0 opacity-0 h-full bg-black/60 overflow-hidden right-0 bottom-0 transition-all duration-700 xl:hidden text-white ${slider ? "w-full opacity-100" : ""}`}>
                        <div className='bg-[#202020] h-full w-64 right-0 absolute flex flex-col space-y-2 font-bold tracking-wider'>
                            <div className='absolute right-2 text-2xl top-4 p-4' onClick={() => setSlider(!slider)}> <AiOutlineClose />
                            </div>
                            <li className='px-4'> <a href='https://www.unificars.com/' onClick={()=>{setSlider(false)}} > <img src='./whitelogo.png' className='w-36' /> </a></li>
                            <li className='px-4 border-white/20 py-2 border-b-[1px] border-t-[1px] '> <a href='https://www.unificars.com/sell-used-car' onClick={()=>{setSlider(false)}} className='text-[#f38102]' >SELL USED CAR</a></li>
                            <li className='px-4 border-white/20 py-2 border-b-[1px]'> <a href='https://www.unificars.com/buy-used-cars' onClick={()=>{setSlider(false)}} >UNIFI ASSURED CARS</a></li>
                            <li className='px-4 border-white/20 py-2 border-b-[1px]'> <Link href='/cars-listing' onClick={()=>{setSlider(false)}} >LISTED CARS</Link></li>
                            <li className='px-4 border-white/20 py-2 border-b-[1px]'> <a href='https://www.unificars.com/about' onClick={()=>{setSlider(false)}} >ABOUT US</a></li>
                            <li className='px-4 border-white/20 py-2 border-b-[1px]'> <a href='https://www.unificars.com/contact' onClick={()=>{setSlider(false)}} >CONTACT</a></li>
                            <div className='text-center'>
                                <p className='text-sm text-[#6a6a6a]'>Call Us At</p>
                                <a href="tel:9911771977" className='text-[#f38102] flex items-center justify-center'><BsFillTelephoneFill />+91 9911771977</a>
                            </div>
                            <div className='flex justify-center gap-4 text-white'>
                                <BsFacebook className='hover:text-blue-500' />
                                <BsTwitter className='hover:text-blue-500' />
                                <BsLinkedin className='hover:text-blue-500' />
                                <BsInstagram className='hover:text-red-500' />
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Navbar