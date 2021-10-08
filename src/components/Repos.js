import React from "react";
import "../styles/search.css";
import "../styles/repos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react/cjs/react.development";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

function Repos() {
  const [reposFilter, setReposFilter] = useState("");
  const { github, setUserName } = useUser();
  const formSubmit = (event) => {
    event.preventDefault();
  };

  let filterRepos = (repos) => {
    return repos.filter((val) => {
      if (!reposFilter) return val;
      else if (val.name.toLowerCase().includes(reposFilter.toLowerCase())) {
        return val;
      }
    });
  };

  return (
    <div className="repos-container">
      <form onSubmit={formSubmit} className="repos-search">
        <input
          onChange={(e) => setReposFilter(e.target.value.trim())}
          id="repository"
          type="text"
          placeholder="Find a repository..."
        />
        <Link
          className="go-back-btn"
          onClick={() => {
            setUserName(null);
            localStorage.removeItem("user-name");
          }}
          to="/"
        >
          Go back
        </Link>
      </form>
      <div style={{ padding: "5px" }}>
        Public Repositories{" "}
        <span
          style={{
            backgroundColor: "gray",
            padding: "3px 5px",
            color: "white",
          }}
        >
          {" "}
          {github.length}
        </span>{" "}
      </div>
      <div className="repobar">
        <ul>
          {filterRepos(github).map((user) => (
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
                  <a href="#" >
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
