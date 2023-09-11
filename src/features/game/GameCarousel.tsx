import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Screenshots} from '../../api/freeToGameApi'
import './game.modules.css'

type GameCarouselProps = {
  slides: Array<Screenshots>
}

export const GameCarousel: FC<GameCarouselProps> = ({slides}) => {
  console.log(slides)
  return (
    <Swiper
      className="swiper_image"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map(({id, image}) => (
        <SwiperSlide key={id}>
          <img src={image} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
