

import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductCarousel from './components/Carsouel/ProductCarousel'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>

    <div className='h-[100vh] px-10 py-5 bg-[#FFE9E2]'>
      <Navbar/>
      <div className='h-[60%] flex justify-center items-center relative pt-20'>
         <img className='h-40 absolute  z-1 left-1 rotate-350' src="./images/ted.png" alt="" />
         <img className='h-40 absolute  z-1 right-1 rotate-20' src="./images/rabbit.png" alt="" />
         {/* <img className='h-60 absolute  z-1 btm-200 rotate-300' src="./images/fox.png" alt="" /> */}
       
        <h1 className='text-8xl text-white font-bold absolute  z-1 ml-0.5 mt-1.5'>Hand-Made With Love</h1>
        </div>
    </div>
    <div className='w-auto h-[100vh] px-10 py-5 bg-[#FFE9E2] '>
      <div className=' h-[90%] p-10 bg-[#FFFAEC] border-solid-white rounded-2xl '>
       
  <h2 className="text-[#8A553F] text-4xl font-bold text-center m-[1em] ">Our Products</h2>
  
<ProductCarousel/>
</div>
    </div> 


   <Footer/>
    </>
  )
}

export default App
