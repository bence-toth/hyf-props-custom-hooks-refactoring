import { useEffect, useState } from "react";
import "./App.css";

import ShowMoreButton from "./components/ShowMoreButton/ShowMoreButton";

const App = () => {
  const [imagesLimit, setImagesLimit] = useState(2);

  const showMoreImages = () => {
    setImagesLimit(imagesLimit + 2);
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://www.reddit.com/r/perfectloops.json")
      .then((response) => response.json())
      .then((json) => {
        setImages(
          json.data.children
            .map((child) => ({
              link: child.data.permalink,
              imageUrl: child.data.preview.images[0].variants?.gif?.source?.url,
            }))
            .filter((image) => image.imageUrl !== undefined)
        );
      });
  }, []);

  return (
    <>
      <div className="gallery">
        {images.slice(0, imagesLimit).map((image) => (
          <a href={`https://reddit.com/${image.link}`} key={image.link}>
            <img src={image.imageUrl} alt="" />
          </a>
        ))}
      </div>
      <ShowMoreButton onShowMore={showMoreImages} />
    </>
  );
};

export default App;
