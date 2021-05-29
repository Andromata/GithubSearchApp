import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import * as ImIcons from "react-icons/im";
import "./Search.scss";
import { searchUsers, searchRepositories } from "../../Redux/Actions";
import { setActive } from "../../Redux/Actions/RequestStatus"

export default function Search() {
  const dispatch = useDispatch()
  const { active } = useSelector((store) => store.Request)
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
      const getData = async () => {
          if(search.length >= 3){
            if(active === "Users"){
              dispatch(searchUsers(search))
            } else {
              dispatch(searchRepositories(search))
            }
          } else {
              return
          }
      }
      getData()
  }, [active])
  return (
    <div className="container-searchbar column">
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
          onChange={handleSearch}
          value={search}
        />
        <select name="searchtype" id="" className="selectsearch" value={active} onChange={(e) => dispatch(setActive(e.target.value))}>
          <option value="Users">Users</option>
          <option value="Repositories">Repositories</option>
        </select>
      </div>
    </div>
  );
}
