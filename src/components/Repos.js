import React from "react";
import Search from "./Search";
import "../style/repos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Repos({ searchRepo, reposData }) {
  return (
    <div className="repos-container">
      <Search searchRepoProps={searchRepo} />
      <div className="repobar">
        <ul>
          {reposData.map((user) => (
            <li className="ull" key={user.id}>
              <div className="repo">
                <div className="project-bar">
                  <a
                    className="project-name"
                    target="_blank"
                    href={user.html_url}
                  >
                    {user.name}
                  </a>
                  <span>Public</span>
                </div>
                <div> {user.description}</div>
                <div>{<a href="#">{user.name}</a>}</div>
                <div>
                  <span>{user.language}</span>
                  <a href="#">
                    <FontAwesomeIcon icon={faStar} />
                    {` ${user.stargazers_count} `}
                  </a>
                  <p>Updated {user.updated_at.slice(0, 10)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Repos;
