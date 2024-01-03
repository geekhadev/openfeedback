import { projects, starts, valoration } from '@/constant/home'
import Link from 'next/link'

import { PROJECTS } from '@/template'

const Projects = () => {
  return (
    <section className='py-12 px-6 md:px-0' id='projects'>
      <h2 className='text-4xl font-bold mb-6 text-gray-400'>{projects}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {PROJECTS.map(({ id, title, images, description, categories }) => (
           <Link href={`http://localhost:3000/projects/${id}`}
            key={id}
            className='border border-gray-200 rounded-lg shadow w-fit'
          >
              <img className='rounded-t-lg' src={images[0].url} alt={title} />
            <div className='p-5 flex flex-col gap-2'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {title}
                </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {description}
              </p>
              <div className='flex gap-1'>
                {categories.map((category) => (
                  <span key={category} className='text-black hover:text-white text-sm rounded-full p-1 px-2 bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-800'>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                ))}
              </div>
              <div className='flex flex-col'>
                <p>
                  {valoration}: <span className='text-yellow-400'>{starts}</span>
                </p>
                <p>
                  Feedbacks: <span className='text-gray-400'>0</span>
                </p>
              </div>
            </div>
            </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
