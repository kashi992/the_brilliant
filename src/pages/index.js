import React, { useRef } from 'react'
import './index.css'
import badge from '../assets/images/badge.png'
import ContactForm from '../components/contactForm'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom'
import logo1 from '../assets/images/amazon.png'
import logo2 from '../assets/images/kindle.png'
import logo3 from '../assets/images/inHouse.png'
// Register the ScrollToPlugin with gsap
gsap.registerPlugin(ScrollToPlugin);


const HomePage = () => {
    // Create a reference for the target section
    const targetSectionRef = useRef(null);

    // Scroll to the target section smoothly
    const handleScroll = () => {
        gsap.to(window, {
            duration: 2, // Duration of the animation in seconds
            scrollTo: { y: targetSectionRef.current, offsetY: 60 },
            ease: 'power2.inOut', // Easing function for smooth animation
        });
    };

    return (
        <>
            <section className='homePage xl:min-h-screen min-h-[70vh] flex flex-col min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px]'>
                <div className="xl:w-[65%] w-full px-[10px] mx-auto flex flex-col">
                <div className="w-fit">
                    <div className="min-[1680px]:w-[256px] min-[1370px]:w-[200px] md:w-[170px] w-[125px] relative left-0 top-0 -rotate-6 mx-auto">
                        <img src={badge} alt="" />
                        <h2 className='uppercase text-white leading-none absolute min-[1680px]:text-[55px] min-[1370px]:text-[40px] md:text-[30px] text-[24px] font-bold text-center left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>out now!</h2>
                    </div>
                    <div className="mt-8">
                        <button onClick={handleScroll} className='text-white bg-secondary-color min-[1680px]:text-[24px] md:text-[16px] text-[14px] leading-none hover:text-black lg:py-5 lg:px-6 md:p-4 p-3 rounded-[8px] capitalize w-fit cursor-pointer'>submit you idea for the next book</button>
                    </div>

                </div>
                </div>
               
            </section>
            <ContactForm targetSectionRef={targetSectionRef} />
            <section className='bg-primary-color min-[1370px]:py-6 py-3 fixed bottom-0 w-full z-50 min-[1680px]:h-[160px] min-[1370px]:h-[110px] md:h-[80px] h-[60px]'>
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
        </>
    )
}

export default HomePage
