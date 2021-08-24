import "../styles/globals.less";
import "../styles/common.less";

import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";

import store from "../store/store";

const RootApp = ({ Component, pageProps }: AppProps) => (
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

export default appWithTranslation(RootApp);
