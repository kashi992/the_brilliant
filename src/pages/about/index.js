import React from 'react'
import img from '../../assets/images/authorImg.png'

const About = () => {
  return (
    <section className='min-[1680px]:py-[100px] min-[1370px]:py-[80px] py-[60px] flex-1'>
      <div className="container">
        <div className="min-[1370px]:max-w-[1276px] max-w-[1120px] w-full mx-auto bg-[#63A490] text-white min-[1370px]:px-[40px] md:px-[20px] px-3 pt-3 min-[1370px]:pb-[40px] md:pb-[20px] pb-3 relative sf min-[1370px]:text-[24px] md:text-[18px] text-[16px] leading-tight flex flex-col gap-4">
          <ul className='min-[1370px]:max-w-[70%] xl:max-w-[75%] w-full flex flex-col min-[1370px]:gap-4 gap-2 xl:text-start text-center'>
            <li>
              <h2 className='font-bold'>About the Author:</h2>
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
            <li>
              <p>
              A dedicated father of three, Malcolm balances his professional achievements with his personal life, often drawing inspiration from his children. This journey, spanning continents and industries, reflects his passion for innovation and storytelling, making him a notable figure in the animation and digital industry.
              </p>
            </li>
          </ul>
          <div className='xl:absolute xl:block hidden right-0 bottom-0 min-[1370px]:h-[580px] h-[400px]'>
            <img src={img} alt="" className='h-full mx-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
