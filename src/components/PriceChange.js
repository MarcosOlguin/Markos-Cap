function PriceChange({ e }) {
  return (
    <>
      {e["1d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers ocultar">
          {((e["1d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers ocultar">
          {((e["1d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}

      {e["7d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers ocultar">
          {((e["7d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers ocultar">
          {((e["7d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}
      {e["30d"].price_change > 0 ? (
        <td style={{ color: "#00CA74" }} className="numbers ocultar big-phones">
          {((e["30d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      ) : (
        <td style={{ color: "red" }} className="numbers ocultar big-phones">
          {((e["30d"].price_change * 100) / e.price).toFixed(2)}%
        </td>
      )}
    </>
  );
}

export default PriceChange;
