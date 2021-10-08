import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const [github, setGithubRepos] = useState([]);
  const [githubUser, setGithubUser] = useState([]);
  const [githubOrgs, setGithubOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userGetItem = localStorage.getItem("user-name");
    if (userGetItem) setUserName(JSON.parse(userGetItem));
  }, []);

  useEffect(() => {
    (async () => {
      const responseRepos = await axios
        .get(
          `https://api.github.com/users/${userName}/repos?page=1&per_page=100`
        )
        .catch((err) => console.log(err))
        .finally(setIsLoading(false));

      const responseUser = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      const responseOrgs = await axios.get(
        `https://api.github.com/users/${userName}/orgs`
      );
      setGithubRepos(responseRepos.data);
      setGithubUser(responseUser.data);
      setGithubOrgs(responseOrgs.data);
    })();
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
