import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Screenshots} from '../../api/freeToGameApi'
import 'swiper/css'

type GameCarouselProps = {
  slides: Array<Screenshots>
}

export const GameCarousel: FC<GameCarouselProps> = ({slides}) => {
  console.log(slides)
  return (
    <Swiper
    //   spaceBetween={3}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map(({id, image}) => (
        <SwiperSlide key={id}>
          <img src={image} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
