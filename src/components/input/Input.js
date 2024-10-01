import React from "react";

export default ({ link }) => {
    return <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">{link}</span>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>
}