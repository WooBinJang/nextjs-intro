import NavBar from "../component/navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: blue;
          }
        `}
      </style>
    </>
  );
}
