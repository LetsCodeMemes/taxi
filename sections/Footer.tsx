import React from 'react'
import Image from 'next/image'
import logoImage from "@/public/logo.svg"
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <section className="py-16">
        <div className="container">
            <div className="flex md:flex-row flex-col items-center md:justify-between gap-6">
                <div className='flex items-center gap-x-2 my-3'>
                    <h1 className='text-white text-3xl font-bold ml-5'>Best Taxi</h1>
                    <Image src={logoImage} alt="logo image" width={40}/> 
                </div>
                <div>
                    <nav className="flex gap-x-6 mx-2">
                        {footerLinks.map(link => (
                            <a key={link.label} className="text-white/50 text-sm " href={link.href}>{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer