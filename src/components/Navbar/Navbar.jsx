
import "./Navbar.css"
import SearchBox from "../SearchBox"
const Navbar = () => {
  return (
    <>
    <nav className='h-[15vh] w-auto px-10 bg-[#FFFAEC] border-solid-white rounded-2xl flex justify-between items-center'>
     <span className="flex items-center">
        <img className='h-29' src="/images/logo.png" alt="Logo" /> 
        <h1>Woven Wish</h1>
        </span> 
     <SearchBox/>
      <ul className="flex">
        <a href=""><li>Home</li></a>
        <a href=""><li>Products</li></a>
        <a href=""><li>Contact</li></a>
        <a href=""><li>About Us</li></a>
      </ul>
      </nav>
    </>
  )
}

export default Navbar
