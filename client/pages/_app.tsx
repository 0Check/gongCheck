import type { AppProps } from "next/app";
import global from "../styles/global";
import { Global } from "@emotion/react";
import theme from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
