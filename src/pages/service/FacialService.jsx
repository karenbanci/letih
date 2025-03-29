import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o slug da URL
import Treatments from "./Treatments.jsx";
import FacialTreatmentGuide from "./FacialTreatmentGuide.jsx";
import styles from "./FacialServiceStyle.module.css";
import "../service/FacialTreatmentGuide.module.css";
import { fetchPageData } from "../../services/contentfulService.js";
import "../../shared/common.css";

const FacialService = () => {
  const { slug } = useParams(); // Pegando o slug da URL
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("facialService");

      // Captura o slug da URL
      const slugFromUrl = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

      // Filtra o item de acordo com o slug em minúsculas (ou ajuste conforme necessário)
      const deepCleansingData =
        result?.data?.serviceFacialCollection?.items?.find(
          (item) => item.slug.toLowerCase() === slugFromUrl
        );

      if (deepCleansingData) {
        setData(deepCleansingData);
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

  const primaryService = data;
  const supplementaryServiceInfo =
    primaryService.supplementaryCollection?.items || [];

  const firstColumnItems = supplementaryServiceInfo.slice(0, 5);
  const secondColumnItems = supplementaryServiceInfo.slice(5);

  return (
    <div className="containerService">
      <Treatments
        title={primaryService.title}
        whatIs={primaryService.whatIs}
        whatIsDescription={primaryService.whatIsDescription}
        benefits={primaryService.benefits}
        benefitsDescription={primaryService.benefitsDescription}
        benefitsRecommendations={primaryService.benefitsRecommendations}
        firstTitle={primaryService.timeTitle}
        firstTitleDescription={primaryService.timeDescription}
        secondTitle={primaryService.PriceTitle}
        secondTitleDescription={primaryService.priceDescription}
        btnComponent={primaryService.btnComponent}
        imgSrc={primaryService.image.url}
        imgDescription={primaryService.image.description}
        customClass={styles.bannerWrapper}
        customBottomClass="globalFirstBannerBottom"
        customDescriptionClass={styles.titleDescription}
        customPhotoClass={styles.bannerMiddlePhoto}
      />
      {(firstColumnItems?.length ||
        secondColumnItems?.length ||
        primaryService?.warning?.items) && (
        <FacialTreatmentGuide
          firstColumnItems={firstColumnItems}
          secondColumnItems={secondColumnItems}
          warningMessage={primaryService?.warning?.items || []} // Garantir que seja um array
        />
      )}
    </div>
  );
};

export default FacialService;
