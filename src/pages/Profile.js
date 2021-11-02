import React from "react";
import "../styles/app.css";
import Repos from "../components/Repos";
import Sidebar from "../components/Sidebar";
import Loading from "./loading/loading";
import { useUser } from "../context/UserContext";
import { useParams } from "react-router";
import Error from "./error/Error";

function Profile() {
  const { isLoading, setUserName, error } = useUser();
  const { user } = useParams();

  if (user) {
    setUserName(user);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="container">
          <div className="components">
            <Sidebar />
            <Repos />
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
