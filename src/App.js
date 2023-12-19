import React from "react";
import Page1 from "./pages/Page1/Page1.tsx";
import Page2 from "./pages/Page2/Page2.tsx";
import Page3 from "./pages/Page3/Page3.tsx";
import Wave from "./components/Wave/Wave.tsx";
import Page4 from "./pages/Page4/Page4.tsx";
import Page5 from "./pages/Page5/Page5.tsx";

import './App.css';
import Header from "./components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <Page1/>
      <Wave/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  );
}

export default App;
