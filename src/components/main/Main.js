import React from "react";
import LightButton from "../buttons/LightButton.js";
import Input from "../input/Input.js";
import Response from "../response/Response.js";

import "./main.div.styles.css"

export default () => {
    return <>
    <div className="main_div">
    <Input link="https://swapi.dev/api/"/>
    <LightButton text="Get info"/>
  </div>
  <div>
  <Response/>
  </div>
    </>
}