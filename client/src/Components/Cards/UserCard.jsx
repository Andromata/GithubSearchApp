import React from "react";
import "./UserCard.scss";
export default function UserCard(props) {
  const { user } = props;

  return (
    <div className="card" key={user.id}>
      <div className="cardtop">
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
        <div className="info">
          <div className="info-top">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <span className="nametitle">
                <span className="github">@GitHub/</span>
                {user.login}
              </span>
            </a>
            <h2>{user.name}</h2>
          </div>
            
        </div>
      </div>
      </div>
      <div className="info-shadow">
            <div className="info-bottom">
              <div className="info-items">
                <h3>Followers</h3>
                <span>{user.followers}</span>
              </div>
              <div className="info-items">
                <h3>Repos</h3>
                <span>{user.public_repos}</span>
              </div>
              <div className="info-items">
                <h3>Location</h3>
                <span>{user.location || "-"}</span>
              </div>
            </div>
          </div>
      
    </div>
  );
}
