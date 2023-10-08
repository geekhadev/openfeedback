const Features = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold mb-6 text-gray-400">Funcionalidades</h2>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">Feedback</h3>
          <p>
            Recibe y escribe feedback de proyectos, mejora tus habilidades y ayuda a otros a mejorar.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Valoración</h3>
          <p>
            Mejora tus proyectos y escala en el ranking de valoraciones. Gana estrellas para tus proyectos.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Portafolio</h3>
          <p>
            Genera un portafolio con tus proyectos y valoraciones, con plantillas personalizables.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
