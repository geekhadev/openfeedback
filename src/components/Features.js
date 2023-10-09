import {
  feadback,
  features,
  paragraphOne,
  paragraphThree,
  paragraphTwo,
  portafolio,
  valoration
} from '@/constant/home'

const Features = () => {
  return (
    <section className='py-12'>
      <h2 className='text-4xl font-bold mb-6 text-gray-400'>{features}</h2>
      <div className='grid grid-cols-3 gap-10'>
        <div>
          <h3 className='text-xl font-bold'>{feadback}</h3>
          <p>{paragraphOne}</p>
        </div>
        <div>
          <h3 className='text-xl font-bold'>{valoration}</h3>
          <p>{paragraphTwo}</p>
        </div>
        <div>
          <h3 className='text-xl font-bold'>{portafolio}</h3>
          <p>{paragraphThree}</p>
        </div>
      </div>
    </section>
  )
}

export default Features
