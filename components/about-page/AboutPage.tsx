import Link from 'next/link';
import Button from '../commons/Button';
import styles from '../layout.module.css';
import ButtonLayout from "../layout/ButtonLayout"


const AboutPage = () => {

  const aboutHeader = () => {
    return (<>
      <h5 className="text-center">George Patterson</h5>
      <div className={styles.pictureContainer}>
        <img className="rounded mx-auto d-block"  src='./prof_head.jpg' alt='me' style={{width: "50%", height: "auto"}}/>
      </div>
      <div className="text-center"><b className="text-primary">Graduate Software Engineer</b></div>
    </>)
  }

  const aboutContent = () => {
    return (<>
      <p className="text-muted">
        My passion for technology and computer science, fuelled with a thurst for knowledge, continues to motivate me towards software engineering. Developing code to improve the productivity and quality of everyday life.
      </p>
      <p className="text-muted">
        University knowledge and industry experiences in embedded systems, computer science, web development, and distributed-decentralised systems has bootstrapped my early career with strong foundational skills. I now specialise in full-stack development and cloud as a graduate engineer.
      </p>
      <p>
        Check out some of my projects and contributions @ <a href="https://github.com/georgep9">github.com/georgep9</a>
      </p>
    </>)
  }

  return (
    <>
      <ButtonLayout header={aboutHeader()} content={aboutContent()}/>
      <Link href="/portfolio">
        <a><Button label="Portfolio 📜"/></a>
      </Link>
    </>
  )
}

export default AboutPage
