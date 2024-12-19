import React, { useState, useEffect, useRef } from 'react'
import logo1 from '../../assets/images/amazon.png'
import logo2 from '../../assets/images/kindle.png'
import logo3 from '../../assets/images/inHouse.png'
import bookImg from '../../assets/images/bookImg.webp'
import arrow from '../../assets/images/curve-down-arrow.png'
import bgImg from '../../assets/images/homeLiBg.png'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin with gsap
gsap.registerPlugin(ScrollToPlugin);

const Shop = () => {
    const [link, setLink] = useState('https://a.co/d/7jW4wzw'); // Default to US link
    useEffect(() => {
        fetch("https://ipinfo.io/json?token=0451d8a1ae05e5")
            .then((response) => response.json())
            .then((jsonResponse) => {
                const { country } = jsonResponse;
                if (country === 'AU') {
                    setLink('https://amzn.asia/d/224zdmB');
                }
            })
            .catch((error) => console.error('Error fetching IP info:', error));
    }, []);

    // Create a reference for the target section
    const targetSectionRef = useRef(null);
// Set initial opacity to 0 (hidden)
useEffect(() => {
    gsap.set(targetSectionRef.current, { opacity: 0 });
}, []);

// Scroll to the target section smoothly and fade it in
const handleScroll = () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: { y: targetSectionRef.current, offsetY: 60 },
        ease: 'power2.inOut',
        onStart: () => {
            // Fade in the target section
            gsap.to(targetSectionRef.current, {
                duration: 1,
                opacity: 1,
                ease: 'power2.inOut',
            });
        },
    });
};

    return (
        <section className='flex-1 min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px]'>
            <div className="container grid xl:grid-cols-2 xl:gap-8 gap-12">
                <div className='flex flex-col gap-4'>
                    <h2 className='min-[1680px]:text-[50px] min-[1370px]:text-[40px] text-[32px]'>The Brilliant Idea Machine</h2>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <p className='sf min-[1680px]:text-[24px] md:text-[18px] text-[16px] font-medium'>Thanks to her grandfather and his latest invention, 11-year-old Parker Fisher is about to discover a world of endless possibilities. The Brilliant Idea Machine brings forgotten ideas back to life...perfect for an inventor who wants to make the world a better place. And perfect for a girl with the craziest idea ever that can change the life of every kid. </p>
                        </li>
                        <li>
                            <p className='sf min-[1680px]:text-[24px] md:text-[18px] text-[16px] font-medium'>Not everyone wants what's best though. Parker, her friends, and her grandfather must all work together to keep the town's mayor from making bad ideas a reality. And they have to do it while saving an important bird from going extinct. </p>
                        </li>
                    </ul>
                    <Link onClick={handleScroll} className='min-[1680px]:text-[36px] text-[24px] font-bold min-[1370px]:mt-8 mt-4 mb-4 flex w-fit items-center gap-3 p-[30px] bg-no-repeat text-white' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "100% 100%" }}>Shop at <img src={arrow} alt="" className='w-[32px]' /></Link>
                    <div ref={targetSectionRef} className="flex xl:w-[65%] md:w-[50%] items-center gap-6">
                        <Link to={link}><img src={logo1} alt="" /></Link>
                        <Link><img src={logo2} alt="" /></Link>
                        <Link to="https://inhousebookstore.com.au/collections/new-releases/products/the-brilliant-idea-machine" target='_blank'><img src={logo3} alt="" /></Link>
                    </div>
                </div>
                <div className='min-[1680px]:h-[790px] min-[1370px]:h-[500px] xl:h-[440px] h-[550px]'>
                    <img src={bookImg} alt="" className='drop-shadow-2xl w-full h-full object-contain' />
                </div>
            </div>
        </section>
    )
}

export default Shop
