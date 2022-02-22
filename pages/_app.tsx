import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";
import { store } from "../redux";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme == "dark" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout setTheme={setTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
