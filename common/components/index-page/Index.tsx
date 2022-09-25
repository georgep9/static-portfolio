import { NextPage } from "next"
import Link from "next/link";
import Button from "../elements/Button";

const Index : NextPage = () => {

  return (
    <>
      <h4>Hey, 👋 welcome to my portfolio!</h4>
      <p className="text-muted">
        Here you'll find a personal showcase of my projects, academia, and industry experiences.
      </p>
      <Link href="/about">
        <a><Button label="About Me 👨‍💻"/></a>
      </Link>
    </>
  )
}

export default Index
