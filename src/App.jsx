import "./App.css";
import Header from "./Components/Header";
import Lpage from "./Components/Lpage";
import Category from "./Components/Category";
import PopularB from "./Components/PopularB";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import bookStore from "./Utils/bookStore";
import { Provider } from "react-redux";

function App() {
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState([]);

  return (
    <>
      <Provider store={bookStore}>
        <Header />
        <Outlet context={{ term, setTerm, search, setSearch }} />
      </Provider>
    </>
  );
}

export default App;
