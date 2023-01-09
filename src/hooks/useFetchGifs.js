import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //Si se pone [], significa que solo se disparara la primera vez que se dibuje
    useEffect( () => {
        //getGifs(category)
        getImages();
    }, [])
    

  return {
    images,
    isLoading
  };
}
