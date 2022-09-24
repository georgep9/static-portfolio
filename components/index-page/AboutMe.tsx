import { NextPage } from "next"
import Image from 'next/image'


const AboutMe : NextPage = (props) => {
  return (
    <>
      <h4>
        &emsp;Welcome to my portfolio 👋
      </h4>
      <p className="text-muted">
        A personal showcase of my projects, academia, and industry experiences.
      </p>
      <h4>
        About me
      </h4>
      <h5 >
        &emsp;George Patterson&emsp;<b className="text-primary">Junior Software Engineer</b>&emsp;👨‍💻
      </h5>
      <p className="text-muted">
        My passion for technology and computer science, fuelled with a thurst for knowledge, continues to motivate me towards software engineering. Developing to improve the productivity and quality of everyday life.
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
