import { useEffect, useState } from "react";
import "./App.css";

import ShowMoreButton from "./components/ShowMoreButton/ShowMoreButton";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  const [imagesLimit, setImagesLimit] = useState(2);

  const showMoreImages = () => {
    setImagesLimit(imagesLimit + 2);
  };

  const [areImagesLoading, setAreImagesLoading] = useState(true);
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
        setAreImagesLoading(false);
      });
  }, []);

  const imagesToRender = images.slice(0, imagesLimit);

  return (
    <>
      {areImagesLoading && <p>Images are loading...</p>}
      <Gallery images={imagesToRender} />
      <ShowMoreButton
        onShowMore={showMoreImages}
        isDisabled={areImagesLoading}
      />
    </>
  );
};

export default App;
