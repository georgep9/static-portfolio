import { NextPage } from "next"
import styles from '../layout.module.css';

const AboutMe : NextPage = () => {
  return (
    <>
      <h4>
        Welcome to my portfolio 👋
      </h4>
      <p className="text-muted">
        A personal showcase of my projects, academia, and industry experiences.
      </p>
      <h5 className="text-center">
        George Patterson&emsp;<b className="text-primary">Software Engineer</b>
      </h5>
      <div className={styles.pictureContainer}>
        <img className="rounded mx-auto d-block"  src='./prof_head.jpg' alt='me' style={{width: "50%", height: "auto"}}/>
      </div>
      
      <p className="text-muted">
        My passion for technology and computer science, fuelled with a thurst for knowledge, continues to motivate me towards software engineering. Developing code to improve the productivity and quality of everyday life.
      </p>
      <p className="text-muted">
        University knowledge and industry experiences in embedded systems, computer science, web development, and distributed-decentralised systems has bootstrapped my early career with strong foundational skills. I now specialise in full-stack development and cloud as a graduate engineer.
      </p>
      <p>
        Check out some of my projects and contributions @ <a href="https://github.com/georgep9">github.com/georgep9</a>
      </p>
    </>
  )
}

export default AboutMe
