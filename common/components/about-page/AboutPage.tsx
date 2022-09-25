import Link from 'next/link';
import Button from '../elements/Button';
import ButtonLayout from "../layout/ButtonLayout"


const AboutPage = () => {

  const aboutHeader = () => {
    return (<>
      <h5 className="text-center">Hi, I'm George Patterson</h5>
      <img className="rounded mx-auto d-block"  src='./prof_head.jpg' alt='me' style={{width: "50%", height: "auto"}}/>
      <div className="text-center"><b className="text-primary">Graduate Software Engineer from Brisbane 👨‍💻</b></div>
    </>)
  }

  const aboutContent = () => {
    return (<>
      <p className="text-muted">
        Curiously and passionately developing code, from C pointers to microservices.
      </p>
      <p className="text-muted">
        University knowledge and industry experiences in embedded systems, computer science, web development, and distributed-decentralised systems has bootstrapped my early career with a wide breadth of skills. I now specialise in full-stack development as a graduate engineer.
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
        <a><Button label="Portfolio 🗂️"/></a>
      </Link>
    </>
  )
}

export default AboutPage
