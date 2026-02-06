import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, Search, Menu, TicketPlus } from 'lucide-react'
import { assets } from '../assets/assets'
import { useUser, useClerk, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/40 backdrop-blur">
      
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 z-50 flex flex-col md:flex-row items-center gap-8 
        max-md:justify-center max-md:h-screen max-md:bg-black md:bg-white/10 md:rounded-full 
        md:px-8 py-3 transition-all duration-300
        ${isOpen ? 'max-md:w-full' : 'max-md:w-0 overflow-hidden'}`}
      >
        <X
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {['/', '/movies', '/theaters', '/releases', '/favorites'].map((path, i) => (
          <Link
            key={i}
            to={path}
            onClick={() => {
              window.scrollTo(0, 0)
              setIsOpen(false)
            }}
          >
            {path === '/' ? 'Home' : path.replace('/', '')}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Search className="max-md:hidden w-6 h-6 cursor-pointer text-white" />

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-6 py-2 bg-primary rounded-full font-medium"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus size={15} />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <Menu
        className="md:hidden w-8 h-8 cursor-pointer text-white"
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}

export default Navbar
