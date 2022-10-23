import Link from 'next/link';
import Button from '../elements/Button';
import { Picture } from '../elements/PictureLink';
import ButtonLayout from "../layout/ButtonLayout"
import { ImgProps } from '../types';

const headshotImgProps : ImgProps = {
  src: './prof_head.jpg',
  alt: 'me',
  href: '',
  desc: 'Aspiring nomadic developer with a thirst for knowledge :)'
}

const AboutPage = () => {

  const aboutHeader = () => {
    return (<>
      <h5 className="text-center">Hey 👋 im Georgep9</h5>
      <Picture {...headshotImgProps}/>
      <div className="text-center"><b className="text-info">Graduate Software Engineer from Brisbane 👨‍💻</b></div>
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
