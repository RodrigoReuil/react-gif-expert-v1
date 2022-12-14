//paso 4-1
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);//se inicializa una lista vacia
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImg = await getGifs(category);//paso 5 (llamada al servicio)
    setImages(newImg);
    setIsLoading(false);
  }

  //efectos secundarios, se hace q se ejecute una unica vez
  useEffect( () => {
    getImages();// otra forma de hacerlo, pero no tan confiable con una promesa:   getGifs(category).then( value => setImages(value));
  }, []);

  return {
    images, //si retorno una variable que usa otro nombre seria:  newImages: images
    isLoading
  }
}