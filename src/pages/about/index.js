import React from 'react'
import img from '../../assets/images/authorImg.png'
import './index.css'

const About = () => {
  return (
    <section className='min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px] flex-1'>
      <div className="container">
        <div className="min-[1680px]:max-w-[1450px] lg:max-w-[93%] w-full mx-auto bg-cover bg-no-repeat text-white min-[1680px]:text-[24px] min-[1370px]:text-[22px] md:text-[18px] text-[16px] leading-tight flex flex-col gap-4 aboutInner min-[1680px]:min-h-[750px]">
          <ul className='min-[1680px]:max-w-[1020px] xl:max-w-[70%] w-full flex flex-col min-[1370px]:gap-5 gap-2 xl:text-start text-center min-[1370px]:py-[90px] lg:py-[70px] min-[1600px]:ps-[100px] lg:ps-[80px] lg:pe-[80px] md:px-[50px] px-6 pt-[70px] pb-[120px] sf min-h-full flex-1'>
            <li>
              <h2 className='font-bold min-[1680px]:text-[36px] md:text-[30px] text-[24px] leading-tight pf'>About the Author:</h2>
            </li>
            <li className='xl:hidden h-[400px] my-2'>
            <img src={img} alt="" className='h-full mx-auto' />
          </li>
            <li>
              <p>
              Malcolm’s been a pioneering force in the digital space, with a career spanning three decades and three continents.. He was born in Surrey, England, to a British mother and a Jamaican father. This multicultural upbringing instilled a rich appreciation for storytelling and creativity, which would later become the foundation of his career.
              </p>
            </li>
            <li>
              <p>
Growing up in the 80’s in England, Malcolm demonstrated an early interest in football, storytelling, music, technology and the arts, which led him to pursue a career at the intersection of these fields. Over the past three decades, he has built an illustrious award winning career in the digital industry, becoming a respected innovator and entrepreneur.
              </p>
            </li>
            <li>
              <p>
              Malcolm now resides in Sydney, Australia, where he runs a successful animation and film production company. His work blends cutting-edge technology with compelling narratives, creating animations that are both captivating and engaging.
              </p>
            </li>
          </ul>
          <div className='xl:absolute hidden right-0 bottom-0 min-[1370px]:h-[580px] h-[400px]'>
            <img src={img} alt="" className='h-full mx-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
