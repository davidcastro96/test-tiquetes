const Itinerarys = (props) => {
  return (
    <div className="container pt-3">
      {props.flights.map((flight) => (
        <div className="row row-cols-12">
          <li className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col">
                <li>dsds</li>
                <li>dsds</li>
                <li>dsds</li>
              </div>
              <div className="col">
                <li>dsds</li>
                <li>dsds</li>
                <li>dsds</li>
              </div>
              <div className="col">
                <li>dsds</li>
                <li>dsds</li>
                <li>dsds</li>
              </div>
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Itinerarys;
