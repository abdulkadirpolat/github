import React from "react";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "../context/UserContext";

function Sidebar() {
  const { githubUser, githubOrgs } = useUser();
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <figure>
          <div className="avatar">
            <img src={githubUser.avatar_url} alt="avatar img." />
          </div>
          <h1 className="full-name">
            <p>{githubUser.name}</p>
            <p> {githubUser.login} </p>
          </h1>
        </figure>
        <div className="profile-edit">
          <div className="bio">{githubUser.bio}</div>
          <div className="follow">
            <span>
              <FontAwesomeIcon icon={faUserFriends} />{" "}
              {/* {githubUser.followers.length <=999 ? githubUser.followers :Number.parseFloat(githubUser.followers).toFixed(2) } {` followers .`} */}
              {githubUser.followers} {` followers .`}
            </span>
            <span>
              {``} {githubUser.following} {` following `}
            </span>
          </div>
          <div className="card-detail">
            <ul>
              {githubUser.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} /> {githubUser.company}
                </li>
              )}
              {githubUser.location && (
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  {githubUser.location}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="organizations">
          <h4> {githubOrgs.length === 0 ? null : "Organizations"} </h4>
          <div className="organization">
            {githubOrgs.length === 0
              ? null
              : githubOrgs.map((orgs) => (
                  <div key={orgs.id} title={orgs.login}>
                    <img src={orgs.avatar_url} alt={orgs.description} />
                  </div>
                ))}
          </div>
          <div className="times">
            <div>
              {"updated at "}
              {githubUser.updated_at === undefined
                ? async () => await githubUser.updated_at.slice(0, 10)
                : githubUser.updated_at.slice(0, 10)}
            
            </div>
            <div>
              {"created at "}
              {githubUser.created_at === undefined
                ? async () => await githubUser.created_at.slice(0, 10)
                : githubUser.created_at.slice(0, 10)}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
