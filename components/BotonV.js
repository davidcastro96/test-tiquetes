import Link from "next/link";
const BotonV = (props) => (
  <div className="container pt-3">
    <Link href="/vuelos">
      <button type="button" className="btn btn-outline-danger btn-lg btn-block">
        Ir a vuelos
      </button>
    </Link>
    <Link href="/">
      <button type="button" className="btn btn-outline-danger btn-lg btn-block">
        Regresar
      </button>
    </Link>
  </div>
);
export default BotonV;
