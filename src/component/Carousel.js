import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel(props) {
  const { item } = props

  const options = {

    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        center: true,
        stagePadding: 80,
        margin: 80,
      },
      400: {
        items: 2,
        stagePadding: 20,
        margin: 80
      },

      600: {
        items: 3,
        stagePadding: 20,
        margin: 80
      },
      1000: {
        items: 5,
        stagePadding: 50,
        margin: 80
      },
    },
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <OwlCarousel className="owl-theme" {...options} >
        {
          item?.map((item) => {
            return (
              <div>
                <div>
                  <img src={item.picture} style={{ objectFit: 'cover', width: '200px', height: '200px' }} />
                </div>
                <div style={{ textAlign: 'center', backgroundColor: '#FCDDEC', width: '200px', marginTop: '1px', color: 'gray' }}>
                  <p>NAME : {item.name}</p>
                  <p>PRICE : {item.price} BATH</p>
                </div>
              </div>

            )
          })
        }
      </OwlCarousel>
    </div>
  )
}

export default Carousel
