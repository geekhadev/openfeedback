const Hero = () => {
  return (
    <section className="py-12 max-w-md">
      <h2 className="text-2xl font-bold">Welcome to OpenFeedback</h2>
      <p className="text-lg">
        OpenFeedback is a free and open source feedback system. It is built
        with Next.js, TailwindCSS and Firebase.
      </p>
      <button href="#" className={styles.hero}>
        Registrate y participa!
      </button>
    </section>
  )
}

export default Hero

const styles = {
  hero: 'mt-4 px-4 py-4 font-bold text-white rounded bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-800'
}
