const Itinerarys = (props) => {

  var bgreen = {
    backgroundColor: '000',
  };

  return (
    <div className="pt-3">
      <table className="table table-striped">
        <tbody><tr>
            <th rowSpan="5" className="title" style={{
        backgroundColor: '#acd038',
        textAlign: 'center',
        paddingTop: '20%',
        color: '#fff',
        fontSize: '20px',
      }}>Información de vuelos</th></tr>
            {props.flights.map((flight) => (
              <tr>
              <td>
              <ul className="mt-0 mb-0 p-0"><b>Aerolínea</b> &nbsp; &nbsp; {flight.aerolinea_validadora}</ul>
              <ul className="mt-0 mb-0 p-0"><b>Salida</b> &nbsp; &nbsp; {flight.FechaSalida}</ul>
              <ul className="mt-0 mb-0 p-0"><b>Hora</b> &nbsp; &nbsp; {flight.HoraSalida}</ul>
              <ul className="mt-0 mb-0 p-0"><b>No. de vuelo</b> &nbsp; &nbsp; {flight.numero_vuelo}</ul>
            </td>
            <td>
              <ul className="mt-0 mb-0 p-0" >&nbsp;</ul>
              <ul className="mt-0 mb-0 p-0"><b>Llegada</b> &nbsp; &nbsp; {flight.FechaLLegada}</ul>
              <ul className="mt-0 mb-0 p-0"><b>Hora</b> &nbsp; &nbsp; {flight.HoraLLegada}</ul>
              <ul className="mt-0 mb-0 p-0"><b>Ruta</b> &nbsp; &nbsp; {flight.origen} - {flight.destino}</ul>
            </td>
            </tr>
            ))}
        </tbody></table>
    </div>
  );
};

export default Itinerarys;
