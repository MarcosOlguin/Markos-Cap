import React from "react";

function UpdateButton({ handleButton }) {
  return (
    <div>
      <form>
        <input type="button" onClick={handleButton} value="Update"></input>
      </form>
    </div>
  );
}

export default UpdateButton;
