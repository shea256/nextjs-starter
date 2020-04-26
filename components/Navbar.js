import { useState } from 'react'
import Link from 'next/link'
import { NavbarToggler, Collapse } from 'reactstrap'
import { useUser } from '../lib/hooks'

export default function Navbar() {
  const [user, { mutate }] = useUser()

  async function handleLogout() {
    await fetch('/api/logout')
    mutate({ user: null })
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <Link href="/">
          <a className="navbar-brand">NextJS</a>
        </Link>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <div className="navbar-nav ml-auto">
          {user ? (
            <>
              <li>
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className="nav-link">Profile</a>
                </Link>
              </li>
              <li>
                <a className="nav-link" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="nav-link">Signup</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
            </>
          )}
          </div>
        </Collapse>
      </nav>
      <style jsx>{`
        .navbar-light .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
      `}</style>
    </header>
  )
}
