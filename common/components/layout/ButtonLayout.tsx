import React, { ReactElement } from "react";
import { useState } from "react";
import styles from '../styles/layout.module.css';

interface Props {
  header: ReactElement,
  content: ReactElement,
  toggleContent?: ReactElement
}

const ButtonLayout = ({header, content, toggleContent}: Props) => {

  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () =>  {
    isShowing ? setIsShowing(false) : setIsShowing(true)
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonHeader} onClick={handleClick}>
          {header}
          {!isShowing && toggleContent}
        </div>
        {isShowing && <>
        <div className={styles.buttonContent}>
          {content}
        </div></>}
      </div>
    </>
  );
};

export default ButtonLayout;