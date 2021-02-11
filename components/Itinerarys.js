const Itinerarys = (props) => {
  return (
    <div className="container pt-3">
      {props.flights.map((flight) => (
        <table border="1px">
          <tbody>
            <tr>
              <td rowSpan={3}>Campo unificado</td>
              <td>Campo 2</td>
              <td>Campo 3</td>
            </tr>
            <tr>
              <td>Campo 5</td>
              <td>Campo 6</td>
            </tr>
            <tr>
              <td>Campo 8</td>
              <td>Campo 9</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Itinerarys;
