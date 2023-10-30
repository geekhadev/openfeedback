'use client'
import { useState } from 'react'
import Modal from './modals/ParentModal'
import ProjectSwiper from './ProjectSwiper'

const ProjectImage = ({ allImages, src, width, height, action = true }) => {
  const [openModal, setOpenModal] = useState(false)

  const customStyle = {
    width,
    height,
    objectFit: 'cover',
    cursor: action ? 'pointer' : 'default'
  }
  const handleModal = (e) => {
    if (action) {
      setOpenModal(!openModal)
    }
    e.stopPropagation()
  }

  return (
    <>
      <img
        onClick={handleModal}
        width={width}
        height={height}
        src={src}
        style={customStyle}
        alt='project image'
      />

      {openModal && (
        <Modal close={handleModal}>
          <ProjectSwiper
            images={allImages}
            width={995}
            height={600}
            action={false}
          />
        </Modal>
      )}
    </>
  )
}

export default ProjectImage
