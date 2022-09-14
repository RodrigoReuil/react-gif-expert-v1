//paso 3-2
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {
  const { images, isLoading } = useFetchGifs( category );//paso 4-1
  //console.log({isLoading});
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )//se muestra solo si es true
        }
        <div className="card-grid">
          {
            images.map( img => ( //paso 4-2
              <GifItem key={img.id}
                       { ...img }   //... exparce toda la clase con sus nombres y no es necesario pasar los parametros
              />
            ))
          }
        </div>
        {/* <ol> {  images.map( ({ id, title }) => ( <li key={ id }>{ title }</li> ))  } </ol> */}
    </>
  )
}