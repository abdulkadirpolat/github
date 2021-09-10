import React, { useState, useEffect } from "react";
import Repos from "./components/Repos";
import Sidebar from "./components/Sidebar";
import "axios";
import "./style/app.css";
import axios from "axios";
function App() {
  const [github, setGithub] = useState([]);

  useEffect(() => {
    const githubUsers = async () => {
      const response = await axios.get(
        "https://api.github.com/users/korayguler/repos"
      );
      setGithub( response.data);
       
    };
    githubUsers();
  }, []);
 
  return (
    <div className="App">
      <div className="container">
        <div className="components">
          <Sidebar githubUsersOwner={github} />

          <Repos githubUsersData={github } />
        </div>
      </div>
    </div>
  );
}

export default App;
