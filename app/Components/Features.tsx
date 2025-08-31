import React from 'react'
import Image from 'next/image'

type Props = {}

function Features({ }: Props) {
    return (
        <div className='pt-20 h-[550px] bg-gradient-to-r from-zinc-100 to-gray-300'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-4xl font-bold text-center'>
                        Powerful Features to enhance your Countdown experience.
                    </h1>
                    <p className='text-center text-xl mt-5'>
                        CountdownPage offers a range of features to make your countdown timers stand out and drive engagement.
                    </p>
                </div>
                <div className='flex items-center gap-5 mt-15 justify-center justify-between'>
                    <div className='border border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            <Image src="/images/Customsvg.svg" alt="" width={50} height={50} />
                        </div>
                        <h1 className='text-xl font-bold'>Customizable Design</h1>
                        <p>Choose from a variety of templates or create your own unique design to match your brand and event.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            <Image src="/images/Sharing.svg" alt="" width={50} height={50} />
                        </div>
                        <h1 className='text-xl font-bold'>Easy Sharing</h1>
                        <p>Share your countdown timer with others and let them join in the countdown.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[350px]'>
                        <div className='flex justify-center mb-3'>
                            <Image src="/images/Timesvg.svg" alt="" width={50} height={50} />
                        </div>
                        <h1 className='text-xl font-bold'>Real-time Updates</h1>
                        <p>CountdownPage provides real-time updates to keep your countdown accurate and engaging.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            <Image src="/images/Analyticsvg.svg" alt="" width={50} height={50} />
                        </div>
                        <h1 className='text-xl font-bold'>Analytics & Tracking</h1>
                        <p>Track the progress of your countdown and see how many people are joining in.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features