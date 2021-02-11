import Link from "next/link";
import Container from "../components/Container";
import Fetch from "isomorphic-unfetch";
import Itinerary from "../components/Itinerary";

const Vuelos = (props) => {
  return (
    <Container>
      <h1>Estos son los siguientes vuelos</h1>
      <p>Estos son los vuelos: {props.HoraLLegada}</p>
    </Container>
  );
};

Vuelos.getInitialProps = async function () {
  const res = await Fetch(
    "https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737"
  );
  const data = await res.json();
  console.log(data);
  return {
    codigo_reserva: data.codigo_reserva,
    origen: data.origen,
    destino: data.destino,
    FechaSalida: data.FechaSalida,
    HoraSalida: data.HoraSalida,
    FechaLLegada: data.FechaLLegada,
    HoraLLegada: data.HoraLLegada,
    numero_vuelo: data.numero_vuelo,
    aerolinea_validadora: data.aerolinea_validadora,
  };
};

export default Vuelos;
