import { NextComponentType } from "next";
import Head from "next/head";
import '../styles/bootstrap.min.css'

interface Props {
  Component: NextComponentType
}

function MyApp({Component, ...props} : Props) {
    return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>portfolio · geopat.io / georgep9</title>
          </Head>
          <Component/>
        </>
    );
}
export default MyApp;