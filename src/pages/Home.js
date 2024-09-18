import React, { useEffect, useState } from "react";
import { fetchPageData } from "../services/contentfulService.js"; // Importa o serviço

import "./Home.css";
import BtnGreen from "../components/BtnGreen";
import BtnWhite from "../components/BtnWhite";
import CarouselComponent from "../components/Carousel";

function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("home");
      console.log("dados retornados", result);
      setData(result);
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  // Supondo que o formato do `data` siga o mesmo padrão do Contentful
  const homeData = data?.homepageCollection?.items[0];
  console.log("homeData", homeData);

  return (
    <div>
      {/* Banner hero */}
      <div className="banner">
        <div class="content">
          <h1>{homeData.title}</h1>
          <h4>{homeData.subtitle}</h4>
          <BtnGreen>Our Services</BtnGreen>
        </div>
        <img src={homeData.heroImage.url} alt={homeData.heroImage.title}></img>
      </div>
      {/* About US */}
      <div className="about-us">
        <h2>About Us</h2>
        <div className="about-us-top about-us-content">
          <img
            src="images/home-about-us-women.webp"
            alt="women with leaf in her hair"
          />
          <div className="about-us-top-right">
            <h5 className="mobile-none">{homeData.aboutUsTitleOne}</h5>
            <p className="mobile-none">
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Et potenti nulla tellus praesent
              euismod commodo pretium. Et potenti nulla tellus praesent euismod
              commodo pretium. Et potenti nulla tellus praesent euismod commodo
              pretium. Et potenti nulla tellus praesent euismod commodo pretium.
            </p>
          </div>
        </div>
        <div className="about-us-button about-us-content">
          <img
            src="images/home-about-us-bed.webp"
            alt="women with leaf in her hair"
          />
          <div className="about-us-button-left">
            <h5>{homeData.aboutUsTitleTwo}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Et potenti nulla tellus praesent
              euismod commodo pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div className="our-services">
        <h2>Our Services</h2>
        {/* GREEN 01 */}
        <div className="green-services">
          <img src="images/service-01.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">01</h5>
            <h5>Deep Facial</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 02 */}
        <div className="white-services">
          <img src="images/service-02.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">02</h5>
            <h5>Body Detox</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 03 */}
        <div className="green-services">
          <img src="images/service-03.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">03</h5>
            <h5>Ultraformer III</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 04 */}
        <div className="white-services">
          <img src="images/service-04.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">04</h5>
            <h5>Belly Reducing</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 05 */}
        <div className="green-services">
          <img src="images/service-05.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">05</h5>
            <h5>RF Microneedling</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 06 */}
        <div className="white-services">
          <img src="images/service-06.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">06</h5>
            <h5>Skin Care Routine</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 07 */}
        <div className="green-services">
          <img src="images/service-07.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">07</h5>
            <h5>Glow Facial</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
      </div>
      {/* Our Advantages */}
      <div className="advantages">
        <h2>Our Advantages</h2>
        <div className="advantages-icons">
          {/* Flexibility */}
          <div className="icon-content">
            <img src="images/icon_history.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Transparency */}
          <div className="icon-content">
            <img src="images/icon_page_search.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Quality */}
          <div className="icon-content">
            <img src="images/icon_data_quality.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Promoting Wlliness */}
          <div className="icon-content">
            <img src="images/icon_spa.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <CarouselComponent />
      {/* Gallery */}
      <div className="our-gallery">
        <h2>Our Gallery</h2>
        <div className="gallery">
          <img src="images/our-gallery-01.webp" alt="" id="img1" />
          <img src="images/our-gallery-02.webp" alt="" id="img2" />
          <img src="images/our-gallery-03.webp" alt="" id="img3" />
          <img src="images/our-gallery-04.webp" alt="" id="img4" />
          <img src="images/our-gallery-05.webp" alt="" id="img5" />
          <img src="images/our-gallery-06.webp" alt="" id="img6" />
        </div>
      </div>
      {/* Contact Us */}

      <div className="contact">
        <h2>Contact us</h2>
        <p>Fill out the form and we will contact you as soon as possible!</p>
        <form>
          <div className="name-email">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="form-group">
              <label for="name">Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-group-phone">
            <label for="name">Phone</label>
            <input type="phones" placeholder="Phone" />
          </div>

          <div className="form-group">
            <label for="name">Message</label>
            <textarea placeholder="How can we help you today?"></textarea>
          </div>
          <div className="btn-send">
            <BtnWhite>Send</BtnWhite>
          </div>
        </form>
      </div>
      <div className="blank"></div>
    </div>
  );
}

export default Home;
