import { useState } from "react";
import { Link } from 'react-scroll';



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
  
    </div>
  )
}

export default Navbar