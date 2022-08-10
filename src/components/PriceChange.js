function PriceChange({ e }) {
  return (
    <>
      {e["1d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers">
          {((e["1d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers">
          {((e["1d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}
      {e["7d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers">
          {((e["7d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers">
          {((e["7d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}
      {e["30d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers">
          {((e["30d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers">
          {((e["30d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}
    </>
  );
}

export default PriceChange;
