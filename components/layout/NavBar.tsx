import Link from "next/link"


const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid ">
                    <ul className="navbar-nav mx-md-auto">
                        
                        <Link href="/">
                            <a className="navbar-brand">🧑‍💻 geopat.io / georgep9</a>
                        </Link>
                        <li className="nav-item">
                            <Link href="/portfolio">
                                <a className="nav-link">Portfolio ☕</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Reach 📧</a>
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
      </>
    )
  }

export default NavBar