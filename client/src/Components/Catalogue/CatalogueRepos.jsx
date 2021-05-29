import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import RepositoriesCard from "../Cards/RepositoriesCard";
import Loading from "../Loading/Loading";

export default function Repos() {
  const { Repositories, Request } = useSelector((store) => store);

  useEffect(() => {}, [ Repositories, Request.active]);

  if (Request.loading) {
    return <Loading />;
  } else {
    return (
        <Fragment>
          {Repositories.results.length > 0 ?
            Repositories.results.map((repos) => {
              return <RepositoriesCard repos={repos} ket={repos.id} />;
            })
          :
            <></>
          }
        </Fragment>
      );
    }
}
