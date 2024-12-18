import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/images/amazon.png'
import logo2 from '../../assets/images/kindle.png'
import logo3 from '../../assets/images/inHouse.png'
const Footer = () => {
  return (
     <section className='bg-primary-color min-[1370px]:py-6 py-3 z-50 min-[1680px]:h-[160px] min-[1370px]:h-[110px] md:h-[80px] h-[60px]'>
               <div className="container h-full">
                   <div className="grid grid-cols-3 gap-2 grid-rows-1 h-full">
                       <Link className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[80px] w-fit'>
                       <img  src={logo1} alt="" className='w-full h-full object-contain' />
                       </Link>
                       <Link className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[80px] w-fit mx-auto'>
                       <img  src={logo2} alt="" className='w-full h-full object-contain' />
                       </Link>
                       <Link to="https://inhousebookstore.com.au/collections/new-releases/products/the-brilliant-idea-machine" target='_blank' className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[80px] w-fit ms-auto'>
                       <img  src={logo3} alt="" className='w-full h-full object-contain' />
                       </Link>
                   </div>
               </div>
           </section>
  )
}

export default Footer
