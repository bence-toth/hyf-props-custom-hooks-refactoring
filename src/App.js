import { useState } from "react";
import "./App.css";

import { useImagesFromReddit } from "./App.hooks";

import ShowMoreButton from "./components/ShowMoreButton/ShowMoreButton";
import Gallery from "./components/Gallery/Gallery";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [imagesLimit, setImagesLimit] = useState(2);
  const showMoreImages = () => {
    setImagesLimit(imagesLimit + 2);
  };

  const { areImagesLoading, images } = useImagesFromReddit();

  const imagesToRender = images.slice(0, imagesLimit);

  return (
    <>
      {areImagesLoading ? <Loader /> : <Gallery images={imagesToRender} />}
      <ShowMoreButton
        onShowMore={showMoreImages}
        isDisabled={areImagesLoading}
      />
    </>
  );
};

export default App;
