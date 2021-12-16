import { useEffect, useState } from 'react'
import style from '../styles/home.module.css'
import Book from './Book'
import { IoMdStarHalf, IoMdStar } from 'react-icons/Io'
import { AiFillFire } from 'react-icons/ai'
import { FaHotjar } from 'react-icons/Fa'
import { SiSalesforce } from 'react-icons/Si'
import { FaSalesforce } from 'react-icons/Fa'
const url =
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9H1d2ElvFCaRm8vTFszDN44AdGaryTCm'
export default function Home() {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchBooks = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const books = await response.json()
      setLoading(false)
      setBook(books)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <div>
      {/* <div className={style.home}>
        <div className={style.text}>
          <p>Welcome to my book store</p>
        </div>
        <div className={style.textButton}>
          <button>Shop now</button>
        </div>
      </div> */}

      <section className={style.home} id='home'>
        <div className={style.row}>
          <div className={style.content} style={{ marginLeft: '32px' }}>
            <h3>Upto 75% off</h3>
            <p>Welcome to my book store. Have a great time!</p>
            <a href='#' className={style.btn}>
              Shop now
            </a>
          </div>

          <div className={style.bookSlider}>
            <div className={style.divide}>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-1.png' alt='' />
              </a>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-2.png' alt='' />
              </a>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-3.png' alt='' />
              </a>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-4.png' alt='' />
              </a>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-5.png' alt='' />
              </a>
              <a href='#' className={style.swiperSlide}>
                <img src='image/book-6.png' alt='' />
              </a>
            </div>
            <img src='image/stand.png' className={style.stand} alt='' />
          </div>
        </div>
      </section>

      <div className={style.sliderContainer}>
        <div className={style.slideHot}>
          <h3>Hot Selling</h3>
        </div>

        <div className={style.iconHot}>
          <FaHotjar />
        </div>

        <div className={style.slider}>
          <div className={style.slides}>
            <div id='slides__1' className={style.slide}>
              <div className={style.hotSale}>
                <img src='image/book-4.png' alt='' />
                <div className={style.hotText}>
                  <div className={style.hotInfo}>
                    <h5>Resuce</h5>
                    <p>$13.99</p>
                  </div>

                  <button>Add to cart</button>
                </div>
              </div>
              <a className={style.slidePrev} href='#slides__4' title='Prev'></a>
              <a className={style.slideNext} href='#slides__2' title='Next'></a>
            </div>
            <div id='slides__2' className={style.slide}>
              <div className={style.hotSale}>
                <img src='image/book-5.png' alt='' />
                <div className={style.hotText}>
                  <div className={style.hotInfo}>
                    <h5>Music Rock</h5>
                    <p>$16.25</p>
                  </div>

                  <button>Add to cart</button>
                </div>
              </div>
              <a className={style.slidePrev} href='#slides__1' title='Prev'></a>
              <a className={style.slideNext} href='#slides__3' title='Next'></a>
            </div>
            <div id='slides__3' className={style.slide}>
              <div className={style.hotSale}>
                <img src='image/book-6.png' alt='' />
                <div className={style.hotText}>
                  <div className={style.hotInfo}>
                    <h5>Sample Text</h5>
                    <p>$10.19</p>
                  </div>

                  <button>Add to cart</button>
                </div>
              </div>
              <a className={style.slidePrev} href='#slides__2' title='Prev'></a>
              <a className={style.slideNext} href='#slides__4' title='Next'></a>
            </div>
            <div id='slides__4' className={style.slide}>
              <div className={style.hotSale}>
                <img src='image/book-8.png' alt='' />
                <div className={style.hotText}>
                  <div className={style.hotInfo}>
                    <h5>Cool Kid</h5>
                    <p>$12.32</p>
                  </div>

                  <button>Add to cart</button>
                </div>
              </div>
              <a className={style.slidePrev} href='#slides__3' title='Prev'></a>
              <a className={style.slideNext} href='#slides__1' title='Next'></a>
            </div>
          </div>
        </div>
      </div>

      <div className={style.bonus}>
        <h3
          style={{
            fontSize: '50px',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          Best Selling
        </h3>
        <div className={style.iconBonus}>
          <FaSalesforce />
        </div>
        <div className={style.bonusNext}>
          <div className={style.hotSale}>
            <img src='image/book-7.png' alt='' />
            <div className={style.hotText}>
              <div className={style.hotInfo}>
                <h5>Sea</h5>
                <div className={style.price}>
                  $16.91 <span>$20.97</span>
                </div>
              </div>

              <button>Add to cart</button>
            </div>
            <span className={style.bestSale1}>-25%</span>
          </div>
          <div className={style.hotSale}>
            <img src='image/book-8.png' alt='' />
            <div className={style.hotText}>
              <div className={style.hotInfo}>
                <h5>Cool Kid</h5>
                <div className={style.price}>
                  $13.91 <span>$22.65</span>
                </div>
              </div>

              <button>Add to cart</button>
            </div>
            <span className={style.bestSale1}>-45%</span>
          </div>
          <div className={style.hotSale}>
            <img src='image/book5.png' alt='' />
            <div className={style.hotText}>
              <div className={style.hotInfo}>
                <h5>Grateful</h5>
                <div className={style.price}>
                  $7.89 <span>$20.18</span>
                </div>
              </div>

              <button>Add to cart</button>
            </div>
            <span className={style.bestSale1}>-75%</span>
          </div>
        </div>
      </div>

      <section className={style.arrivals} id='arrivals'>
        <h1 className={style.heading}>
          <span>New Arrivals</span>
        </h1>

        <div className={style.arrivalsSlider}>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book-1.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>The art city</h3>
              <div className={style.price}>
                $15.91 <span>$20.97</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book-2.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>Happy</h3>
              <div className={style.price}>
                $10.88 <span>$15.99</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book-3.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>Your name</h3>
              <div className={style.price}>
                $12.11 <span>$18.52</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book-10.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>Retro</h3>
              <div className={style.price}>
                $8.29 <span>$11.33</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book7.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>Your Text</h3>
              <div className={style.price}>
                $11.15 <span>$18.26</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book6jpg.jpg' alt='' />
            </div>
            <div className={style.content}>
              <h3>The Lyrics</h3>
              <div className={style.price}>
                $20.12 <span>$23.14</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book-9.png' alt='' />
            </div>
            <div className={style.content}>
              <h3>Love</h3>
              <div className={style.price}>
                $18.19 <span>$22.56</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
            </div>
          </div>

          <div className={style.box} style={{ marginLeft: '10px' }}>
            <div className={style.image}>
              <img src='image/book2.jpg' alt='' />
            </div>
            <div className={style.content}>
              <h3>Who am I</h3>
              <div className={style.price}>
                $6.12 <span>$10.03</span>
              </div>
              <div className={style.stars}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={style.sub}>
        <h2 style={{ fontSize: '40px' }}>SUBSCRIBE TO NEWSLETTER</h2>
        <p
          style={{
            marginTop: '10px',
            padding: '10px 12px',
            marginBottom: '12px',
          }}
        >
          There are many variations of passages of Lor available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words
        </p>
        <div className={style.subEmail}>
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter your email'
            style={{
              backgroundColor: '#f8f8f8',
              border: '2px solid #333',
              borderRadius: '4px',
              color: '#9d9d9d',
              fontSize: '15px',
              height: '50px',
              padding: ' 13px 30px 13px 25px',
              width: '30%',
              marginRight: '2px',
            }}
          />
          <button className={style.buttonEmail}>Subsribe</button>
        </div>
      </div>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  )
}
