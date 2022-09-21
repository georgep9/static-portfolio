import Link from "next/link"

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">geopat / georgep9</a>
                    <ul className="navbar-nav">
                        <Link href="/">
                            <a className="nav-link">About ☕</a>
                        </Link>
                        <li className="nav-item">
                            <Link href="/portfolio">
                                <a className="nav-link">Portfolio 💼</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Reach 📝</a>
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
      </>
    )
  }

export default NavBar