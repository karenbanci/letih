import React from "react";
import UltraformerStyles from "./PricesTable.module.css";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const PricesTable = ({ prices }) => {
  const renderDescription = (description) => {
    return documentToHtmlString(description.json);
  };

  return (
    <div className={`${UltraformerStyles.prices}`}>
      <div className={UltraformerStyles.pricesContainer}>
        <h2>Prices</h2>
        <div>
          {Array.isArray(prices.items) &&
            prices.items.slice(0, 2).map((item, index) => (
              <div key={index}>
                <div className={UltraformerStyles.pricesDescription}>
                  <h5>{item.title}</h5>
                  <div className={UltraformerStyles.priceInfo}>
                    <div
                      className={UltraformerStyles.descriptionText}
                      dangerouslySetInnerHTML={{
                        __html: renderDescription(item.description),
                      }}
                    />
                    <hr className={UltraformerStyles.myLine} />
                    <p className={UltraformerStyles.serviceRates}>
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          {Array.isArray(prices.items) &&
            prices.items.slice(2, 5).map((item, index) => (
              <div key={index + 2}>
                <div className={UltraformerStyles.pricesDescription}>
                  <h5>{item.title}</h5>
                  <div className={UltraformerStyles.priceInfo}>
                    <p>{item.time}</p>
                    <hr className={UltraformerStyles.myLine} />
                    <p className={UltraformerStyles.serviceRates}>
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
