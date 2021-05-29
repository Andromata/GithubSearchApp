import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Components/Searchbar/Search";
import "./App.scss";
import CatalogueUsers from "./Components/Catalogue/CatalogueUsers";
import CatalogueRepos from "./Components/Catalogue/CatalogueRepos";

function App() {
  const { loading } = useSelector((store) => store.Request);
  return (
    <Fragment>
      <div
        className={
          loading
            ? "container-main full-width column"
            : "container-main full-width column"
        }
      >
        <div>
          <Search />
        </div>
        <div
          className={
            loading ? "container-results loading" : "container-results"
          }
        >
          <Route exact path="/users" component={CatalogueUsers} />
          <Route path="/repositories" component={CatalogueRepos} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
