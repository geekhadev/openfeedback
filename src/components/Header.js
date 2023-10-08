const Header = () => {
  return (
    <header className="flex flex-row justify-between py-6 items-center">
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        OpenFeedback
      </h1>
      <nav className="gap-4 flex text-xl">
        <a className="font-bold hover:text-pink-400" href="/#projects">Proyectos</a>
        <a className="font-bold hover:text-pink-400" href="#">Login</a>
        <a className="font-bold hover:text-pink-400" href="#">Register</a>
      </nav>
    </header>
  )
}

export default Header
