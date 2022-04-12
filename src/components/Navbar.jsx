
const Navbar = () => {
  return (
    <nav className="absolute top-0 py-10 px-24 z-10 left-0 w-full">
        <div className="container mx-auto w-full flex justify-between items-center">
          <img src="/images/logo.svg" alt="logo" />
          <ul className="flex items-center gap-5 alata text-white">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar