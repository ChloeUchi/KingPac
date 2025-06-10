// import React from 'react'

// function AboutContent() {
//   return (
// 	<div className='bg-[#0B1D51] h-screen'>
// 		<h1>what the fuck</h1>
// 		<svg className='absolute bottom-0 left-0 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,234.7C840,267,960,277,1080,272C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
// 	</div>
//   )
// }

// export default AboutContent

import React from 'react';

function AboutContent() {
  return (
    <div className='bg-[#27548A] min-h-screen relative'>
		<div className='flex flex-col justify-around items-center content-center pt-[5em]'>
      <h1 className='text-[#dbae34] text-5xl p-8 text-center '>KING PAC INDUSTRIAL <br />COMPANY LIMITED</h1>
		<p className='text-white text-center text-2xl'>King Pac is an expert in flexible plastic packaging. <br /> The company supplies a variety of products to many major retailers and <br /> national global brands in US, EU, Australia and Japan who then distribute <br /> these premium products to millions of households worldwide.</p>
      </div>
	  <svg
        className='absolute bottom-0 left-0 w-full z-0'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,234.7C840,267,960,277,1080,272C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export default AboutContent;
