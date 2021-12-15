import React, { useState } from 'react'

const Book = ({ book_image, title, price, description, name }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      {/* {book.map((book) => {
          const { book_image, title, price, description } = book */}
      {/* return ( */}
      <div>
        <img src={book_image} alt={title} />
        <footer>
          <div className='bookInfo'>
            <h4>{title}</h4>
            <h4 className='bookPrice'>{price}</h4>
            <h4>{name}</h4>
          </div>
          {/* <p>
          {readMore ? info : `${description.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p> */}
          <p>{description}</p>
        </footer>
      </div>
      ){/* })} */}
    </article>
  )
}

export default Book
// ;<div className={style.productImage}>
//   <div class='col-4'>
//     <img style={{ width: '100%' }} src='../public/image/home1.jpg' alt='ce' />
//     <h4>Red T-shirt</h4>
//     <div class='rating'>
//       <i class='fas fa-star'></i>
//       <i class='fas fa-star'></i>
//       <i class='fas fa-star'></i>
//       <i class='fas fa-star'></i>
//       <i class='far fa-star'></i>
//       <i class='far fa-star'></i>
//     </div>
//     <p>$50</p>
//   </div>
// </div>
