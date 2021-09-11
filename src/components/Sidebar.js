import React from "react";
import "../style/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

function Sidebar({ githubUsersOwner, githubUsersOrgs }) {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <figure>
          <div className="avatar">
            <img src={githubUsersOwner.avatar_url} />
          </div>
          <h1 className="full-name">
            <p>{githubUsersOwner.name}</p>
            <p> {githubUsersOwner.login} </p>
          </h1>
        </figure>
        <div className="profile-edit">
          <div className="bio">{githubUsersOwner.bio}</div>
          <div>
            <span>
              {githubUsersOwner.followers} {` followers .`}
            </span>
            <span>
              {``} {githubUsersOwner.following} {` following `}
            </span>
          </div>
          <div className="card-detail">
            <ul>
              {githubUsersOwner.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />{" "}
                  {githubUsersOwner.company}
                </li>
              )}
              {githubUsersOwner.location && (
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  {githubUsersOwner.location}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="organizations">
          <h4>Organizations</h4>
          <div className="organization">
            {githubUsersOrgs.map((orgs) => (
              <div key={orgs.id} title={orgs.login}>
                <img src={orgs.avatar_url} alt={orgs.description} />
              </div>
            ))}
          </div>
          <div>
            <div>
              {"updated at "}
              {githubUsersOwner.updated_at}
            </div>
            <div>
              {"created at "}
              {githubUsersOwner.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
