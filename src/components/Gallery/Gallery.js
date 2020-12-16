import "./Gallery.css";

import { getRedditPostUrl } from "./Gallery.utility";

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map(({ link, imageUrl }) => (
      <a key={link} href={getRedditPostUrl(link)}>
        <img src={imageUrl} alt="" />
      </a>
    ))}
  </div>
);

export default Gallery;
