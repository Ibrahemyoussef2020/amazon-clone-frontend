import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchData } from '../../apis'
import { compeletPriceSerial } from '../../utilities'

const ProductDetailsPoster = ({part}) => {
    const [posters , setPosters] = useState([])
    const [poster , setPoster] = useState({})
    const [discount,setDiscount] = useState(0)


    useEffect(()=>{
        fetchData(part,setPosters)
        setPoster(posters[0])

        const  discountPer =  posters.length ? 100 -(poster?.price / poster?.oldPrice * 100) : 0;
        setDiscount(Math.ceil(discountPer))
    },[poster,posters.length])


    if(!poster) return <h2>Loading.....</h2>


  return (
    <div className='flex !flex-nowrap justify-between items-center py-2 px-3 border border-solid border-[#ccc]'>
        <article className='flex !flex-nowrap items-center gap-2 lg:gap-6'>
            <img loading="lazy" src={`/${poster?.image}.webp`} alt={poster?.brand} className='max-h-[50px]' />
            <p className=' text-lg max-w-[250px]'>{poster?.title} {poster?.description?.slice(0,30)}</p>    
        </article>

        <article className='hidden md:flex items-end gap-2 pr-4'>
            <span className='py-1 px-2 bg-red-800  !whitespace-nowrap font-semibold text-white'>
                {discount} % off
            </span>
            <span className='text-sm text-red-800  !whitespace-nowrap font-semibold'>
                White Friday <br/> Deal
            </span>
        </article>

        <article className='hidden sm:flex items-center lg:pr-24'>
            <div className="flex !flex-nowrap text-red-700">
                <sub className="text-[12px] inline-block mt-2">EGP</sub>
                <span className="text-[20px] font-light">500</span>
                <sub className="text-[12px] inline-block mt-2">00</sub>
            </div>
            <span className="ml-1 mt-2 text-[#555]  !whitespace-nowrap ">List Price: 
                <span className="line-through  !whitespace-nowrap"> EGP 1,600</span>
            </span>
            <p className="a-size-base mb-0 ml-1 !whitespace-nowrap">
                <i className="fa-solid fa-check text-[#feac03] font-extrabold"></i>
                <span className="text-[#1ba1ff] font-bold">prime</span>
            </p>
        </article>
    </div>
  )
}

export default ProductDetailsPoster