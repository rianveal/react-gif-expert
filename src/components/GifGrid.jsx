import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const{images, isLoading} = useFetchGifs({category});
  // console.log(images, isLoading);
  

  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const gifs = await getGifs(category);
  //   setImages(gifs);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []); // [] vector vacio para que solo se ejecute una vez

  return (
    <>
      <h3>{category}</h3>
      { isLoading && <p>Cargando...</p> }
      <div className='card-grid'>
        {
          images.map(img => {
            return (
              <GifItem 
                key={img.id} 
                { ...img } /> // Esto es lo mismo que poner title={img.title} url={img.url}
            )
          })
        } 
      </div>
    </>
  )
}
