import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../Cards/UserCard";
import Loading from "../Loading/Loading";

export default function Catalogue() {
  const { Users } = useSelector((store) => store);

  useEffect(() => {}, [Users, Request.active]);

  if (Request.loading) {
    return <Loading />;
  } else {
      return (
        <Fragment>
          {Users.results.length > 0 ? 
            Users.results.map((user) => {
              return <UserCard user={user} key={user.id} />;
            })
           : 
            <></>
          }
        </Fragment>
      );
  }
}
