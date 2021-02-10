import Link from "next/link";
const BotonV = (props) => (
  <div className="container pt-4">
    <Link href="/vuelos">
      <button type="button" class="btn btn-outline-danger btn-lg btn-block">
        Ir a vuelos
      </button>
    </Link>
    <Link href="/">
      <button type="button" class="btn btn-outline-danger btn-lg btn-block">
        Regresar
      </button>
    </Link>
  </div>
);
export default BotonV;
