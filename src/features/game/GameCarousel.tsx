import {FC} from 'react'
import {Carousel, Image} from 'antd'

import {Screenshots} from '../../api/freeToGameApi'

type GameCarouselProps = {
  slides: Array<Screenshots>
}

export const GameCarousel: FC<GameCarouselProps> = ({slides}) => {
  console.log(slides)

  return (
    <Carousel>
      {slides.map(({id, image}) => (
        <Image key={id} src={image} />
      ))}
    </Carousel>
  )
}
