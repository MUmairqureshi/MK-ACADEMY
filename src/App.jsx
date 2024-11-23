import { useState } from "react";
import { AppRouter } from "./router";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
