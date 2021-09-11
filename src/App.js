import React, { useState, useEffect } from "react";
import "./style/app.css";
import Repos from "./components/Repos";
import Sidebar from "./components/Sidebar";
import "axios";
import "./style/app.css";
import axios from "axios";
function App() {
  const [github, setGithubRepos] = useState([]);
  const [githubUser, setGithubUser] = useState([]);
  const [githubOrgs, setGithubOrgs] = useState([]);
  const [searchChange, setSearchChange] = useState("");

  const user = "abdulkadirpolat";
 //      gaearon
 //     yavuzim
  useEffect(() => {
    document.title = user;
    const githubUsers = async () => {
      const responseRepos = await axios.get(
        `https://api.github.com/users/${user}/repos?page=1&per_page=100`
      );

      const responseUser = await axios.get(
        `https://api.github.com/users/${user}`
      );

      const responseOrgs = await axios.get(
        `https://api.github.com/users/${user}/orgs`
      );
      setGithubRepos(responseRepos.data);
      setGithubUser(responseUser.data);
      setGithubOrgs(responseOrgs.data);
    };
    githubUsers();
  }, []);

  const search = (e) => {
    setSearchChange(e.target.value.trim().toLowerCase());
  };

  let filterMov = github.filter(
    (repos) => repos.name.toLowerCase().indexOf(searchChange) !== -1
  );

  return (
    <div className="app">
      <div className="container">
        <div className="components">
          <Sidebar githubUsersOwner={githubUser} githubUsersOrgs={githubOrgs} />

          <Repos reposData={filterMov} searchRepo={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
