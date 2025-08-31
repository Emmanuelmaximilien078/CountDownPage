import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <div className='relative bg-cover bg-center w-full h-[650]' style={{ backgroundImage: "url('/images/modern1.png')" }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 flex items-center justify-center flex-col h-full'>
                <h1 className='text-5xl font-bold text-white mb-10'>Create Stylish, Shareable Countdown Timers</h1>
                <p className='text-white text-xl'>CountdownPage helps you create beautiful countdown timers for any event.</p>
                <p className='text-white mb-5 text-xl'>Engage your audience and build anticipation with customizable designs and easy sharing.</p>
                <button className='bg-blue-500 font-bold text-white px-3 py-2 rounded'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Header