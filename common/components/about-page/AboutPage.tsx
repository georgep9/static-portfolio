`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import Link from 'next/link';
import Button from '../elements/Button';
import { Picture } from '../elements/PictureLink';
import ButtonLayout from "../layout/ButtonLayout"
import { ImgProps } from '../types';

const headshotImgProps : ImgProps = {
  src: './prof_head.jpg',
  alt: 'me',
  href: '',
  desc: 'An aspiring nomadic developer with a thirst for knowledge!'
}

const AboutPage = () => {

  const aboutHeader = () => {
    return (<>
      <h5 className="text-center">Hey 👋 I&apos;m George Patterson</h5>
      <div className="text-center"><b className="text-info">👨‍💻 Graduate Software Engineer from Brisbane 🇦🇺</b></div>
    </>)
  }

  const aboutContent = () => {
    return (<>
      <Picture {...headshotImgProps}/>
      <p className="text-muted">
        Curiously and passionately developing code from early on, from low-level C pointers up to AWS microservices.
      </p>
      <p className="text-muted">
        Uni knowledge and industry experiences in embedded systems, computer science, web development, and DLT has bootstrapped my early career with a wide breadth of skills.
      </p>
      <p>
        I now focus & specialise in full-stack cloud development as a graduate engineer. Although my profressional stack is yet to be determined 😛
      </p>
      <p className="text-muted">
        Feel free to check out some of my personal github projects and contributions @ <a href="https://github.com/georgep9">github.com/georgep9</a>
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
