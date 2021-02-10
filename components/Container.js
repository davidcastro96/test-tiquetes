import Head from "next/head";
import BotonV from "../components/BotonV";

const Container = (props) => (
  <div>
    <Head>
      <title>Vuelos</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/united/bootstrap.min.css"
      />
    </Head>
    <BotonV />
    <div className="container p-4">{props.children}</div>
  </div>
);
export default Container;
