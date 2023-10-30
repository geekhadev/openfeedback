import { projects, starts, valoration } from '@/constant/home'
import Link from 'next/link'

import { PROJECTS } from '@/template'

const Projects = () => {
  return (
    <section className='py-12 px-6 md:px-0' id='projects'>
      <h2 className='text-4xl font-bold mb-6 text-gray-400'>{projects}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {PROJECTS.map(({ id, title, images, description, categories }) => (
          <div
            key={id}
            className='border border-gray-200 rounded-lg shadow w-fit'
          >
            <Link href={`http://localhost:3000/projects/${id}`}>
              <img className='rounded-t-lg' src={images[0].url} alt={title} />
            </Link>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {title}
                </h5>
              </a>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {description}
              </p>
              <div className='flex'>
                {categories.map((category) => (
                  <span key={category} className='mr-1 text-gray-400'>
                    {category}
                  </span>
                ))}
              </div>
              <div className='flex flex-col'>
                <p>
                  {valoration}:<span className='text-yellow-400'>{starts}</span>
                </p>
                <p>
                  Feedbacks: <span className='text-gray-400'>0</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
