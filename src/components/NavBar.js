import React from "react";
import "./NavButton.css";
import "./NavBar.css";
import Nomics from "./Nomics";

function NavBar({ handleSubmit, handleChange, form, handleButton }) {
  return (
    <>
      <nav>
        <header>
          <h2 className="nav-name">MarkosCap</h2>
          <Nomics />
        </header>

        <div className="nav-search">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
              name="search"
              onChange={handleChange}
              value={form.search}
            ></input>
            <button
              className="cssbuttons-io"
              type="button"
              onClick={handleSubmit}
              value="Search"
            >
              <span>Search</span>
            </button>
            <button
              className="cssbuttons-io"
              onClick={handleButton}
              value="Update"
            >
              <span>Update</span>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
