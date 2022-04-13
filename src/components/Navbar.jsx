
const Navbar = ({ setOpenMenu }) => {
  return (
    <nav className="absolute top-0 py-10 md:px-24 px-5 z-10 left-0 w-full">
        <div className="container mx-auto w-full flex justify-between items-center">
          <img src="/images/logo.svg" alt="logo" />
          <ul className="hidden md:flex items-center gap-5 alata text-white">
              <li className="hover:border-b-2 hover:border-white cursor-pointer">About</li>
              <li className="hover:border-b-2 hover:border-white cursor-pointer">Careers</li>
              <li className="hover:border-b-2 hover:border-white cursor-pointer">Events</li>
              <li className="hover:border-b-2 hover:border-white cursor-pointer">Products</li>
              <li className="hover:border-b-2 hover:border-white cursor-pointer">Support</li>
          </ul>
          <img onClick={() => setOpenMenu(true)} className="md:hidden block" src="/images/icon-hamburger.svg" alt="hamburger" />
        </div>
    </nav>
  )
}

export default Navbar