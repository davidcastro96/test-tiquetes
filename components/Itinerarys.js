const Itinerarys = (props) => {
  return (
    <ul className="List-group">
      {props.users.map((user) => (
        <li>
          <h5>Name: {users.name}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Itinerarys;
