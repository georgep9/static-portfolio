`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import { NextPage } from "next"
import Link from "next/link";
import Button from "../elements/Button";

const Index : NextPage = () => {

  return (
    <>
      <h4>welcome! 👋 to my static portfolio</h4>
      <p className="text-muted">
        <b>Here you&apos;ll find a showcase of my academia, projects, and industry experiences as a recent grad. This front-end is experimental and serves as an interactive CV.</b>
      </p>
      <Link href="/about">
        <a><Button label="👨‍💻 About Me"/></a>
      </Link>
      <Link href="/portfolio">
        <a><Button label="🗂️"/></a>
      </Link>
      <Link href="/contact">
        <a><Button label="☕"/></a>
      </Link>
    </>
  )
}

export default Index
