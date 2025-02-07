import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ({category}) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []); // [] vector vacio para que solo se ejecute una vez  

  return {
    images: images,
    isLoading: isLoading
  }
}
