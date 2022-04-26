import React, { useState } from "react";
import Router from "../Router";
import GlobalStyle from "../styles/GolbalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  console.log(isDark);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
