import Link from 'next/link'
import React, { ReactNode } from "react";
import Image from 'next/image'

interface Props {
    children?: ReactNode
}

export const Header = () => {
  return (
    <div>
      <h3>
        George Patterson
      </h3>
      <Link href="/">
          <a><p>About Me</p></a>
      </Link>
      <Link href="/portfolio">
          <a><p>Portfolio</p></a>
      </Link>
    </div>
  )
};

export const Footer = () => {
  return (
    <div>
      <p>Copyright George Patterson @ 2022</p>
      <Image src="/georgep9.png" alt="georgep9" width={50} height={50}/>
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