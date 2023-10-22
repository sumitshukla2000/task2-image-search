import React , { useState } from 'react'
import image from '../../assets/demo.jpg'
import like from '../../assets/like.png'
import liked from '../../assets/liked.png'
import down from '../../assets/download.png'

const SearchedImages = (props) => {

    let data = null;
    data = (
        props.data.length >= 1 ? (
            props.data.map((data)=>(
                <div  key={data.id}className='mx-auto'>
                <div className='w-9/12 h-56 mx-auto mb-4 rounded overflow-hidden relative md:w-72' >
                <div className='h-full w-full'>
                    <img src={data.urls.full} className='w-full h-full' alt="" />
                </div>
                <div className='absolute inset-y-5 right-5  md:left-60'>
                    <button className='bg-gray-300 p-2 rounded hover:bg-gray-400' ><img src={like} className='h-4' alt="" /></button>
                </div>
                <div className='absolute bg-red-300 inset-y-40 w-9/12 w-full'>
                    <div className='relative flex px-4'>
                        <section className='text-sm text-white'>
                        <h3>Image by : <strong>{data.user.first_name}</strong></h3>
                        <h3>powered by <a href="https://unsplash.com/" className='underline' target="_blank">Unsplash</a></h3>
                    </section>
                    <div className='bg-gray-300 absolute right-5 bottom-10 sm:bottom-0 sm:right-10 rounded p-2 hover:bg-gray-400 md:ml-20'>
                        <a href={down}  download={data.urls.full}><img src={down} className='h-4 sm:h-6' alt="" /></a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
         : <p className='text-2xl w-full text-center font-main py-12'>!!  No image found  !!</p>
    )

    return(
        <div className='block flex-wrap py-4 px-2 md:flex'>
           {data}
        </div>
    )
}

export default SearchedImages;