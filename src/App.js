import "./App.css";

import { useImagesFromReddit, useImagesLimit } from "./App.hooks";
import { getImagesToRender } from "./App.utility";

import ShowMoreButton from "./components/ShowMoreButton/ShowMoreButton";
import Gallery from "./components/Gallery/Gallery";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { imagesLimit, showMoreImages } = useImagesLimit();

  const { areImagesLoading, images } = useImagesFromReddit();

  const imagesToRender = getImagesToRender({
    images,
    limit: imagesLimit,
  });

  const areThereMoreImagesToShow = images.length > imagesLimit;

  return (
    <>
      {areImagesLoading ? <Loader /> : <Gallery images={imagesToRender} />}
      {areThereMoreImagesToShow && (
        <ShowMoreButton
          onShowMore={showMoreImages}
          isDisabled={areImagesLoading}
        />
      )}
    </>
  );
};

export default App;
