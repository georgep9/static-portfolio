import React, { ReactNode } from "react";
import NavBar from './NavBar';
import styles from '../styles/layout.module.css';

interface Props {
    children?: ReactNode
}

export const Footer = () => {
  return (
    <div>
      {'> © George Patterson 2022'} 
    </div>
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