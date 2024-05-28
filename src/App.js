// App.js
import React from "react";
import Header from "./layouts/Header";
import Main from "./routes/MainHook";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
