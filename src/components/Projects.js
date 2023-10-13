import { projects, starts, valoration } from '@/constant/home'

const PROJECTS = [
  {
    id: '8379b07c-5e9b-4d77-a9ae-466fdce6715b',
    title: 'Website Somos Juniors',
    description: 'Website para la comunidad Somos Juniors',
    image: 'https://placehold.co/600x400',
    categories: ['Astro', 'React', 'Tailwind']
  },
  {
    id: '8379b07c-5e9b-4d77-a9ae-466fdce6715c',
    title: 'API con NodeJS',
    description: 'API con NodeJS, Express y MongoDB',
    image: 'https://placehold.co/600x400',
    categories: ['nodejs', 'express', 'mongodb']
  },
  {
    id: '8379b07c-5e9b-4d77-a9ae-466fdce6715d',
    title: 'API con NestJS',
    description: 'API con NestJS, Express y MongoDB',
    image: 'https://placehold.co/600x400',
    categories: ['nestjs', 'express', 'mongodb']
  },
  {
    id: '8379b07c-5e9b-4d77-a9ae-466fdce6715e',
    title: 'API con Laravel',
    description: 'API con Laravel, PHP y MySQL',
    image: 'https://placehold.co/600x400',
    categories: ['laravel', 'php', 'mysql']
  }
]

const Projects = () => {
  return (
    <section className='py-12 px-6 md:px-0' id='projects'>
      <h2 className='text-4xl font-bold mb-6 text-gray-400'>{projects}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {PROJECTS.map(({ id, title, image, description, categories }) => (
          <div key={id} className='border border-gray-200 rounded-lg shadow w-fit'>
            <a href='#'>
              <img className='rounded-t-lg' src={image} alt={title} />
            </a>
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
