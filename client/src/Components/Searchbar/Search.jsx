import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchData, cleanResults } from "../../Redux/Actions";
import { setActive } from "../../Redux/Actions/RequestStatus";
import { debounce } from "lodash";
import * as ImIcons from "react-icons/im";
import "./Search.scss";

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { Request, Users, Repositories } = useSelector((store) => store);
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    const deb = debounce(() => setSearch(text), 1000);
    deb();
  };

  const handleActiveSearch = (e) => {
    dispatch(setActive(e.target.value));
    history.push(`/${e.target.value}`);
  };
  useEffect(() => {
    if(Request.value === "default") return
    const getData = async () => {
      if (search.length >= 3) {
        dispatch(searchData({ type: Request.active, text: search }));
      } else {
        dispatch(cleanResults({ type: Request.active }));
      }
    };
    getData();
  }, [search, Request.active]);

  return (
    <div
      className={
        Users.results.length < 1
          ? "container-searchbar inactive"
          : "container-searchbar"
      }
    >
      <div className="header">
        <div className="icon">
          <ImIcons.ImGithub clasname="github-icon" />
        </div>
        <div className="title">
          <h1>GitHub Searcher</h1>
          <h2>Search users or repositories below</h2>
        </div>
      </div>
      <div className="searchbar">
        <input
          type="text"
          className="inputsearch"
          placeholder="Start typing to search .."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          name="searchtype"
          id=""
          className="selectsearch"
          value={Request.active}
          onChange={(e) => handleActiveSearch(e)}
        >
          <option disabled selected value="default">
            {" "}select{" "}
          </option>
          <option value="users">Users</option>
          <option value="repositories">Repositories</option>
        </select>
      </div>
    </div>
  );
}
