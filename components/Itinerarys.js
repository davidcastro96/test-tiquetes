const Itinerarys = (props) => {
  return (
    <ul className="List-group">
      {props.flights.map((flight) => (
        <li>
          <h5>{flights.codigo_reserva}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Itinerarys;
