import { useEffect, useState } from "react";
import { extractImageDataFromPayload, hasImageUrl } from "./App.utility";
import { subredditUrl } from "./App.data";

const useImagesFromReddit = () => {
  const [areImagesLoading, setAreImagesLoading] = useState(true);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(subredditUrl)
      .then((response) => response.json())
      .then(({ data: { children } }) => {
        setImages(
          children.map(extractImageDataFromPayload).filter(hasImageUrl)
        );
        setAreImagesLoading(false);
      });
  }, []);

  return {
    areImagesLoading,
    images,
  };
};

const useImagesLimit = () => {
  const [imagesLimit, setImagesLimit] = useState(2);
  const showMoreImages = () => {
    setImagesLimit(imagesLimit + 2);
  };

  return { imagesLimit, showMoreImages };
};

export { useImagesFromReddit, useImagesLimit };
