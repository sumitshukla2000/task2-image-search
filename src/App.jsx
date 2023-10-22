import React , { useState , useEffect , useRef } from 'react'
import Layout from './component/Layout/Layout'
import Header from './component/Ui/Header/Header'
import bg from './assets/bgImage.jpg';
import search from './assets/search.png';
import SearchedImages from './component/SearchedImages/SearchedImages';
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
// import Search from './container/Search/Search'


// XdRoJJ5euEFk4StRQ_h0SWbtn6wfJyfvUOnKF31MhN0

const API_URL = 'https://api.unsplash.com/search/photos/?client_id=XdRoJJ5euEFk4StRQ_h0SWbtn6wfJyfvUOnKF31MhN0&';
function App() {
  const [imgData , setImgData] = useState([]);
  const [inputValue , setInputValue] = useState('');
  const [loading , setLoading] = useState(true)
  const inputRef = useRef(0)

  const getImg = async (title) => {
    // const response = await fetch(`${API_URL}&query=${title}`)
    // const data = await response.json();
    // setImgData(data.results);
    // setLoading(prev=>!prev)

    fetch(`${API_URL}&query=${title}`)
    .then(res => {
      setLoading(false)
      return res.json();
    })
    .then(data => setImgData(data.results))
    inputRef.current.value = "";
    }

    const changeHandler =(event)=>{
      setInputValue(event.target.value);
      // console.log(inputValue)
    }

    function handleDataFromChild(data){
      getImg(data);
    }

    useEffect(() => {
        getImg();
    },[])
  return (
      <div>
        <Layout>
      <Header onDataSend={handleDataFromChild} />
      <section style={{ boxSizing: "border-box" }}>
            <div className='relative'>
                {/* image */}
                <div>
                    <img src={bg} className='h-72 w-full object-cover opacity-80 md:h-96' alt="bg_img" />
                </div>
                <div className='p-12 font-avg font-primary absolute inset-y-0 md:py-12 md:px-24'>
                    <h1 className='text-3xl py-2 font-bold md:text-6xl md:py-4'>Image Hunt</h1>
                    <h3 className='text-xl font-bold md:text-4xl'>Find Any Image You Want!</h3>
                </div>
                <div className='mx-auto absolute inset-y-52 w-full md:inset-x-24 md:w-1/2 md:m-0'>
                    <div className='mx-auto relative w-9/12 flex md:w-full'>
                        <div className='w-full font-avg text-md'>
                            <input
                             type="text"
                              className='rounded w-full px-6 py-2 border-0 focus:outline-none' 
                              onChange={(event)=>changeHandler(event)} placeholder='Search Image'
                              ref={inputRef} />
                        </div>
                        <div className='py-2 absolute right-0 cursor-pointer px-4'     onClick={() => getImg(inputValue)}>
                            <img src={search} alt="img" className='h-6' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {loading ? (<p className='text-3xl text-center font-main py-12'>Loading Images!</p>) : <SearchedImages data={imgData}/>}
        <footer className='block flex-wrap justify-evenly w-full bg-slate-200 py-6 md:flex md:space-x-48'>
          <p className='text-2xl text-center font-primary p-3 font-bold'>Created By <a href="https://github.com/sumitshukla2000" className='text-indigo-700' target="_blank">@Sumit_Shukla ❤️</a></p>
          {/* social */}
          <div className='flex justify-center'>
            <div className='p-3 cursor-pointer rounded-full hover:shadow-xl'>
              <img src={linkedin} className='h-8 w-8' alt="" />
            </div>
            <div className='p-3 cursor-pointer rounded-full hover:shadow-xl'>
            <img src={instagram} className='h-8 w-8' alt="" />
            </div>
            <div className='p-3 cursor-pointer rounded-full hover:shadow-xl'>
            <img src={twitter} className='h-8 w-8' alt="" />
            </div>
          </div>
        </footer>
        </Layout >
     </div>
  )
}

export default App
