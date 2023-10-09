import { paragraphHero, titleButtonHero, welcome } from '@/constant/home'

const Hero = () => {
  return (
    <section className='flex flex-col gap-6 h-full justify-center'>
      <h2 className='text-6xl font-bold max-w-2xl'>{welcome}</h2>
      <p className='text-lg max-w-2xl text-gray-300'>{paragraphHero}</p>
      <div className='flex gap-2'>
        <button
          href='#'
          className='relative px-8 py-4 font-bold text-black hover:text-white rounded-full bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-800'
        >
          {titleButtonHero}
        </button>
      </div>
    </section>
  )
}

export default Hero
