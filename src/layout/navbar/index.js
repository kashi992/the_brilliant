import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/homeLiBg.png'
import img2 from '../../assets/images/authorLiBg.png'
import img3 from '../../assets/images/shopLiBg.png'
import img4 from '../../assets/images/contactLiBg.png'

const Navbar = () => {
    return (
        <header className='bg-white'>
            <div className="container flex justify-between items-center min-[1680px]:h-[90px] md:h-[70px] h-[50px]">
                <div className='flex items-center md:gap-4 gap-1'>
                    <Link to="/" className='flex relative justify-center items-center text-[#cde65a] min-[1680px]:text-[36px] min-[1370px]:text-[26px] md:text-[20px] text-[14px] uppercase md:py-4 py-2 min-[1370px]:px-[54px] md:px-[35px] px-[10px] bg-contain bg-no-repeat leading-none bg-center text-nowrap font-normal' style={{ backgroundImage: `url(${img1})`, backgroundSize: '100% 100%' }}>
                        home
                    </Link>
                    <Link className='flex relative justify-center items-center text-[#cde65a] min-[1680px]:text-[36px] min-[1370px]:text-[26px] md:text-[20px] text-[14px] uppercase md:py-4 py-2 min-[1370px]:px-[54px] md:px-[35px] px-[10px] bg-contain bg-no-repeat leading-none bg-center text-nowrap font-normal' style={{ backgroundImage: `url(${img2})`, backgroundSize: '100% 100%' }}>
                        about the author
                    </Link>
                </div>
                <div className='flex items-center md:gap-4 gap-1'>
                    <Link className='flex relative justify-center items-center text-[#cde65a] min-[1680px]:text-[36px] min-[1370px]:text-[26px] md:text-[20px] text-[14px] uppercase md:py-4 py-2 min-[1370px]:px-[54px] md:px-[35px] px-[10px] bg-contain bg-no-repeat leading-none bg-center text-nowrap font-normal' style={{ backgroundImage: `url(${img3})`, backgroundSize: '100% 100%' }}>
                        shop
                    </Link>
                    <Link className='flex relative justify-center items-center text-[#cde65a] min-[1680px]:text-[36px] min-[1370px]:text-[26px] md:text-[20px] text-[14px] uppercase md:py-4 py-2 min-[1370px]:px-[54px] md:px-[35px] px-[10px] bg-contain bg-no-repeat leading-none bg-center text-nowrap font-normal' style={{ backgroundImage: `url(${img4})`, backgroundSize: '100% 100%' }}>
                        contact
                    </Link>
                </div>
            </div>

        </header>
    )
}

export default Navbar
