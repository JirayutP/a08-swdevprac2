import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import Link from 'next/link'

export default function TopMenu() {
    return(
        <div className='h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border- border-t border-b border-gray-400 flex flex-row-reverse'>
            <Link href="/">
                <Image src={'/img/vaccine2.png'} className='h-[100%] w-auto' 
                alt='logo'
                width={0}
                height={0}
                sizes='100vh'/>
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <TopMenuItem title='Hospital' pageRef='/hospital'/>
        </div>
    )
}