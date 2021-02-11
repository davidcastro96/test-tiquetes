import Link from "next/link";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Itinerarys from "../components/Itinerarys";

const Vuelos = (props) => {
  return (
    <Container>
      <h1>Estos son los siguientes vuelos</h1>
      <Itinerarys users={props.users} />
    </Container>
  );
};

Vuelos.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Vuelos;
