import { paragraphFooter, titleLinkFooter } from '@/constant/home'

const Footer = () => {
  return (
    <footer className='py-12'>
      <p>
        {paragraphFooter} -
        <a href='#' className='text-blue-400'>
          {titleLinkFooter}
        </a>
      </p>
    </footer>
  )
}

export default Footer
