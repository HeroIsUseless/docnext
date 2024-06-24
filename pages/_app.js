// pages/_app.js
import { Analytics } from "@vercel/analytics/react"
// import { GoogleAnalytics } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;