import { useParams } from "react-router-dom";
import WindowModal from "./WindowModal";
import "./Cripto.css";

function Cripto({ criptos, isOpen, closeModal }) {
  let { cripto } = useParams();

  cripto = cripto[0].toUpperCase() + cripto.substring(1);

  let filter = criptos.filter((e) => e.name === cripto);

  return (
    <>
      <WindowModal
        isOpen={isOpen}
        closeModal={closeModal}
        className="window-modal"
      >
        {filter.length !== 0 ? (
          <div className="grid-div">
            <img
              className="icon-modal"
              src={filter[0].logo_url}
              alt={filter[0].name}
            />
            <div className="name-modal">
              <p className="p-name">{filter[0].name}</p>
            </div>
            <div className="rank-modal">
              <p className="p-rank">Rank#{filter[0].rank}</p>
            </div>

            {filter[0]["1d"].price_change > 0 ? (
              <div className="p-change">
                <p className="change-up">
                  +
                  {(
                    (filter[0]["1d"].price_change * 100) /
                    filter[0].price
                  ).toFixed(2)}
                  %
                </p>
              </div>
            ) : (
              <div className="p-change">
                <p className="change-down">
                  {(
                    (filter[0]["1d"].price_change * 100) /
                    filter[0].price
                  ).toFixed(2)}
                  %
                </p>
              </div>
            )}
            {filter[0].price > 1 ? (
              <div className="price-modal">
                <p className="text">
                  Price: US${parseFloat(filter[0].price).toFixed(2)}
                </p>
              </div>
            ) : (
              <div className="price-modal">
                <p className="text">
                  Price: US${parseFloat(filter[0].price).toFixed(4)}
                </p>
              </div>
            )}

            <div className="mkt-modal">
              <p className="text">
                Market Cap: US$
                {parseInt(filter[0].market_cap).toLocaleString("en")}
              </p>
            </div>

            {filter[0].max_supply ? (
              <div className="mxsuply-modal">
                <p className="text">
                  Max Supply:{" "}
                  {parseInt(filter[0].max_supply).toLocaleString("en")}{" "}
                  {filter[0].symbol}
                </p>
              </div>
            ) : (
              <div className="mxsuply-modal">
                <p className="text">No Max Supply</p>
              </div>
            )}

            {filter[0].high > 1 ? (
              <div className="ath-modal">
                <p className="text">
                  ATH: US${parseFloat(filter[0].high).toFixed(2)}
                </p>
              </div>
            ) : (
              <div className="ath-modal">
                <p className="text">
                  ATH: US${parseFloat(filter[0].high).toFixed(4)}
                </p>
              </div>
            )}

            <div className="supply-modal">
              <p className="text">
                Supply:{" "}
                {parseInt(filter[0].circulating_supply).toLocaleString("en")}{" "}
                {filter[0].symbol}
              </p>
            </div>

            <div className="button-modal">
              <button className="x-button" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        ) : (
          <div className="not-found">
            <h2>Not Found</h2>
            <p>Oops, the crypto you´are looking for does not exist</p>
          </div>
        )}
      </WindowModal>
    </>
  );
}

export default Cripto;
//{filter.length !== 0 ? <h2>cripto {cripto}</h2> : <h2>Not Found</h2>}
