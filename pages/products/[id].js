import { AiOutlineLeft, AiOutlineRight, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Productdetail({ id }) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (id) {
      axios.get(`/api/product?id=${id}`).then((result) => console.log(result))
    }
  }, [id])

  return (
    <div className='flex flex-col max-w-screen-xl mx-auto justify-center items-center'>
      <div className='grid md:grid-cols-12 md:gap-20'>
        <div className='col-span-5'>~
          <img
            src='https://kenhphimtv.com/wp-content/uploads/2020/07/41146-bong-ma-anh-quoc-phan-5.jpg'
            className='w-full'
          />
          {/* <div className='flex flex-row space-x-3 pt-3'>
            <div>
              <img src='https://template.hasthemes.com/outside/outside/img/product/11.jpg' />
            </div>
            <div>
              <img src='https://template.hasthemes.com/outside/outside/img/product/11.jpg' />
            </div>
            <div>
              <img src='https://template.hasthemes.com/outside/outside/img/product/12.jpg' />
            </div>
            <div>
              <img src='https://template.hasthemes.com/outside/outside/img/product/13.jpg' />
            </div>
          </div> */}
        </div>
        <div className='col-span-7 space-y-7 pt-16'>
          <h1 className='md:text-3xl text-2xl text-gray-700 font-bold'>
            PEAKY BLINDERS
          </h1>
          <p className='md:text-xl text-lg text-gray-600'>$10.00</p>
          <div className='flex flex-col space-y-4'>
            <div>
              <label className='text-gray-500'>Quick Overview</label>
              <div className='w-10 h-0.5 bg-gray-400'></div>
            </div>
            <p className='text-gray-400 md:text-base text-sm'>
              Peaky Blinders is an epic following of a gangster family of
              Irish-Romani origin set in Birmingham, England, in 1919, several
              months after the end of the First World War in November 1918. The
              story centres on the Peaky Blinders gang and their ambitious and
              highly cunning boss Tommy Shelby (Murphy).
            </p>
          </div>
          <div className='flex flex-col space-y-4'>
            <div>
              <label className='text-gray-500'>Author</label>
              <div className='w-10 h-0.5 bg-gray-400'></div>
            </div>
            <p className='text-gray-400'>James Bond, Alex Mix</p>
          </div>
          <div className='flex flex-row space-x-5'>
            {/* <div className='flex flex-row items-center border-2 px-3 md:w-2/12 w-3/12 text-gray-400 text-sm'>
              <span className=''>
                <AiOutlineLeft />
              </span>
              <input
                type='text'
                className='w-9/12 py-2 focus:outline-none text-center'
              />
              <span className=''>
                <AiOutlineRight />
              </span>
            </div> */}
            <button className='border-2 bg-gray-800 text-white text-xs px-7 py-2 hover:bg-white hover:text-black transition-all duration-200'>
              ADD TO CART
            </button>
          </div>
          <div className='flex flex-row items-center space-x-5 text-gray-400'>
            <label className='text-xs '>SHARE:</label>
            <FaFacebookF className='hover:text-gray-600 transition-all duration-200' />
            <FiInstagram className='hover:text-gray-600 transition-all duration-200' />
            <AiOutlineTwitter className='hover:text-gray-600 transition-all duration-200' />
          </div>
        </div>
      </div>
      <div>
        <h1 className='md:text-3xl text-2xl text-gray-600 md:pt-20 pt-14'>
          Related Products
        </h1>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  var id = context.query.id ? context.query.id : undefined
  return {
    props: { id }, // will be passed to the page component as props
  }
}
