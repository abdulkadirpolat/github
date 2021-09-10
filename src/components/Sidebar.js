import React from "react";
import "../style/sidebar.css";

function Sidebar({ githubUsersOwner }) {
 
  githubUsersOwner.map( e => console.log(e.owner))
  

  //   for (let i = 0; i < 1 ; i++) {
  //       element(githubUsersOwner[i])
  //   }
  //  function element(e){
  //    console.log(e)
  //  }
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <figure>
          <div className="avatar">
            <img src="https://avatars.githubusercontent.com/u/44482506?v=4" />
          </div>
          <p className="full-name">FullName</p>
        </figure>
        <div className="profile-edit">
          <div className="bio">developer, tech lover, javascripter</div>
          <div>
            <a href="#">
              <span>37</span> follower
            </a>
            <a href="#">
              <span>44</span> following
            </a>
            <a href="#">
              <span>210</span> Star icon
            </a>
          </div>
          <div className="card-detail">
            <ul>
              <li>Wingie Enuygun Group</li>
              <li>istanbul</li>
            </ul>
          </div>
        </div>
        <div>Organizations</div>
      </div>
    </div>
  );
}

export default Sidebar;
