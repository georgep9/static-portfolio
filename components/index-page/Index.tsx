import { NextPage } from "next"
import Link from "next/link";
import Button from "../commons/Button";
import styles from '../layout.module.css';

const Index : NextPage = () => {

  return (
    <>
      <h4>
        Welcome to my portfolio 👋
      </h4>
      <p className="text-muted">
        A personal showcase of my projects, academia, and industry experiences.
      </p>
      <Link href="/about">
        <a><Button label="About Me 👨‍💻"/></a>
      </Link>
    </>
  )
}

export default Index
