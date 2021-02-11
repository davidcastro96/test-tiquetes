const Itinerarys = (props) => {
  return (
    <ul className="List-group pt-3">
      {props.flights.map((flight) => (
        <li className="list-group-item list-group-item-action">
          <h5>{flight.codigo_reserva}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Itinerarys;
