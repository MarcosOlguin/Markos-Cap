import React from "react";
import Table from "./Table";
import { Outlet } from "react-router-dom";

export default function Card({ criptos, handleClick, handleClickNumbers }) {
  if (!criptos) return null;
  return (
    <div>
      <Outlet />
      <Table
        criptos={criptos}
        handleClick={handleClick}
        handleClickNumbers={handleClickNumbers}
      />
    </div>
  );
}
