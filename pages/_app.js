// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default App;