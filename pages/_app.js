import "../styles/globals.css";
import AppLayout from "./components/layout/AppLayout";
import "../public/static/fonts/style.css";
import cookies from "next-cookies";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
MyApp.getStaticProps = async (appContext) => {
  const appProps = await MyApp.getStaticProps(appContext);

  return { ...appProps };
};
export default MyApp;
