const Flights = (props) => {
  return (
      {
       props.flights.map( flights => (
        <li>
          <h5>{flights.codigo_reserva}</h5>
        </li>
      ))}
  );
};

export default Flights;
