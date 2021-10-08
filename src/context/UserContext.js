import { useContext, createContext, useState, useEffect } from "react";

import instanse from "../axios";
const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [github, setGithubRepos] = useState([]);
  const [githubUser, setGithubUser] = useState([]);
  const [githubOrgs, setGithubOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const userGetItem = localStorage.getItem("user-name");
    if (userGetItem) setUserName(JSON.parse(userGetItem));
  }, []);

  useEffect(() => {
    if (userName) {
      async function githubFetch() {
        setIsLoading(true);
        const responseRepos = await instanse
          .get(`${userName}/repos?page=1&per_page=100`)
          .catch(() => setUserName(""));

        const responseUser = await instanse.get(`${userName}`);

        const responseOrgs = await instanse.get(`${userName}/orgs`);
        setGithubRepos(responseRepos.data);
        setGithubUser(responseUser.data);
        setGithubOrgs(responseOrgs.data);
        setIsLoading(false);
      }
      githubFetch();
      localStorage.setItem("user-name", JSON.stringify(userName));
    }
  }, [userName]);

  const values = {
    userName,
    setUserName,
    github,
    setGithubRepos,
    githubUser,
    setGithubUser,
    githubOrgs,
    setGithubOrgs,
    isLoading,
    setIsLoading,
  };

  return (
    <UserContext.Provider value={values}>{children} </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
