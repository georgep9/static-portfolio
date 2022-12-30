`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import Link from 'next/link';
import Button from '../elements/Button';
import { Picture } from '../elements/PictureLink';
import ButtonLayout from "../layout/ButtonLayout"
import { ImgProps } from '../types';

const headshotImgProps : ImgProps = {
  src: './headshot.jfif',
  alt: 'me',
  href: '',
  desc: '> currently learning rust'
}

const AboutPage = () => {

  const aboutHeader = () => {
    return (<>
      <h5 className="text-center">Hey 👋 I&apos;m George Patterson</h5>
      <div className="text-center"><b className="text-info">Computer Software Graduate from Brisbane 👨‍💻</b></div>
    </>)
  }

  const aboutContent = () => {
    return (<>
      <Picture {...headshotImgProps}/>
      <p className="text-muted">
        Passionately developing code, from memory pointers to microservices.
      </p>
      <p>
        Knowledge and experience in embedded systems, cloud computing, and DLT has bootstrapped my early career with a wide breadth of skills. 
      </p>
      <p>
        My profressional stack is yet to be determined 😛
      </p>
      <p className="text-muted">
        Feel free to check out some of my github projects and contributions @ <a href="https://github.com/georgep9">github.com/georgep9</a>
      </p>
    </>)
  }

  return (
    <>
      <ButtonLayout header={aboutHeader()} content={aboutContent()}/>
      <Link href="/portfolio">
        <a><Button label="🗂️ Portfolio"/></a>
      </Link>
      <Link href="/contact">
        <a><Button label="☕"/></a>
      </Link>
    </>
  )
}

export default AboutPage
