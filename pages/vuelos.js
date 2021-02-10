import Link from "next/link";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Flights from "../components/Flights";

const Vuelos = (props) => {
  console.log(props);
  return (
    <Container>
      <h1>Estos son los siguientes vuelos</h1>
      <Flights flights={props.flights} />
    </Container>
  );
};

Vuelos.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737"
  );
  const dato = await res.json();
  return { flights: dato };
};

export default Vuelos;
