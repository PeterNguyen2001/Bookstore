import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'
import style from '../styles/home.module.css'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, price, image } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <div className={style.bonusNext}>
      <div className={style.hotSale}>
        <img src={image} alt={name} className='person-img' />
      </div>
      <div className={style.hotText}>
        <div className={style.hotInfo}>
          <h5>{name}</h5>
          <p>{price}</p>
        </div>

        <button>Add to cart</button>
      </div>

      <div className='button-container'>
        <button className={style.prevBtn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={style.nextBtn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Review

// <div className={style.bonusNext}>
//         <div className={style.hotSale}>
//           <img src='image/book-4.png' alt='' />
//           <div className={style.hotText}>
//             <div className={style.hotInfo}>
//               <h5>Resuce</h5>
//               <p>$13.99</p>
//             </div>

//             <button>Add to cart</button>
//           </div>
//         </div>
//         <div className={style.hotSale}>
//           <img src='image/book-5.png' alt='' />
//           <div className={style.hotText}>
//             <div className={style.hotInfo}>
//               <h5>Music Rock</h5>
//               <p>$16.25</p>
//             </div>

//             <button>Add to cart</button>
//           </div>
//         </div>
//         <div className={style.hotSale}>
//           <img src='image/book-6.png' alt='' />
//           <div className={style.hotText}>
//             <div className={style.hotInfo}>
//               <h5>Sample Text</h5>
//               <p>$10.19</p>
//             </div>

//             <button>Add to cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
