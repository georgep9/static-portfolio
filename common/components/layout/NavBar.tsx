import Link from "next/link"
import Button from "../elements/Button"

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid ">
                    <Link href="/">
                        <a><Button label="portfolio.geopat.io"/></a>
                    </Link>
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <Link href="/about">
                                <a><Button label="👨‍💻"/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <a><Button label="🗂️"/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a><Button label="☕"/></a>
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
      </>
    )
  }

export default NavBar