import React, { useState } from 'react'
import { RiListRadio } from 'react-icons/ri';
import { BsChevronCompactDown } from 'react-icons/bs';
import { AiOutlineBars, AiTwotoneAppstore } from 'react-icons/ai';
import FilterSection from './FilterSection';

const FilterCars = () => {
    const [filterSection, setFilterSection] = useState(false)
    const [sortSectiion, setSortSectiion] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between px-2'>
                {/* filter and sort by section */}
                <div className='flex gap-2'>
                    <div className='flex cursor-pointer items-center group/filter hover:bg-[#f38102] hover:text-white hover:border-white transition-all duration-200 active:bg-orange-600 active:text-white gap-1 text-sm border-[1px] p-1 rounded border-gray-600/50 text-gray-600' onClick={()=>{setFilterSection(!filterSection)}}>
                        <RiListRadio className='text-[#f38102] group-hover/filter:text-white active:text-white'/>
                        <p>Filters</p>
                    </div>
                    <div className='flex items-center cursor-pointer group/sort hover:bg-[#f38102] hover:text-white hover:border-white transition-all duration-200 active:bg-orange-600 active:text-white gap-1 text-sm border-[1px] p-1 rounded border-gray-600/50 text-gray-600' onClick={()=>{setSortSectiion(!sortSectiion)}} >
                        <p>Sort By</p>
                        <BsChevronCompactDown className='text-[#f38102] group-hover/sort:text-white active:text-white' />
                    </div>
                </div>

                {/* block listing or detailed listing  */}
                <div className='flex text-lg'>
                    <div className='p-2 hover:text-[#f38102] cursor-pointer'>
                        {/* display car data in single line  */}
                        <AiOutlineBars />
                    </div>
                    <div className='p-2 hover:text-[#f38102] cursor-pointer'>
                        {/* display car data in double line  */}
                        <AiTwotoneAppstore />
                    </div>
                </div>
            </div>

            {/* filter section  */}
            <div className={`absolute bg-black/30 bottom-0 h-0 w-full flex overflow-hidden items-center z-50 justify-center transition-all duration-500 ease-in-out ${filterSection?"h-full":""}`}>
                <div className='bg-red-500 w-11/12'>
                <FilterSection/>
                </div>
            </div>

              {/* sort by section */}
            <div className={`absolute bg-black/30 bottom-0 h-0 w-full flex overflow-hidden items-end z-50 justify-center transition-all duration-500 ease-in-out ${sortSectiion?"h-full":""}`}onClick={()=>{setSortSectiion(!sortSectiion)}} >

                    <div className='bg-white min-h-[14rem] w-full'>
                            <div className='border-b-2 p-2 text-black/40 font-medium tracking-wider border-black/10'>
                                <h6>SORT BY</h6>
                            </div>
                            <div className='p-4 font-medium flex flex-col justify-between gap-2 text-black/80'>
                                <label htmlFor='sort' className='flex items-center justify-between accent-[#da7808f9]'>Relevance <input type='radio' name='sort' /> </label>
                                <label htmlFor='sort' className='flex items-center justify-between accent-[#da7808f9]'>Popularity <input type='radio' name='sort' /> </label>
                                <label htmlFor='sort' className='flex items-center justify-between accent-[#da7808f9]'>Price -- Low to High <input type='radio' name='sort' /> </label>
                                <label htmlFor='sort' className='flex items-center justify-between accent-[#da7808f9]'>Price -- High to Low <input type='radio' name='sort' /> </label>
                                <label htmlFor='sort' className='flex items-center justify-between accent-[#da7808f9]'>Newest First <input type='radio' name='sort' /> </label>
                            </div>
                    </div>

            </div>

        </>

    )
}

export default FilterCars