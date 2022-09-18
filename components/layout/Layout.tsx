import Link from 'next/link'
import React, { ReactNode } from "react";
import Image from 'next/image'

interface Props {
    children?: ReactNode
}

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-brand">
          George Patterson
        </div>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">About Me  ☕</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <a className="nav-link">Portfolio 💼</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact 📝</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export const Footer = () => {
  return (
    <div>
      <p>Copyright George Patterson @ 2022</p>
    </div>
  )
};
  
const Layout = ({children, ...props}: Props) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;