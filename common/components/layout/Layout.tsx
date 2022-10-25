`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import React, { ReactNode } from "react";
import NavBar from './NavBar';
import styles from '../styles/layout.module.css';

interface Props {
    children?: ReactNode
}

export const Footer = () => {
  return (
    <>
      <button className="btn btn-secondary disabled">
        {'> © George Patterson 2022'}
      </button><br/><br/>
      <button className="btn btn-dark disabled">
        {'> developed with Next.js (Bootstrapped with Darkly)'}<br/>
      </button><br/>
    </>
  )
};

const Layout = ({children, ...props}: Props) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.container}>
        <Footer />
      </div>
      </>
  );
};

export default Layout;