import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="width: 100%;">
      <Component {...pageProps} />
    </div>
  );
}
