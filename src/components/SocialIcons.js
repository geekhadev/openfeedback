import { BsDiscord } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const SocialIcons = () => {
  return (
    <>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://discord.gg/VRXCPxwq'
        className='my-auto transition duration-300 ease-in-out hover:text-blue-500'
      >
        {<BsDiscord size={30} />}
      </a>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://github.com/geekhadev/openfeedback'
        className='my-auto transition duration-300 ease-in-out hover:text-gray-700'
      >
        {<AiFillGithub size={30} />}
      </a>
    </>
  )
}

export default SocialIcons
