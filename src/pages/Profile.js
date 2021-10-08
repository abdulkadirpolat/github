import React from "react";
import "../styles/app.css";
import Repos from "../components/Repos";
import Sidebar from "../components/Sidebar";

import { useUser } from "../context/UserContext";

function Profile() {
  const { isLoading } = useUser();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
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
