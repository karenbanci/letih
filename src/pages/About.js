import React, { useEffect, useState } from "react";
import "./About.css";
import BtnGreen from "../components/BtnGreen";
import GreenRetangle from "../components/GreenRetangle";
import { fetchPageData } from "../services/contentfulService.js";

const About = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("about");
      setData(result?.data); // Verifique se result.data realmente existe
    } catch (error) {
      console.error(
        "Erro ao buscar os dados:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  // verificar se os dados existem antes de acessar
  const aboutData =
    data &&
    data.aboutUsPageCollection && // Corrigir o nome da coleção
    data.aboutUsPageCollection.items &&
    data.aboutUsPageCollection.items.length > 0
      ? data.aboutUsPageCollection.items[0]
      : null;

  return (
    <div>
      <div className="container">
        <div className="hero">
          <div className="images-container">
            <GreenRetangle className="green-box green-box-1" />
            <img
              className="women-image women-top "
              src={aboutData.imageTop.url}
              alt={aboutData.imageTop.description}
            />
            <GreenRetangle className="green-box green-box-2" />
          </div>

          <div className="we-are-letih-beauty">
            <h1>{aboutData.title}</h1>
            <h3>{aboutData.subtitle}</h3>
            <div className="mission-vision">
              <div className="mission">
                <h4>Our Mission</h4>
                <p>{aboutData.mission}</p>
              </div>
              <div className="vision">
                <h4>Our Vision</h4>
                <p>{aboutData.vision}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="our-values">
          <div className="images-container">
            <GreenRetangle className="green-box green-box-3" />

            <img
              className="women-image women-middle"
              src={aboutData.imageMiddle.url}
              alt={aboutData.imageMiddle.description}
            />
            <GreenRetangle className="green-box green-box-4" />
          </div>

          <div className="our-values-content">
            <h4>Our Values</h4>
            <h5 className="sub-title">Warmer Approach </h5>
            <p>{aboutData.warmerApproach}</p>
            <h5 className="sub-title">Personalized and quality Service </h5>
            <p>{aboutData.qualityService}</p>
            <h5 className="sub-title">Education, Transparency and honesty</h5>
            <p>{aboutData.transparencyAndHonesty}</p>
          </div>
        </div>

        <div className="behind-scenes">
          <div className="image-letih ">
            <img
              className="image-letih women-bottom-one"
              src={aboutData.imageBottomOne.url}
              alt={aboutData.imageBottomOne.description}
            />
            <GreenRetangle className="green-box green-box-5" />
            <img
              className="image-letih women-bottom-two"
              src={aboutData.imageBottonTwo.url}
              alt={aboutData.imageBottonTwo.description}
            />
          </div>

          <div className="behind-scenes-content">
            <h4 className="left-title">Behind the scenes </h4>
            <p>{aboutData.behindTheScenes}</p>
            <div className="btn-book">
              <BtnGreen>Book Now</BtnGreen>
            </div>
          </div>
        </div>
        <div className="bottom-images">
          <img src="/images/aboutFirst.png" alt="women1" />
          <img src="/images/aboutus-2.png" alt="women2" />
          <img src="/images/aboutFirst.png" alt="women3" />
        </div>
      </div>
      <div className="bottomLineGreen"></div>
      <div className="bottomLineWhite"></div>
    </div>
  );
};

export default About;
