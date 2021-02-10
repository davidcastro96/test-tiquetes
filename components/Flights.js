const Flights = (props) => {
  return (
    <ul>
      {props.flights.map( flights => (
        <li>
          <h5>{flights.codigo_reserva}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Flights;
