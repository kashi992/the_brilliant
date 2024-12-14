import React, { useRef } from 'react'
import './index.css'
import bgImg from '../assets/images/mainBg.jpg'
import badge from '../assets/images/badge.png'
import ContactForm from '../components/contactForm'

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// Register the ScrollToPlugin with gsap
gsap.registerPlugin(ScrollToPlugin);

const HomePage = () => {
    // Create a reference for the target section
    const targetSectionRef = useRef(null);

    // Scroll to the target section smoothly
    const handleScroll = () => {
        gsap.to(window, {
          duration: 2, // Duration of the animation in seconds
          scrollTo: { y: targetSectionRef.current, offsetY: 10 },
          ease: 'power2.inOut', // Easing function for smooth animation
        });
      };

    return (
        <section className='min-h-screen bg-no-repeat bg-fixed flex flex-col min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px]' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "100% 100%" }}>
            <div className="xl:w-[65%] px-[10px] mx-auto h-screen flex flex-col">
                <div className="min-[1680px]:w-[256px] min-[1370px]:w-[200px] md:w-[170px] w-[125px] relative left-0 top-0 -rotate-6">
                    <img src={badge} alt="" />
                    <h2 className='uppercase text-white leading-none absolute min-[1680px]:text-[55px] min-[1370px]:text-[40px] md:text-[30px] text-[24px] font-bold text-center left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>out now!</h2>
                </div>
                <div className="my-auto">
                    <button onClick={handleScroll} type="submit" className='bg-secondary-color min-[1680px]:h-[80px] min-[1370px]:h-[65px] h-[50px] text-primary-color rounded-[8px] min-[1680px]:text-3xl min-[1370px]:text-2xl text-xl border-2 border-transparent hover:bg-black hover:border-black hover:text-white px-4'>Contact Us</button>
                </div>

            </div>
            <ContactForm targetSectionRef={targetSectionRef} />
        </section>
    )
}

export default HomePage
