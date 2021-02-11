import Link from "next/link";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Itinerarys from "../components/Itinerarys";

const Vuelos = (props) => {
  return (
    <Container>
      <h3>Estos son los siguientes vuelsos</h3>
      <Itinerarys flights={props.flights} />
    </Container>
  );
};

Vuelos.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737"
  );
  const resJSON = await res.json();
  return { flights: resJSON.respuesta };
};

export default Vuelos;
