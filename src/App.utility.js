const extractImageDataFromPayload = ({ data: { permalink, preview } }) => ({
  link: permalink,
  imageUrl: preview.images[0].variants?.gif?.source?.url,
});

const hasImageUrl = (image) => image.imageUrl !== undefined;

const getImagesToRender = ({ images, limit }) => images.slice(0, limit);

export { extractImageDataFromPayload, hasImageUrl, getImagesToRender };
