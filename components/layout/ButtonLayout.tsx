import React, { ReactElement } from "react";
import { useState } from "react";
import styles from '../layout.module.css';

interface Props {
  header: ReactElement,
  content: ReactElement
}

const ButtonLayout = ({header, content}: Props) => {

  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () =>  {
    isShowing ? setIsShowing(false) : setIsShowing(true)
  }

  return (
    <>
      <div className={styles.buttonContainer} onClick={handleClick}>
        {header}
        
        {isShowing && <>
          <div className={styles.buttonContent}>
            {content}
            </div>
        </>}
      </div>
    </>
  );
};

export default ButtonLayout;