import React, { useState, useContext, useRef, useEffect } from "react";
import "./firebase";
import "./App.css";
import Housemates from "./components/Housemates/Housemates";
import HousematePage from "./components/Housemates/HousematePage";
import LandingPage from "./components/LandingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import UserProfile from "./components/UserProfile/UserProfile";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route } from "react-router-dom";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import Signature from "./components/Signature";

function App() {
  const { user } = useContext(UserContext);
  const [authType, setAuthType] = useState("sign up");
  const [vantaEffect, setVantaEffect] = useState(0);
  const backgroundRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       NET({
  //         el: backgroundRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x2e5168,
  //         backgroundColor: 0xe5dada,
  //         points: 7.0,
  //         maxDistance: 21.0,
  //         spacing: 19.0,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="main-app-container" ref={backgroundRef}>
      <Switch>
        <Route exact path="/HomeQuarters">
          {user ? <Housemates /> : <LandingPage setAuthType={setAuthType} />}
        </Route>

        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/housemate/:id">
          <HousematePage />
        </Route>

        <Route exact path="/housemate/:id">
          <HousematePage />
        </Route>

        <Route exact path="/Homequarters/auth">
          <Authentication authType={authType} />
        </Route>
      </Switch>
      <Signature />
    </div>
  );
}

export default App;
