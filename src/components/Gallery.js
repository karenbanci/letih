import "./Gallery.css";
import { useLocation } from "react-router-dom";

function Gallery() {
  const location = useLocation(); // Obter a rota atual

  const isGalleryPage = location.pathname === "/gallery";

  return (
    <div className={isGalleryPage ? "default-page" : "our-gallery"}>
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
  );
}

export default Gallery;
