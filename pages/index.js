import Head from "next/head";
import Container from "../components/Container";
import Vuelos from "./vuelos";
import fetch from "isomorphic-fetch"

const Index = () => {
  return (
    <Container>
      <Head>
        <title>Página Principal</title>
      </Head>
      <h1>Página principal</h1>
    </Container>
  );
};

export default Index;
