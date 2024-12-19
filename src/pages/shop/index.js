import React, { useState, useEffect } from 'react'
import logo1 from '../../assets/images/amazon.png'
import logo2 from '../../assets/images/kindle.png'
import logo3 from '../../assets/images/inHouse.png'
import bookImg from '../../assets/images/mainBg.jpg'
import CartIcon from '../../assets/images/CartIcon'
import bgImg from '../../assets/images/homeLiBg.png'
import { Link } from 'react-router-dom'

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
    return (
        <section className='min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px]'>
            <div className="container grid xl:grid-cols-2 gap-8">
                <div className='sf flex flex-col gap-4'>
                    <h2 className='min-[1680px]:text-[50px] min-[1370px]:text-[40px] text-[32px]'>The Brilliant Space Mission</h2>
                    <p className='min-[1680px]:text-[30px] min-[1370px]:text-[24px] text-[20px] font-medium'>The Brilliant Space Mission is an inspiring children's book that blends imagination with education. Follow the journey of a young explorer who embarks on a magical space adventure, discovering the wonders of the universe while learning valuable lessons about courage, curiosity, and perseverance. This beautifully illustrated book encourages children to dream big and explore the unknown.</p>
                    <p className='min-[1680px]:text-[36px] text-[24px] font-bold min-[1370px]:mt-8 mt-4 flex w-fit items-center gap-3 p-[30px] bg-no-repeat text-white' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "100% 100%" }}>Shop now <CartIcon iconClr="#fff" className="min-[1680px]:w-[30px] w-[24px]" /></p>
                    <span className='block md:text-[24px] font-bold text-[18px]'>Available From:</span>
                    <div className="grid grid-cols-3 md:w-2/4 items-center gap-6">
                        <Link to={link}><img src={logo1} alt="" /></Link>
                        <Link><img src={logo2} alt="" /></Link>
                        <Link to="https://inhousebookstore.com.au/collections/new-releases/products/the-brilliant-idea-machine" target='_blank'><img src={logo3} alt="" /></Link>
                    </div>
                </div>
                <div>
                    <img src={bookImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Shop
