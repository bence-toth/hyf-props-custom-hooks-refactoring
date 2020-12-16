import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [imagesLimit, setImagesLimit] = useState(2);
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
    <div className="App">
      {images.slice(0, imagesLimit).map((image) => (
        <a href={`https://reddit.com/${image.link}`} key={image.link}>
          <img src={image.imageUrl} alt="" />
        </a>
      ))}
      <button
        onClick={() => {
          setImagesLimit(imagesLimit + 2);
        }}
      >
        Show me two more
      </button>
    </div>
  );
};

export default App;
