import { BsCartPlus } from 'react-icons/bs'
import Link from 'next/link'
export default function Header() {
  return (
    <div className='flex flex-row items-center justify-around max-w-screen-xl mx-auto font-sans py-7'>
      <img src='/assets/logo.webp' className='h-6 w-28' />
      <div className='flex flex-row items-center space-x-5'>
        <div className='flex flex-row space-x-5'>
          <button className='text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline'>
            <Link href='/'>Home</Link>
          </button>
          <button className='text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline'>
            Shop
          </button>
          <button className='text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline'>
            Pages
          </button>
          <button className='text-xs text-gray-600 uppercase transition-all duration-150 hover:text-black hover:underline'>
            <Link href='/Contact'>Contact</Link>
          </button>
        </div>
        <div>
          <button className='py-2 text-base text-white transition-all duration-150 bg-black border-2 px-7 hover:bg-gray-400'>
            <Link href='/login'>Login</Link>
          </button>
          <button className='py-2 text-base text-white transition-all duration-150 bg-black border-2 px-7 hover:bg-gray-400'>
            <Link href='/register'>Register</Link>
          </button>
          <button>
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  )
}
