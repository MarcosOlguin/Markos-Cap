import React from "react";
import PriceChange from "./PriceChange";

import "./Table.css";

function Tables({ criptos, handleClick, handleClickNumbers }) {
  let filter = criptos.filter((e) => e["1d"]);
  filter = criptos.filter((e) => e["7d"]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="titles">#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1d%</th>
            <th>7d%</th>
            <th>30d%</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((e, i) => (
            <tr className="currencies" key={i} id={e.name}>
              {/*Ranking*/}
              <td className="left">{e.rank}</td>
              {/*Name*/}
              <td className="pading">
                <img className="icon" src={e.logo_url} alt="icon" />
                <span className="name" onClick={handleClick}>
                  {e.name}
                </span>
                <span className="symbol">{e.symbol}</span>
              </td>
              {/*Price*/}
              {e.price > 1 ? (
                <td onClick={handleClickNumbers} id={e.name} className="price">
                  ${parseFloat(e.price).toFixed(2)}
                </td>
              ) : (
                <td id={e.name} onClick={handleClickNumbers} className="price">
                  ${parseFloat(e.price).toFixed(4)}
                </td>
              )}
              <PriceChange e={e} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tables;
