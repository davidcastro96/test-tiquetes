const Flights = (props) => {
  return (
    <ul>
      {props.flights.map((flight) => (
        <li>
          <h5>{flight.codigo_reserva}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Flights;
