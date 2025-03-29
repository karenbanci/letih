import React, { useEffect, useState } from "react";
import { fetchPageData } from "../services/contentfulService.js"; // Importa o serviço
import { useLocation } from "react-router-dom";

import "./Home.css";
import Btn from "../components/Btn";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials.js";
import { aboutUsSections, advantages } from "../components/constants/index.js";
import { sendContactFormToAirtable } from "../services/airtableService.js";

function Home() {
  const [data, setData] = useState(null);

  const aboutUsSection = aboutUsSections;

  const getData = async () => {
    try {
      const result = await fetchPageData("home");
      setData(result.data);
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Coleta os dados do formulário
    const form = event.target; // Referência ao formulário enviado
    const formData = new FormData(form); // Extrai os dados do formulário
    const record = Object.fromEntries(formData.entries()); // Converte para objeto

    // Verifica se os campos obrigatórios estão preenchidos
    if (!record.name || !record.email || !record.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Envia os dados para o Airtable
    try {
      const response = await sendContactFormToAirtable(record);
      console.log("Record added successfully:", response);
      alert("Your message has been sent successfully!");
      form.reset(); // Limpa o formulário após o envio bem-sucedido
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const checkHash = () => {
    setTimeout(() => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };
  const location = useLocation();

  useEffect(() => {
    getData();
    checkHash();
  }, [location]);

  if (!data) {
    return <p>Loading...</p>;
  }

  // Verificando se os dados existem antes de acessar
  const homeData =
    data &&
    data.homepageCollection &&
    data.homepageCollection.items &&
    data.homepageCollection.items.length > 0
      ? data.homepageCollection.items[0]
      : null;

  const testimonialData = homeData.testimonialsCollection.items;

  return (
    <>
      <div>
        {/* Banner hero */}
        <div className="banner">
          <div className="content">
            <h1 className="bannerTitle">{homeData.title}</h1>
            <h5 className="bannerDescrip">{homeData.subtitle}</h5>
            <Btn customButtonClass="green" href="#our-services">
              Our Services
            </Btn>
          </div>
          {/* Hero image */}
          <img
            src={homeData.heroImage.url}
            alt={homeData.heroImage.title}
          ></img>
        </div>{" "}
        {/* About Us */}
        <div className="about-us">
          <h2>About Us</h2>
          {/* top left */}
          <div className={`about-us-content about-us-top`}>
            <img
              src={homeData.aboutUsImageOne.url}
              alt={homeData.aboutUsImageOne.title}
              className={`about-us-img-custom about-us-img-left`}
            />
            <div className={`about-us-text about-us-top-right`}>
              <h5 className={`special-style ${false ? "" : "mobile-none"}`}>
                {homeData.aboutUsTitleOne ? homeData.aboutUsTitleOne : ""}
              </h5>
              <p
                className={true ? "" : "mobile-none"}
                dangerouslySetInnerHTML={{
                  __html: homeData.aboutUsParagraphOne.json.content[0]
                    .content[0].value
                    ? homeData.aboutUsParagraphOne.json.content[0].content[0]
                        .value
                    : "",
                }}
              ></p>
              {aboutUsSection.isButtonVisible && (
                <Btn customButtonClass="green">Learn More</Btn>
              )}
            </div>
          </div>
          {/* botton right */}
          <div className={` about-us-bottom`}>
            <img
              src={homeData.aboutUsImageTwo.url}
              alt={homeData.aboutUsImageTwo.title}
              className={`about-us-img-custom about-us-img-left`}
            />
            <div className={`about-us-text about-us-bottom-left`}>
              <h5 className={`special-style ${false ? "" : "mobile-none"}`}>
                {homeData.aboutUsTitleTwo ? homeData.aboutUsTitleTwo : ""}
              </h5>
              <p
                className={true ? "" : "mobile-none"}
                dangerouslySetInnerHTML={{
                  __html: homeData.aboutUsParagraphTwo.json.content[0]
                    .content[0].value
                    ? homeData.aboutUsParagraphTwo.json.content[0].content[0]
                        .value
                    : "",
                }}
              ></p>

              <Btn customButtonClass="green" href="/about">
                Learn More
              </Btn>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="our-services" id="our-services">
        <h2>Our Services</h2>
        {homeData.ourServicesCollection.items.map((service, index) => {
          const colorStyle =
            index % 2 === 0 ? "green-services" : "white-services";

          const buttonStyle = index % 2 === 0 ? "white" : "green";

          return (
            <div className={`our-services ${colorStyle}`} key={index}>
              <img
                src={service.image.url}
                alt={service.image.title}
                className="service-image"
              />
              <div className="service-content">
                <h5>{service.title}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: service.paragraphy.json.content[0].content[0].value
                      ? service.paragraphy.json.content[0].content[0].value
                      : "",
                  }}
                ></p>
                <Btn
                  href={`/service/${service.slug}`}
                  customButtonClass={buttonStyle}
                >
                  Learn More
                </Btn>
              </div>
            </div>
          );
        })}
      </div>

      {/* Our Advantages */}
      <div className="advantages">
        <h2>Our Advantages</h2>
        <div className="advantages-icons">
          {advantages.map((advantage, index) => (
            <div className="icon-content" key={index}>
              <img src={advantage.imgSrc} alt={advantage.altText} />
              <h6>{advantage.title}</h6>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials testimonialData={testimonialData} />

      {/* Gallery */}

      <Gallery />

      {/* Contact Us */}
      <div className="contact" id="contact">
        <h2>Contact us</h2>
        <p>Fill out the form and we will contact you as soon as possible!</p>
        <form onSubmit={handleFormSubmit}>
          <div className="name-email">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you today?"
              required
            ></textarea>
          </div>
          <div className="btn-send">
            <Btn type="submit" customButtonClass="white">
              Send
            </Btn>
          </div>
        </form>
      </div>
      <div className="blank"></div>
    </>
  );
}

export default Home;
