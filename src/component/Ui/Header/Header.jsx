import React from 'react'

const Header = (props)=>{

    function sendDataToParent(data){
        props.onDataSend(data);
    }
    return(
        <div>
            <h1 className='text-xl font-main bg-gray-300 py-4 text-center md:text-3xl'>Welcome to Image Hunt!</h1>
        <div className='hidden flex space-x-12 text-xl justify-center py-6  bg-gray-200 text-gray-500 hover:text-black md:flex'>
            <button className='text-gray-500 font-avg duration-300 hover:text-black hover:shadow-xl' 
            onClick={()=>sendDataToParent('Animal')}>Animal</button>
            <button className='text-gray-500 font-avg duration-300 hover:text-black hover:shadow-xl'
            onClick={()=>sendDataToParent('Architecture')}>Architecture</button>
            <button className='text-gray-500 font-avg duration-300 hover:text-black hover:shadow-xl'
            onClick={()=>sendDataToParent('Computer')}>Computer</button>
            <button className='text-gray-500 font-avg duration-300 hover:text-black hover:shadow-xl'
            onClick={()=>sendDataToParent('Experimental')}>Experimental</button>
            <button className='text-gray-500 font-avg duration-300 hover:text-black hover:shadow-xl'
            onClick={()=>sendDataToParent('Fasion')}
            >Fashion</button>
        </div>
        </div>
    )
}   
export default Header;