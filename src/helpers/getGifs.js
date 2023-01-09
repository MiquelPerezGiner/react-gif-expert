export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dUa7pV23X4yiUb94bVg65JjGO2CgbCSS&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gift = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gift;
  console.log(gift);
};
