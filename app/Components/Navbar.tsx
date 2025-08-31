import React from 'react'
import Image from 'next/image'
import icon from '@/public/images/Timesvgb.svg'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
    const navLinks = [
        {
            name: "Features",
            href: "/",
        },
        {
            name: "Templates",
            href: "/",
        },
        {
            name: "Pricing",
            href: "/",
        },
    ]
  return (
    <div className='content-center border-gray-200 border-b-2'>
        <nav className='flex justify-between items-center mx-5 p-5'>
            <div className='flex gap-1 items-center'>
                <Image className='' src={icon} alt="Logo" width={50} height={50} />
                <h1 className='text-2xl font-bold'>Countdown</h1>
            </div>
            <div className='mx-auto'>
                <ul className='flex gap-15'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link className='font-bold' href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-2'>
                <button className='bg-gray-300 font-bold text-black px-3 py-2 rounded'>Login</button>
                <button className='bg-blue-500 font-bold text-white px-3 py-2 rounded'>Create Countdown</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar