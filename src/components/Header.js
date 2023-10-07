const Header = () => {
  return (
    <header className="flex flex-row justify-between py-12 items-center">
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        OpenFeedback
      </h1>
      <nav className="gap-10 flex text-xl">
        <a className="hover:text-pink-600" href="#">Login</a>
        <a className="hover:text-pink-600" href="#">Register</a>
      </nav>
    </header>
  )
}

export default Header
