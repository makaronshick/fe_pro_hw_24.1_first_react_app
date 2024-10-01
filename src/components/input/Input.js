import React from "react";

export default ({ link }) => {
    return <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon3">{link}</span>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>
}