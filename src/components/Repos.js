import React from "react";
import Search from "./Search";
import "../style/repos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Repos({ githubUsersData }) {
  {console.log(githubUsersData)}
  return (
    <div className="repos-container">
      <Search />
      <div className="repobar">
        <ul>
          {githubUsersData.map(
            ({
              id,
              html_url,
              name,
              language,
              stargazers_count,
              updated_at,
              description
            }) => (
              <li className="ull" key={id}>
                
                <div className="repo">
                  <div className="project-bar">
                    <a className="project-name" target="_blank" href={html_url}>
                      {name}
                    </a>
                    <span>Public</span>
                  </div>
                  <div>  {description}</div>
                  <div>{<a href="#">{name}</a>}</div>
                  <div>
                    <span>{language}</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar} />
                      {` ${stargazers_count} `}
                    </a>
                    <p>Updated {updated_at.slice(0, 10)}</p>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
export default Repos;
