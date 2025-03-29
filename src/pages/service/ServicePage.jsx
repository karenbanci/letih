import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import "../../shared/common.css";
import "./ServicePage.css";
import ServiceWarning from "../../components/ServiceWarning.jsx";
import Banner from "../../components/Banner.js";
import BtnGreen from "../../components/BtnGreen";
import PricesTable from "./PricesTable.jsx";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { fetchPageData } from "../../services/contentfulService.js";

const ServicePage = () => {
  const { slug } = useParams(); // Pegando o slug da URL
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("servicePage");

      // Captura o slug da URL
      const slugFromUrl = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

      // Filtra o item de acordo com o slug em minúsculas (ou ajuste conforme necessário)
      const servicePage = result?.data?.servicePageCollection?.items?.find(
        (item) => item.slug.toLowerCase() === slugFromUrl
      );

      if (servicePage) {
        setData(servicePage);
      } else {
        console.error(`Item '${slugFromUrl}' não encontrado`);
      }
    } catch (error) {
      console.error(
        "Erro ao buscar os dados:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, [slug]); // Atualiza quando o slug mudar

  if (!data) {
    return <p>Loading...</p>;
  }
  const highlightImportantText = (htmlString) => {
    return htmlString.replace(
      /\b(NOT|MUST)\b/g,
      '<span style="color: red;">$1</span>'
    );
  };

  const warning = data.warning?.json;
  const bannerTitle = data.title;
  const aboveFoldContent = highlightImportantText(
    documentToHtmlString(data.aboveFoldContent?.json)
  );
  const belowFoldContent = highlightImportantText(
    documentToHtmlString(data.belowFoldContent?.json)
  );
  const belowFoldImage = data.belowFoldImage;
  const prices = data.pricesCollection;

  return (
    <div>
      <Banner bannerTitle={bannerTitle} />
      <div className="aboveFoldContainer">
        <div className="aboveFoldContentLeft">
          <div
            className="aboveFoldContent"
            dangerouslySetInnerHTML={{ __html: aboveFoldContent }}
          />
          <BtnGreen>Book Now</BtnGreen>
        </div>
        <div className="aboveFoldImage">
          <img
            src={data.aboveFoldImage.url}
            alt={data.aboveFoldImage.description}
            title={data.aboveFoldImage.title}
          />
        </div>
      </div>
      <div className="green-fold one"></div>
      <div
        className="belowFoldContent"
        dangerouslySetInnerHTML={{ __html: belowFoldContent }}
      />
      {data.belowFoldImage?.url && (
        <div className="belowFoldImage">
          <img
            src={data.belowFoldImage.url}
            alt={data.belowFoldImage.description}
            title={data.belowFoldImage.title}
          />
        </div>
      )}

      {prices?.items?.length > 0 && <PricesTable prices={prices} />}
      {warning && <ServiceWarning alertMessage={warning} />}
    </div>
  );
};
export default ServicePage;
