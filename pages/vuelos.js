import Link from "next/link";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";

const Vuelos = (props) => {
  console.log(props);
  return (
    <Container>
      <h1>Estos son los siguientes vuelos</h1>
    </Container>
  );
};

export default Vuelos;
