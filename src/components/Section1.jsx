import React from 'react'
import image4 from "../assets/image-home4.png";
import { Parallax } from 'react-parallax';

function Section1() {
  return (
	<div>
		<Parallax blur={5} bgImage={image4} bgImageAlt="King Pac Industrial background" strength={200}>
          <div style={{ height: '500px' }}>
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-10 text-white font-semibold text-2xl text-shadow-zinc-500">
                <p className='text-center'>This website will help to enlighten you to the innovative <br />and highly standardized ways of our company, products & services.</p>
				<div className=' w-[300px] bg-[#000000] h-[2px]'></div>
				<p className='text-center'>King Pac Industrial Co., Ltd, Asia's largest plastic bag manufacturer, <br /> located near Thailand's Laem Chabang Port, spans 107,920 square <br /> meters with a yearly production capacity of 200,000 metric tons. <br /> The company prioritizes quality, sourcing raw materials globally and <br /> enforcing stringent quality control in every production stage.</p>
              </div>
          </div>
      </Parallax>
	</div>
  )
}

export default Section1