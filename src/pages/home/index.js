import React, { useRef } from 'react'
import './index.css'
import Slider from "react-slick";
import heroImg1 from "../../assets/images/heroImg.png";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import img1 from "../../assets/images/submitIdeaBg.png";
import { Link } from 'react-router-dom';
import ContactForm from '../../components/contactForm/index'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin with gsap
gsap.registerPlugin(ScrollToPlugin);

const dataArr = [
    {
        slide: slide1,
    },
    {
        slide: slide2,
    },
    {
        slide: slide3,
    },
    {
        slide: slide4,
    },
    {
        slide: slide5,
    },
    {
        slide: slide6,
    },
    {
        slide: slide7,
    },
]

const Home = () => {
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

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='heroWrap'>
                <div className="container xl:flex xl:flex-col">
                    <div className="min-[1680px]:max-w-[530px] min-[1370px]:max-w-[350px] md:max-w-[280px] max-w-[220px] w-full mx-auto xl:-mt-[50px]">
                        <img src={heroImg1} alt="" className='w-full' />
                    </div>
                    <div className="heroInner">
                        <ul className='flex flex-col min-[1680px]:gap-6 gap-3 xl:pt-[65px] md:pt-[40px] pt-4'>
                            <li className='sf text-[#393939] text-center min-[1680px]:text-[24px] md:text-[18px] text-[16px]'>
                                Parker and her grandfather need more
                                Brilliant Ideas, to help them make the
                                world a better place.
                            </li>
                            <li className='sf text-[#393939] text-center min-[1680px]:text-[24px] md:text-[18px] text-[16px]'>
                                Submit your Brilliant Ideas, and your idea may
                                make the next book, and in doing so, making
                                the world even more amazing.
                            </li>
                        </ul>
                        <Slider {...settings}>
                            {
                                dataArr.map((data, index) => (
                                    <div key={index}>
                                        <img src={data.slide} alt="" className='slideImg' />
                                    </div>
                                ))
                            }
                        </Slider>
                        <ul className='flex flex-col gap-6 xl:pt-[100px] md:pt-[40px] pt-4'>
                            <li className='sf text-[#393939] text-center min-[1680px]:text-[24px] md:text-[18px] text-[16px]'>
                            The young inventors show invites you to be in 
the audience, If we call your seat number, 
remember to have your ideas ready.. 
                            </li>
                        </ul>
                    </div>
                    <Link onClick={handleScroll} className='flex xl:absolute max-[1200px]:w-fit max-[1200px]:mx-auto bottom-[30px] right-0 justify-center items-center text-white min-[1680px]:text-[36px] min-[1370px]:text-[26px] text-[20px] uppercase min-[1680px]:py-[21px] py-[18px] min-[1680px]:px-[86px] px-[65px] bg-contain bg-no-repeat leading-none bg-center text-nowrap text-center font-normal' style={{ backgroundImage: `url(${img1})`, backgroundSize: '100% 100%' }}>
                        Submit <br />
                        your idea
                    </Link>
                </div>
            </section >
            <ContactForm targetSectionRef={targetSectionRef} />
        </>

    )
}

export default Home
