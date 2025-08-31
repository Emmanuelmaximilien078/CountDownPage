import React from 'react'

type Props = {}

function Cases({ }: Props) {
    return (
        <div className='pt-20'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-4xl font-bold text-center'>
                        Perfect for Any Occasion
                    </h1>
                </div>
                <div className='flex items-center gap-5 mt-15 justify-center justify-between'>
                    <div className='border border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            {/* <Image src="/images/Customsvg.svg" alt="" width={50} height={50} /> */}
                        </div>
                        <h1 className='text-xl font-bold'>Event promotion</h1>
                        <p>Build excitement for conferences, webinars, and concerts.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            {/* <Image src="/images/Sharing.svg" alt="" width={50} height={50} /> */}
                        </div>
                        <h1 className='text-xl font-bold'>Product Launches</h1>
                        <p>Generate buzz for new product releases.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[350px]'>
                        <div className='flex justify-center mb-3'>
                            {/* <Image src="/images/Timesvg.svg" alt="" width={50} height={50} /> */}
                        </div>
                        <h1 className='text-xl font-bold'>Sales & Promotions</h1>
                        <p>Drive urgency for limited-time offers.</p>
                    </div>
                    <div className='border-1 border-gray-200 p-5 rounded shadow-[1px_7px_33px_0px_rgba(0,_0,_0,_0.1)] text-center w-[300px]'>
                        <div className='flex justify-center mb-3'>
                            {/* <Image src="/images/Analyticsvg.svg" alt="" width={50} height={50} /> */}
                        </div>
                        <h1 className='text-xl font-bold'>Milestones</h1>
                        <p>Celebrate anniversaries and special events.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cases