import Link from "next/link";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Itinerary from "../components/Itinerary"

const Vuelos = (props) => {
  return (
    <Container>
      <h1>Estos son los siguientes vuelos</h1>
      <Itinerary itinerary={props.itinerary}/>
    </Container>
  );
};

Vuelos.getInitialProps = async ctx => {
  const res = await fetch('https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737')
  const data = await res.json()
  return { 
    itinerary: data}
}

export default Vuelos;
