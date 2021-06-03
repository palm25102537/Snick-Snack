import React, { useEffect } from 'react'
import Header from '../component/Header'
import Category from '../component/Category'
import axios from 'axios';
import Carousel from '../component/Carousel'
import BottomNavBar from '../component/BottomNavBar'
import { useMyContext } from '../context/myContext'


function HomePage() {
  const { troggle } = useMyContext()

  async function getCategory() {
    const res = await axios.get('http://localhost:8000/category')
    console.log(res)
  }
  useEffect(() => {
    getCategory()
  }, [])
  const category = [
    { name: 'Snack', thumbnail: 'https://image.freepik.com/free-vector/colorful-snack-collection-with-flat-design_23-2147914418.jpg' },
    { name: 'Beverage', thumbnail: 'https://img.freepik.com/free-vector/drink-beverages_102902-128.jpg?size=338&ext=jpg' },
    { name: 'Instant Noodle', thumbnail: 'https://static.straitstimes.com.sg/s3fs-public/styles/xxx_large/public/articles/2020/02/28/md-instantnoodles-2802.jpg?itok=7JLy_t7I' },
    { name: 'Instant Beverage', thumbnail: 'https://image.freepik.com/free-vector/coffee-isometric-set_98292-109.jpg?1' }
  ]
  const bestSeller = [
    { name: 'United Almond', picture: 'https://cf.shopee.co.th/file/d8232bac6ff3ecdbb12b2a87601e8970', price: 90 },
    { name: 'Ligo', picture: 'https://cf.shopee.co.th/file/e71832c0d83c64f6cadc88e14cad892a', price: 30 },

  ]
  const promotion = [
    { name: 'United Almond', picture: 'https://cf.shopee.co.th/file/d8232bac6ff3ecdbb12b2a87601e8970', price: 90 },
    { name: 'Ligo', picture: 'https://cf.shopee.co.th/file/e71832c0d83c64f6cadc88e14cad892a', price: 30 },

  ]
  return (
    <div className='App'>
      <Header troggle={troggle} />
      <div style={{ marginTop: '20px' }}>
        <h3>Best seller</h3>
        <Carousel item={bestSeller} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Promotion</h3>
        <Carousel item={promotion} />
      </div>
      <div className='app-grid' >
        {
          category.map((item) => {
            return (
              <>
                <Category item={item} />
              </>
            )
          })
        }
      </div>
      <BottomNavBar />
    </div >
  )
}

export default HomePage

