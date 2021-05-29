import React from "react";

export default function Card(props) {
  const { user } = props;
  return (
    <div className="card" key={user.id}>
      <div className="left">
        <div className="profileavatar">
          <img
            src={user.avatar_url}
            alt={user.login + "pic"}
            className="avatar"
          />
        </div>
      </div>
      <div className="right">
        <div className="name">
          <span>{user.login}</span>
        </div>
      </div>
    </div>
  );
}
