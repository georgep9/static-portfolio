import { NextComponentType } from "next";
import Head from "next/head";
import '../styles/bootstrap.min.css'

interface Props {
  Component: NextComponentType
  // any props that come into the component
}

function MyApp({Component, ...props} : Props) {
    return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component/>
        </>
    );
}
export default MyApp;