import { login, projects, register, title } from '@/constant/home'

const Header = () => {
  return (
    <header className='flex flex-row justify-between py-6 items-center'>
      <h1 className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        {title}
      </h1>
      <nav className='gap-4 flex text-xl'>
        <a className='font-bold hover:text-pink-400' href='/#projects'>
          {projects}
        </a>
        <a className='font-bold hover:text-pink-400' href='#'>
          {login}
        </a>
        <a className='font-bold hover:text-pink-400' href='#'>
          {register}
        </a>
      </nav>
    </header>
  )
}

export default Header
