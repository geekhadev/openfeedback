const Features  () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">Funcionalidades</h2>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">Feedback</h3>
          <p>
            Recibe feedback de tus proyectos, y mejora cada día mas.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Posicionamiento</h3>
          <p>
            Haz visible tus proyectos, y llega a mas personas.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Portafolio</h3>
          <p>
            Obtén un portafolio de tus proyectos, y comparte tu trabajo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
