import "../styles/globals.less";
import "../styles/common.less";

import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { loadEnvironment } from "../store/action";
import store from "../store/store";

const progress = new ProgressBar({
  color: "#838996",
  size: 3,
});

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

const RootApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    loadEnvironment();
  }, []);

  return (
    <>
      <Head>
        <title>Places of interest</title>
      </Head>
      <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default appWithTranslation(RootApp);
