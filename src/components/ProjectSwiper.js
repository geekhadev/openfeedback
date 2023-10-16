'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,
  Keyboard
} from 'swiper/modules'
import 'swiper/css'
import ProjectImage from './ProjectImage'

const ProjectSwiper = ({ images, width = 500, height = 400, action }) => {
  return (
    <Swiper
      className='mySwiper'
      modules={[Pagination, Navigation, Autoplay, Keyboard, EffectFlip]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      navigation
      effect='flip'
      keyboard
      autoplay
    >
      {images?.map((img, index) => (
        <SwiperSlide key={index}>
          <ProjectImage
            width={width}
            height={height}
            src={img.url}
            action={action}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectSwiper
