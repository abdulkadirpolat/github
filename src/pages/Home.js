import React, { useState } from "react";
import { Redirect } from "react-router";
import Input from "../components/Input/Input";
import { useUser } from "../context/UserContext";
import "../styles/home.css";
function Home() {
  const [handleChange, setHandleChange] = useState("");
  const { userName, setUserName } = useUser();
  function handleUserSubmit(e) {
    e.preventDefault();

    setUserName(handleChange);
    localStorage.setItem("user-name", JSON.stringify(userName));
    setHandleChange("")
  }

  const homeImagesSrc = {
    globalLogo:
      "https://github.githubassets.com/images/modules/site/home/globe-700.jpg",
    heroGlow:
      "https://github.githubassets.com/images/modules/site/home/hero-glow.svg",
    astroMona:
      "https://github.githubassets.com/images/modules/site/home/astro-mona.svg",
  };

  if(userName) return <Redirect to={`/${userName}`} />
  return (
    <div className="home">
      <form onSubmit={handleUserSubmit}>
        <Input
          size="20px"
          radius="10px"
          padding="13px 10px"
          className="home-user-input"
          placeholder="@username"
          value={handleChange}
          onChange={(e) => setHandleChange(e.target.value)}
        />
      </form>
      <div className="home-images">
        <div className="globe-logo">
          <img src={homeImagesSrc.globalLogo} alt="globe logo" />
        </div>
        <img
          className="hero-glow"
          src={homeImagesSrc.heroGlow}
          alt="hero glow"
        />
        <img
          className="astro-mona"
          src={homeImagesSrc.astroMona}
          alt="astro mona"
        />
      </div>
    </div>
  );
}

export default Home;
