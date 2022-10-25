import { NextPage } from "next"
import Link from "next/link";
import Button from "../elements/Button";

const Index : NextPage = () => {

  return (
    <>
      <h4>Hey, 👋 welcome to my portfolio!</h4>
      <p className="text-muted">
        Here you&apos;ll find a personal showcase of my projects, academia, and industry experiences.
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
