import { BsDiscord, BsTwitch } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const SocialIcons = () => {
  return (
    <>
      <a
        href='#'
        className='my-auto transition duration-300 ease-in-out hover:text-blue-500'
      >
        {<BsDiscord size={30} />}
      </a>
      <a
        href='#'
        className='my-auto transition duration-300 ease-in-out hover:text-purple-700'
      >
        {<BsTwitch size={30} />}
      </a>
      <a
        href='#'
        className='my-auto transition duration-300 ease-in-out hover:text-gray-700'
      >
        {<AiFillGithub size={30} />}
      </a>
    </>
  )
}

export default SocialIcons
