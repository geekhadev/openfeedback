const Hero = () => {
  return (
    <section className="flex flex-col gap-6 h-full justify-center">
      <h2 className="text-6xl font-bold max-w-2xl">Welcome to OpenFeedback</h2>
      <p className="text-lg max-w-2xl text-gray-300">
        Publica y recibe feedback y valoración en tus proyectos.
        Aumenta tu visibilidad, mejora tus habilidades y genera un portafolio para tus proyectos.
      </p>
      <div className="flex gap-2">
        <button href="#" className="relative px-8 py-4 font-bold text-black hover:text-white rounded-full bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-800">
          Registrate y participa!
        </button>
      </div>
    </section>
  )
}

export default Hero
