import React from 'react'
import logo1 from '../../assets/images/amazon.png'
import logo2 from '../../assets/images/kindle.png'
import logo3 from '../../assets/images/inHouse.png'

const Footer = () => {
    return (
        <section className='bg-primary-color min-[1370px]:py-6 py-3'>
            <div className="container">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-2 grid-rows-1">
                    <div className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[120px] w-fit'>
                    <img  src={logo1} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[120px] w-fit mx-auto'>
                    <img  src={logo2} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='min-[1680px]:max-w-[250px] min-[1370px]:max-w-[200px] md:max-w-[170px] max-w-[120px] w-fit md:ms-auto mx-auto max-[575px]:col-start-1 max-[575px]:col-end-3'>
                    <img  src={logo3} alt="" className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
